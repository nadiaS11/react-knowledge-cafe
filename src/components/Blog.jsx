import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmark, handleRead }) => {
  const {
    id,
    title,
    cover,
    hashtags,
    author_img,
    name,
    posted_date,
    reading_time,
  } = blog;

  return (
    <div className=" w-full mx-auto space-y-3 mb-16">
      <img className="" src={cover} alt="" />

      <div className=" flex  justify-between">
        <div className=" flex ">
          <img className=" w-12 h-12 rounded-full" src={author_img} alt="" />
          <div className="mx-4 text">
            <h3 className="font-bold text-xl">{name}</h3>
            <p className=" text-gray-500 font-semibold text-base">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-2 self-start text-gray-500">
          <h4>{reading_time} read</h4>
          <button onClick={() => handleBookmark(blog)}>
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className=" text-4xl font-bold ">{title}</h2>
      <p className=" text-gray-500">
        {hashtags.map((hashtag, idx) => (
          <span key={idx}> #{hashtag} </span>
        ))}
      </p>
      <button
        onClick={() => handleRead(id, reading_time)}
        className=" text-sm underline font-semibold text-purple-800 py-1 px-2"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
