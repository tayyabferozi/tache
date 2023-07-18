import Badge from "../../../components/Badge";

import "./Title.scss";

const tags = ["Product", "Apps", "Team"];

const Title = ({ type }) => {
  let icon, badgeTxt;

  switch (type) {
    case "articles":
      icon = "post-article";
      badgeTxt = "Articles";
      break;

    case "podcast":
      icon = "post-article-podcast";
      badgeTxt = "Podcast";
      break;

    default:
      icon = "post-article-video";
      badgeTxt = "Video";
  }

  return (
    <>
      <div className="title">
        <div className="d-flex justify-content-center">
          <Badge className="d-flex align-items-center gap-10">
            <img src={`/assets/vectors/icons/${icon}.svg`} alt="" /> {badgeTxt}
          </Badge>
        </div>
        <h2 className="mt-2 mb-20">
          Connect teams and collaborate efficiently with Tache
        </h2>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          {tags.map((el, idx) => {
            return (
              <Badge
                key={"article-badge" + idx}
                className="text-primary-1"
                outlined
              >
                {el}
              </Badge>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Title;
