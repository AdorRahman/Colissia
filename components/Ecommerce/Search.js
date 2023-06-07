import { useState, Fragment, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { ProductContext } from "@lib/context/productContext";
import Image from "@components/Image";

const Search = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((product) => {
    if (
      product.tags?.toLowerCase().includes(searchTerms) ||
      product.name?.toLowerCase().includes(searchTerms) ||
      product.shortDesc?.toLowerCase().includes(searchTerms) ||
      product.desc?.toLowerCase().includes(searchTerms) ||
      product.slug?.toLowerCase().includes(searchTerms) ||
      product.category?.toLowerCase().includes(searchTerms)
    ) {
      return product;
    }
  });

  return (
    <>
      <a
        className="cursor-pointer"
        onClick={() => setActiveSearch(!activeSearch)}
      >
        <FaSearch />
      </a>
      <Transition
        as={Fragment}
        show={activeSearch}
        enter="transform transition duration-400"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-400 transition ease-in-out"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        <div
          className={`fixed flex justify-center items-center left-0 w-full z-45 bg-darker top-0 transform ${
            activeSearch
              ? "translate-y-0 opacity-1"
              : "-translate-y-full opacity-0"
          }`}
        >
          <a
            className="text-primary text-2xl absolute right-5 top-5 cursor-pointer"
            onClick={() => {
              setActiveSearch(false);
              setSearchTerms("");
            }}
          >
            <IoClose />
          </a>
          <div className="max-w-3xl mx-auto w-full">
            <div className="py-10">
              <input
                autoFocus={true}
                type="text"
                className="mt-0 bg-transparent block w-full px-0.5 border-0 border-b-2 border-gray-500 focus:ring-0 focus:border-gray-300"
                placeholder="Search products..."
                name="search"
                required
                value={searchTerms}
                onChange={(event) =>
                  setSearchTerms(event.target.value.toLowerCase())
                }
              />
            </div>
            <div
              onClick={() => {
                setActiveSearch(false);
                setSearchTerms("");
              }}
              className=""
            >
              {searchTerms.length == 0 ? null : searchTerms.length >= 3 ? (
                filteredProducts.length < 1 ? (
                  <div className="pb-5">
                    No product found :( Visit our{" "}
                    <Link href="/shop">
                      <a className="text-blue">Shop </a>
                    </Link>
                    to view all the products.
                  </div>
                ) : (
                  <div className="pb-5">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="pb-5">
                        <Link href={`/${product.category}/${product.slug}`}>
                          <a className="mb-10">
                            <div className="flex items-center">
                              <div className="relative mr-5 overflow-hidden rounded w-12 aspect-square">
                                <Image
                                  src={product.coverImage.url}
                                  objectFit="contain"
                                />
                              </div>
                              <div>
                                <h3>{product.name}</h3>
                                <p className="text-sm text-gray-400">
                                  {product.category}
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="pb-5">
                  Please enter at least 3 characters to search...
                </div>
              )}
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Search;
