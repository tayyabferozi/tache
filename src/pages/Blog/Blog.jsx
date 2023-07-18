import Section from "../../components/Section";
import Title from "./Title";
import BlogContent from "./BlogContent";

import "./Blog.scss";

const Blog = ({ type }) => {
  return (
    <Section id="blog" className="pt-80">
      <Title type={type} />
      <hr className="mt-80 mb-30" />
      <BlogContent type={type} />
    </Section>
  );
};

export default Blog;
