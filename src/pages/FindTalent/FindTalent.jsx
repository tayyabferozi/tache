import React from "react";
import SearchWrap from "../../components/SearchWrap";

import Section from "../../components/Section";

import "./FindTalent.scss";

const social = [
  {
    link: "https://www.facebook.com/",
    icon: "/assets/vectors/icons/logo-fb.svg",
    alt: "facebook",
  },
  {
    link: "https://www.twitter.com/",
    icon: "/assets/vectors/icons/logo-twitter-2.svg",
    alt: "twitter",
  },
  {
    link: "https://www.instagram.com/",
    icon: "/assets/vectors/icons/logo-insta.svg",
    alt: "insta",
  },
];

const FindTalent = () => {
  return (
    <Section id="find-talent">
      <div className="find-talent-main">
        <div className="head">
          <h2>Find Talent</h2>
          <p className="fs-18 mt-2">
            There's Only One Thing In The World I Want And That Is Search.
          </p>
        </div>

        <SearchWrap withBtn />

        <div className="social">
          {social.map((el, idx) => {
            return (
              <a
                href={el.link}
                target="_blank"
                rel="noreferrer"
                key={"talent-social" + idx}
                className="item"
              >
                <img src={el.icon} alt={el.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default FindTalent;
