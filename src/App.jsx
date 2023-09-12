import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (blog) => {
    const ifExists = bookmarks.find((bookmark) => bookmark.id === blog.id);
    if (!ifExists) {
      setBookmarks([...bookmarks, blog]);
    } else {
      setBookmarks([...bookmarks]);
    }
    console.log({ setBookmarks });
  };
  const handleRead = (id, time) => {
    const newTime = parseInt(time);
    console.log("marking as read", newTime);
    setReadingTime(readingTime + newTime);
    console.log(setReadingTime);
    const filteredBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(filteredBookmarks);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="md:flex    justify-between gap-5 lg:gap-8">
          <Blogs
            handleBookmark={handleBookmark}
            handleRead={handleRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
