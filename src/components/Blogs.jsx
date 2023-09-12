import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full mx-auto">
      {blogs.map((blog) => (
        <Blog
          handleBookmark={handleBookmark}
          handleRead={handleRead}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
