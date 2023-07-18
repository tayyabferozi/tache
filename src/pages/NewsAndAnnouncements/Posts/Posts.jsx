import { useState } from "react";

import GridContainer from "../../../components/GridContainer";
import Button from "../../../components/Button";
import Post from "./Post";
import Loader from "../../../components/Loader";
import "./Posts.scss";

const DUMMY_ITEMS = [
  {
    featured: true,
    img: "/assets/vectors/news-post-img-1.svg",
    title: "Video Chat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla",
    views: 24000,
    type: "Articles",
  },
  {
    featured: true,
    img: "/assets/vectors/news-post-img-2.svg",
    title: "Funding Acquired!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Podcast",
  },
  {
    img: "/assets/vectors/news-post-img-3.svg",
    title: "New Changes",
    description: "Lorem ipsum dolor sit amet consectetur.",
    views: 24000,
    type: "Video",
  },
  {
    img: "/assets/imgs/news-post-img-3.png",
    title: "UX review presentations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Educational Content",
  },
  {
    img: "/assets/imgs/news-post-img-4.png",
    title: "UX review presentations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Podcast",
  },
  {
    img: "/assets/imgs/news-post-img-5.png",
    title: "UX review presentations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Video",
  },
  {
    img: "/assets/imgs/news-post-img-3.png",
    title: "UX review presentations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Educational Content",
  },
  {
    img: "/assets/imgs/news-post-img-4.png",
    title: "UX review presentations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Podcast",
  },
  {
    img: "/assets/imgs/news-post-img-5.png",
    title: "UX review presentations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut faucibus aliquet nulla hac diam eget nunc id. Auctor facilisis",
    views: 24000,
    type: "Video",
  },
];

const Posts = () => {
  const [postsState, setPostsState] = useState(DUMMY_ITEMS);
  const [isLoading, setIsLoading] = useState(false);

  const addMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPostsState((prevState) => [...prevState, ...DUMMY_ITEMS]);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="posts">
      <GridContainer rowClassName="g-20">
        {postsState.map((el, idx) => {
          return (
            <div className="col-xl-4 col-md-6" key={"news-post" + idx}>
              <Post el={el} />
            </div>
          );
        })}
      </GridContainer>
      <div className="d-flex justify-content-center mt-60">
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            inline
            primaryLight
            icon={{
              src: "/assets/vectors/icons/arrow-down.svg",
              title: "arrow down",
              alt: "arrow down",
            }}
            onClick={addMoreItems}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Posts;
