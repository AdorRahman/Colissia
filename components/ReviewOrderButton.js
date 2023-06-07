import { Fragment, useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { RiCloseCircleFill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import AuthContext from "../lib/authContext";
import toast from "react-hot-toast";
import { Spin } from "./Svg";
import { nanoid } from "nanoid";
import { writeBatch, doc } from "firebase/firestore";
import { db } from "@lib/firebase";

const ReviewOrderButton = ({ products }) => {
  console.log(products);
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState(null);
  const [rating, setRating] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useContext(AuthContext);

  const settings = {
    size: 20,
    value: 0,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!comment) {
      return toast.error("Review should not be empty!");
    }
    if (!rating) {
      return toast.error("Please give a rating!");
    }
    try {
      setIsLoading(true);
      const batch = writeBatch(db);
      for (const product in products) {
        const id = nanoid();
        const commentRef = doc(db, "comments", id);
        batch.set(commentRef, {
          id,
          createdAt: Date.now(),
          productRef: products[product].productId,
          comment: comment,
          rating: rating,
          author: user.uid,
          authorName: user.displayName,
          authorEmail: user.email,
          authorProfilePic: user.photoURL || null,
        });
      }
      await batch.commit();
      toast.success("Review posted!");
      setShowForm(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setComment("");
      setIsLoading(false);
      setRating(null);
    }
  };
  return (
    <Fragment>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
        className="btn btn-secondary"
      >
        Give a review
      </button>
      <Transition
        show={showForm}
        as={Fragment}
        enter="transition transfrom duration-300"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 translate-y-full"
      >
        <div className="fixed bottom-0 right-0 z-50 w-full bg-gray-100 rounded-md shadow-lg">
          <form
            className="relative w-full"
            onSubmit={(event) => handelSubmit(event)}
          >
            <span
              onClick={() => {
                setRating(null);
                setComment(null);
                setShowForm(false);
              }}
              className="absolute text-3xl cursor-pointer text-danger right-4 top-2"
            >
              <RiCloseCircleFill />
            </span>
            <div className="w-full p-3">
              <ReactStars {...settings} />
              <textarea
                rows="6"
                required
                className="w-full p-2 mt-4 text-gray-900 border rounded"
                placeholder="Write review..."
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              ></textarea>
            </div>
            <div className="mx-3">
              <div>
                <button
                  type="submit"
                  className="px-8 py-3 mb-3 text-white rounded outline-none bg-primary font-md hover:bg-gray-700 focus:outline-none"
                >
                  {isLoading ? (
                    <span className="inline-flex text-white">
                      <Spin />
                      Please wait
                    </span>
                  ) : (
                    <>Submit</>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Transition>
    </Fragment>
  );
};

export default ReviewOrderButton;
