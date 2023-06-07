import { useContext, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import toast from "react-hot-toast";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaWhatsapp,
  FaHandPointUp,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import Comments, { getAverageRating } from "../Comments";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillStar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { MdVpnLock } from "react-icons/md";
import Router from "next/router";
import { firestoreToJSON, formatPrice, getMinVariant } from "@lib/healper";
import Image from "@components/Image";
import AuthContext from "@lib/authContext";
import { isProductInWishlist, toggleWishlist } from "@lib/wishList";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "@lib/firebase";
import RatingRender from "@components/UI/Rating/RatingRender";

const ProductViewSingle = ({ product }) => {
  const { addItem, emptyCart } = useCart();
  const { variants } = product;
  const [quantity, setQuantity] = useState(1);
  const minVariant = getMinVariant(variants);
  const [selectedVariant, setSelectedVariant] = useState(minVariant);
  const [varientDesc, setVariantDesc] = useState(minVariant?.description);
  const [playerId, setPlayerId] = useState(null);
  const [ign, setIgn] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handelWishlist = async () => {
    if (!user) {
      toast.error("You need to login to add to wishlist");
    }
    try {
      setIsFavorite(!isFavorite);
      await toggleWishlist(product.id, user.uid);
      toast.success(isFavorite ? "Remove from wishlist" : "Added to wishlist!");
    } catch (error) {
      console.log(error);
    }
  };

  const buyNow = async () => {
    if (selectedVariant.length < 1) {
      return toast.error("Please select a variant!");
    }
    emptyCart();
    addItem(
      {
        ...product,
        id: selectedVariant.id,
        productId: product.id,
        price: selectedVariant.salePrice || selectedVariant.price,
        ign,
        playerId,
        idCard,
        selectedVariant,
      },
      quantity
    );
    Router.push("/checkout");
  };

  const addToCart = () => {
    if (!product.inStock) {
      toast.error("Product is out of stock");
      return;
    }
    addItem(
      {
        ...product,
        id: selectedVariant.id,
        productId: product.id,
        ign,
        playerId,
        idCard,
        price: selectedVariant.salePrice || selectedVariant.price,
        selectedVariant,
      },
      quantity
    );
    toast.success("Item added to cart!");
  };

  const getMin = (items) => {
    const sItems = items.sort(function (a, b) {
      return a.price - b.price;
    });
    return sItems[0]?.price || 0;
  };
  const getMax = (items) => {
    const sItems = items.sort(function (a, b) {
      return a.price - b.price;
    });
    return sItems[sItems.length - 1]?.price || 0;
  };

  useEffect(() => {
    const checkIfFavorite = async () => {
      const value = await isProductInWishlist(product.id, user.uid);
      setIsFavorite(value);
    };
    checkIfFavorite();
  }, []);

  useEffect(() => {
    const unsubs = async () => {
      const q = query(
        collection(db, "comments"),
        where("productRef", "==", product.id),
        orderBy("createdAt", "desc")
      );
      const snaps = onSnapshot(q, (querySnapshot) => {
        if (querySnapshot) {
          setComments(querySnapshot.docs.map(firestoreToJSON));
        }
      });

      setIsLoading(false);
    };
    unsubs();
  }, []);

  if (!product) return <></>;

  return (
    <>
      <div className={`grid grid-cols-12 gap-3 py-20`}>
        <div className="col-span-12 lg:col-span-3 2xl:col-span-4 ">
          <p className="py-1 text-4xl font-semibold text-white lg:text-2vw">
            {product.name}
          </p>
          <div className="inline-flex items-center py-1 text-xl">
            {product.region && (
              <>
                <span className="text-gray-400">
                  <MdVpnLock />
                </span>
                <p className="pr-6 mt-1 ml-2 font-semibold text-gray-300">
                  {product.region}
                </p>
              </>
            )}
            <p className="mt-1 font-semibold text-primaryLight2">
              {`${formatPrice(getMin(variants))} - ${formatPrice(
                getMax(variants)
              )}`}
            </p>
          </div>
          <div className="flex items-center pb-1">
            <div className="inline-flex text-xl text-yellow-300">
              <RatingRender
                size="text-xl"
                rating={getAverageRating(comments)}
              />
            </div>
            <p className="px-2 text-lg text-white cursor-pointer w-max hover:underline">
              ({comments.length} customer reviews)
            </p>
          </div>
          <div className="pb-4 mt-4 overflow-auto text-base text-white border-b-2 border-white lg:min-h-40 max-h-60 xl:max-h-80">
            {product.description}
            <p className="">{product.shortDesc}</p>
          </div>

          <div className="inline-flex items-center mt-4 text-lg font-semibold text-white uppercase cursor-pointer text-">
            <p className="mr-2">
              See our <span className="text-red-600">140</span> reviews on
            </p>
            <span className="flex items-center justify-center text-green-500">
              <SiTrustpilot />
              <p className="ml-1 text-white capitalize">Trustpilot</p>
            </span>
          </div>
          <div className="mb-10">
            <p className="py-1 text-xl text-white">Spread The Love</p>
            <div className="flex">
              <a
                href={encodeURI(
                  `https://www.facebook.com/sharer/sharer.php?u=https://curiouscraftltd.com/${product.category}/${product.slug}`
                )}
                target="_blank"
                className="mr-3 text-2xl text-fb"
              >
                <FaFacebook />
              </a>
              <a
                href={encodeURI(`https://m.me/curiouscraftltd.com/`)}
                target="_blank"
                className="mr-3 text-2xl text-blue"
              >
                <FaFacebookMessenger />
              </a>
              <a
                href={encodeURI(
                  `https://api.whatsapp.com/send?text=https://curiouscraftltd.com/${product.category}/${product.slug}`
                )}
                target="_blank"
                className="mr-3 text-2xl text-whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a href="#" target="_blank" className="mr-3 text-2xl text-insta">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 overflow-hidden sm:col-span-6 lg:col-span-4 2xl:col-span-4">
          <div className="relative w-11/12 h-auto p-4 m-auto overflow-hidden bg-white rounded-2xl">
            <div className="p-4 product-image rounded-2xl w-full aspect-square relative">
              {product.coverImage && (
                <Image
                  src={product.coverImage?.url}
                  objectFit="contain"
                  priority={true}
                />
              )}
            </div>
          </div>
        </div>
        <div className="relative col-span-12 p-6 sm:p-0 sm:col-span-6 lg:col-span-5 2xl:col-span-4 ">
          <p className="text-2xl font-semibold text-white ">Face Value</p>
          <div>
            <div className="mt-3">
              <div className="flex flex-wrap w-full">
                {variants?.map((item) => (
                  <div
                    onClick={() => {
                      setSelectedVariant(item);
                      setVariantDesc(item.description);
                    }}
                    key={item.id}
                    className={`flex items-center select-none mr-3 mb-3 justify-center text-xl font-semibold  border-4 border-white cursor-pointer min-w-32 min-h-12 hover:border-purple-400 ${
                      selectedVariant.id == item.id
                        ? "border-purple-400 bg-purple-400 text-white"
                        : "text-black bg-white"
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="relative mb-3 overflow-hidden text-lg font-semibold h-14 text-primaryLight2">
            {varientDesc}
          </p>
          <div className="inline-flex flex-wrap my-3">
            {product.requiredPlayerId && (
              <div className="relative mr-3 text-base font-semibold text-white">
                <p>PlayerID:</p>
                <input
                  onChange={(event) => {
                    setPlayerId(event.target.value);
                  }}
                  value={playerId}
                  className="w-48 h-10 px-2 bg-transparent border-2 border-white"
                />
              </div>
            )}
            {product.requiredIgn && (
              <div className="relative mr-3 text-base font-semibold text-white">
                <p>In-Game Nickname (IGN):</p>
                <input
                  onChange={(event) => {
                    setIgn(event.target.value);
                  }}
                  value={ign}
                  className="w-48 h-10 px-2 bg-transparent border-2 border-white"
                />
              </div>
            )}
          </div>
          <div className="relative inline-flex w-full my-3 text-lg font-semibold text-white ">
            <div
              onClick={() =>
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
              }
              className="flex items-center justify-center w-8 h-8 text-xl font-semibold text-black rounded-full cursor-pointer select-none bg-lightYellow"
            >
              -
            </div>
            <div className="flex items-center justify-center w-20 h-8 mx-2 text-xl font-semibold text-black bg-white rounded-full ">
              {quantity}
            </div>
            <div
              onClick={() => setQuantity(quantity + 1)}
              className="flex items-center justify-center w-8 h-8 text-xl font-semibold text-black rounded-full cursor-pointer select-none bg-lightYellow"
            >
              +
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="relative inline-flex mt-3 text-lg font-semibold text-white mr-36 ">
              <div className="inline-grid items-center justify-center w-40 h-24 py-4 text-black bg-white rounded-lg">
                {!selectedVariant ? (
                  <p className="px-8 text-center">Select a Variant!</p>
                ) : (
                  <>
                    <p>
                      {selectedVariant.salePrice
                        ? formatPrice(selectedVariant.salePrice * quantity)
                        : formatPrice(selectedVariant.price * quantity)}
                    </p>
                  </>
                )}
              </div>

              <div className="absolute inline-flex text-lg font-semibold text-white top-4  left-8.4rem ">
                <a className="cursor-pointer" onClick={addToCart}>
                  <div className="inline-grid items-center justify-center px-4 py-2 text-black transition ease-in-out rounded-lg select-none shadow-cartBtn h-18 w-max bg-lightYellow duration-400 hover:shadow-cartBtnhover hover:bg-green-200">
                    <p className="flex items-center text-base font-semibold uppercase ">
                      <span className="mr-1.5">
                        <RiShoppingCartFill />
                      </span>
                      add to cart
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative inline-flex text-lg font-semibold text-white mt-7">
              <a className="cursor-pointer" onClick={buyNow}>
                <div className="inline-grid items-center justify-center px-4 py-2 transition ease-in-out bg-transparent border rounded-lg select-none border-primaryLight2 text-primaryLight2 shadow-cartBtn h-18 duration-400 hover:shadow-cartBtnhover hover:bg-primaryLight2 hover:text-black">
                  <p className="flex items-center text-base font-semibold uppercase ">
                    <span className="mr-1.5">
                      <FaHandPointUp />
                    </span>
                    buy now
                  </p>
                </div>
              </a>
            </div>
          </div>
          <a onClick={handelWishlist} className="cursor-pointer">
            <div className="relative inline-flex items-center my-5 text-lg font-semibold text-white uppercase transition ease-in-out cursor-pointer duration-400 hover:text-red-600">
              {isFavorite ? (
                <>
                  <AiTwotoneHeart />
                  remove from wishlist
                </>
              ) : (
                <>
                  <AiOutlineHeart />
                  add to wishlist
                </>
              )}
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center m-auto mx-20 mb-8 text-2xl font-semibold mt-28"></div>
      <Comments items={comments} productId={product.id} />
    </>
  );
};

export default ProductViewSingle;
