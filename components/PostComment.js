import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../lib/firebase";
import { Spin } from "./Svg";
import { useState, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { GlobalContext } from "../lib/globalContext";
import { RiCloseCircleFill } from "react-icons/ri";
import { nanoid } from "nanoid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@lib/firebase";

const PostComment = ({ productId }) => {
  const { setActivePostComment } = useContext(GlobalContext);
  const [user, loading, error] = useAuthState(auth);
  const [comment, setComment] = useState(null);
  const [rating, setRating] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const settings = {
    size: 40,
    value: 0,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };
  if (loading) {
    return <p>Please wait...</p>;
  } else {
    if (!user) {
      <div>
        Please{" "}
        <Link href="/login">
          <a>login</a>
        </Link>{" "}
        to post review.
      </div>;
    }
  }

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!comment) {
      return setErrorMessage("Invalid data!");
    }
    if (!rating) {
      return toast.error("Please give a rating!");
    }
    try {
      setIsLoading(true);
      const id = nanoid();
      const commentRef = doc(db, "comments", id);
      await setDoc(
        commentRef,
        {
          id,
          productRef: productId,
          comment: comment,
          rating: rating,
          author: user.uid,
          authorName: user.displayName,
          authorEmail: user.email,
          authorProfilePic: user.photoURL || null,
          createdAt: Date.now(),
        },
        id
      );
      toast.success("Review posted!");
      setActivePostComment(false);
    } catch (error) {
      console.log(error);
      toast.error("Review not posted! Server error!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full relative  p-2 pt-4 rounded">
      <span
        onClick={() => setActivePostComment(false)}
        className="text-danger cursor-pointer text-3xl absolute right-5 top-5"
      >
        <RiCloseCircleFill />
      </span>
      <div className="flex ml-3">
        <div className="mr-3">
          <img
            src={user.photoURL}
            alt=""
            className="rounded-full w-16 aspect-square object-cover"
          />
        </div>
        <div>
          <h1 className="font-semibold">{user.displayName}</h1>
          <p className="font-xs text-gray-500">{user.email}</p>
        </div>
      </div>
      <form onSubmit={(event) => handelSubmit(event)}>
        <div className="mt-3 p-3 w-full">
          <ReactStars {...settings} />
          <textarea
            rows="3"
            required
            className="border p-2 rounded w-full text-gray-900"
            placeholder="Write review..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between mx-3">
          <div>
            <button
              type="submit"
              className="px-4 py-1 bg-primary text-white rounded font-light hover:bg-gray-700 outline-none focus:outline-none"
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
  );
};

export default PostComment;
