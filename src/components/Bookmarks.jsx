import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(readingTime);
  return (
    <div className=" w-2/5 mx-auto space-y-5">
      <h2 className=" rounded-lg px-2 text-xl font-bold bg-[#1111110D] border border-solid border-gray-300 py-4">
        Spent time on reading: {readingTime}
      </h2>
      <div className=" rounded-lg px-2 py-4 text-xl font-semibold border border-solid border-gray-300 bg-[#1111110D]">
        <h2 className=" rounded-lg px-2 text-xl font-semibold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
