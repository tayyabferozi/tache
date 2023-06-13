import React from "react";
import ReactMarkdown from "react-markdown";

import ContentHeading from "../ContentHeading";
import "./Intro.scss";

const md = `#### We Welcome you as a Tache Designer!! 🔥 \n At tache we take designs very seriously. We use the best quality designers and are excited to have you onboard. In the process, what software we use and provide you with any asse sheets or files you require to get started \n# Communication ☎️\n We are happy for you to message us : \n

- List item one
- List item two

Here we have some instructions for using markdown. It is really a simple language, and allows you to do cool stuff\n# What’s Next 📗\nLorem ipsum dolor sit amet consectetur. Iaculis accumsan fermentum egestas nulla morbi bibendum praesent ultricies. Lacus enim id aenean iaculis. Dolor turpis morbi pellentesque morbi lorem ut facilisis. Cras sed egestas non elit euismod leo.\n\n
Semper elit quis vitae erat ullamcorper arcu arcu. Fermentum nisl turpis quam posuere enim tortor aliquet urna auctor. Pulvinar dictum consectetur sollicitudin tincidunt sit lectus in odio tellus. Ac ipsum gravida eget viverra ut donec velit. Enim turpis dictum sed lacus at massa euismod scelerisque egestas. Praesent lacus semper non.`;

const Intro = () => {
  return (
    <div className="intro">
      <ContentHeading
        title="Introduction"
        icon="/assets/vectors/icons/intro.svg"
      />

      <div className="mt-24 md">
        <ReactMarkdown children={md} />
      </div>
    </div>
  );
};

export default Intro;
