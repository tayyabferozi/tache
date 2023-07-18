import clsx from "clsx";

import abbrNum from "../../../../utils/friendly-number";
import "./Post.scss";
import { Link } from "react-router-dom";

const typeIcons = {
  Articles: "/assets/vectors/icons/post-article.svg",
  Podcast: "/assets/vectors/icons/post-article-podcast.svg",
  Video: "/assets/vectors/icons/post-article-video.svg",
  "Educational Content":
    "/assets/vectors/icons/post-article-educational-content.svg",
};

const Post = ({ el }) => {
  return (
    <Link
      to={"/blog-" + el.type.toLowerCase()}
      className={clsx("post-card", el.featured && "featured")}
    >
      <img className="post-img" src={el.img} alt={el.title} />

      <div className="text">
        <div>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <h5 className="fs-22 fw-600 mb-2 d-flex align-items-center gap-10">
              {el.title}{" "}
              {!el.featured && (
                <img
                  src="/assets/vectors/icons/green-chevron-top.svg"
                  title="chevron"
                  alt="chevron"
                />
              )}
            </h5>

            {el.featured && (
              <img
                src="/assets/vectors/icons/chevron-right.svg"
                alt="chevron"
                title="chevron"
              />
            )}
          </div>

          <p>
            {el.description.slice(0, 64)}
            {el.description.length > 64 && "..."}
          </p>
        </div>
        <div className="details">
          <div className="fs-18 text-primary-1 fw-500 d-flex align-items-center gap-2">
            <img
              src="/assets/vectors/icons/green-eye.svg"
              alt="green eye"
              title="green eye"
            />{" "}
            {abbrNum(el.views, 2)}
          </div>

          <div className="type">
            <img src={typeIcons[el.type]} alt={el.type} /> {el.type}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
