import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div>
      <h2 className=" rounded-lg px-2 my-4 py-4 text-xl font-semibold bg-white">
        {bookmark.title}
      </h2>
    </div>
  );
};

export default Bookmark;
