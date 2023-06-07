import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext, useState } from "react";
import PostComment from "./PostComment";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import ReactPaginate from "react-paginate";
import CommentsBar from "./CommentsBar";
import { GlobalContext } from "../lib/globalContext";
import { convertTimeStamp } from "../lib/healper";
import RatingRender from "./UI/Rating/RatingRender";

export const getAverageRating = (data) => {
  if (!data.length) return 0;
  let tRating = 0;
  data.forEach((item) => (tRating += item.rating));
  return Math.abs(tRating / data.length).toFixed(1);
};
const Comments = ({ items, productId }) => {
  const { activePostComment, setActivePostComment } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  const settings = {
    size: 30,
    edit: false,
  };
  const settings1 = {
    size: 22,
    edit: false,
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * commentsPerPage);
    setCurrentPage(data.selected + 1);
  };

  if (activePostComment) {
    return (
      <div className="p-0 m-auto mx-10 mt-4 text-white border-2 border-white rounded-lg lg:p-6 2xl:mx-40 h-fit-content mb-60">
        <PostComment productId={productId} />
      </div>
    );
  }
  return (
    <div className="relative m-auto mx-2 mt-4 mb-32 text-white border-2 border-white rounded-lg pt-14 lg:pt-10 lg:pb-4 sm:mx-10 lg:px-4 2xl:mx-32 h-fit-content">
      <div className="absolute top-0 z-10 flex items-center justify-center w-48 h-12 text-2xl text-center uppercase transition transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full cursor-pointer select-none text-primary bg-dark hover:underline min-w-32 left-1/2">
        Reviews
      </div>
      <div className="grid grid-cols-1 gap-6 m-auto mx-8 mt-10 lg:grid-cols-2 lg:mx-10">
        <div className="relative border-2 border-white rounded-lg h-80 sm:h-64">
          <div className="absolute flex items-center justify-center text-5xl font-semibold text-yellow-300 transition transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-dark w-28 h-28 left-1/2 ">
            {getAverageRating(items) || 0}
          </div>
          <div className="flex flex-col justify-between sm:flex-row">
            <div className="mt-16 ml-0 text-lg font-semibold text-center sm:ml-12 ">
              <p>Review Count</p>
              <p className="inline-flex items-center justify-center px-4 mt-2 text-2xl text-black bg-white border-2 border-white rounded-full w-28">
                {items.length || 0}
              </p>
            </div>
            <div className="mt-4 mr-0 text-lg font-semibold text-center sm:mt-16 sm:mr-12">
              <p>Average Rating</p>
              <div className="mt-2 text-2xl text-yellow-300">
                <RatingRender
                  rating={getAverageRating(items)}
                  size="text-2xl"
                />
              </div>
            </div>
          </div>
          <a
            onClick={() => setActivePostComment(true)}
            className="cursor-pointer"
          >
            <div className="absolute flex items-center justify-center h-12 text-xl font-semibold text-center text-white transition ease-in-out transform -translate-x-1/2 -translate-y-1/2 bg-transparent border border-white rounded-sm cursor-pointer bottom-1 sm:bottom-4 hover:text-black hover:bg-white duration-400 left-1/2 w-52">
              Add a review
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center h-64 p-10 border-2 border-white rounded-lg">
          <CommentsBar data={items} />
        </div>
      </div>

      {/* <div className="flex items-center justify-end m-auto mx-8 my-4 text-lg font-semibold text-white lg:mx-10">
        <span className="mr-2">Sort by:</span>
        <div className="w-48 h-10 bg-transparent border-2 border-white"></div>
      </div> */}

      {items
        .slice(
          currentPage * commentsPerPage - commentsPerPage,
          currentPage * commentsPerPage
        )
        .map((item, idx) => (
          <div className="m-auto mx-8 my-4 lg:mx-10" key={idx}>
            <div className="items-center block border-2 border-white lg:flex h-fit-content">
              <div className="flex">
                <div className="relative m-2 border border-white w-18 h-18">
                  <Image
                    src={
                      item.authorProfilePic || "/img/default-profile-pic.jpg"
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="block sm:flex">
                  <div className="mt-2 ml-1 sm:w-48 w-min">
                    <p className="overflow-hidden text-sm font-semibold text-white sm:text-lg overflow-ellipsis whitespace-nowrap">
                      {item.authorName}
                    </p>
                    <p className="text-xs text-white sm:text-base whitespace-nowrap">
                      {convertTimeStamp(item.createdAt)}
                    </p>
                  </div>
                  <div className="inline-flex items-center w-32 my-0 ml-0 text-sm text-yellow-300 lg:w-40 sm:my-4 sm:ml-8">
                    <ReactStars value={item.rating} {...settings1} />
                  </div>
                </div>
              </div>
              <p className="pb-2 my-0 ml-2 mr-2 overflow-auto text-base font-semibold text-white lg:my-4 lg:ml-18 lg:pb-0 max-h-40">
                {item.comment}
              </p>
            </div>
          </div>
        ))}

      <ReactPaginate
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
        pageCount={Math.ceil(items.length / commentsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
        breakLabel={"..."}
        onPageChange={handlePageClick}
        containerClassName={
          "pagination  pb-6 lg:pb-0 select-none flex items-center justify-center"
        }
        activeClassName={"border-purple-400"}
      />
    </div>
  );
};

export default Comments;
