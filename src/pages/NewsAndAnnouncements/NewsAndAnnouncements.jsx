import Hero from "./Hero";
import Posts from "./Posts";
import Newsletter from "../../partials/Newsletter";

import "./NewsAndAnnouncements.scss";

const NewsAndAnnouncements = () => {
  return (
    <div id="news-and-announcements">
      <Hero />
      <Posts />
      <Newsletter />
    </div>
  );
};

export default NewsAndAnnouncements;
