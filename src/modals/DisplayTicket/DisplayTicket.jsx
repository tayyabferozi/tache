import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import MDEditor from "@uiw/react-md-editor";

import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Modal from "../../components/Modal/Modal";
import Comment from "./Comment";

import "./DisplayTicket.scss";

const markdown = `
~~~js
function Description() 
{  return (    
      <div>
         <div>Welcome to Tache</div>
      </div>  
    ) ;
}
export default Description;

~~~

`;

const tags = [
  "Frontend",
  "Database",
  "UI",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
  // "Database",
];

const downloadables = ["Document", "Document", "Document", "Document"];

const comments = [
  {
    avatar: "/assets/imgs/avatar-1.png",
    name: "Alexander",
    subtext: "Comment 1 minute ago",
    role: "Author",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus, urna, id sit.",
  },
  {
    avatar: "/assets/imgs/avatar-2.png",
    name: "Alexander",
    subtext: "Comment 1 minute ago",
    role: "Author",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const DisplayTicket = ({ ...rest }) => {
  const [formState, setFormState] = useState({
    comment: "Writing another comment...",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Modal id="display-ticket-modal" className="jumbo" {...rest}>
      <div className="jumbotron-wrapper">
        <div className="main-jumbotron">
          <div className="left">
            <img
              className="brand"
              src="/assets/imgs/brand-dropbox.png"
              alt="dropbox"
              title="dropbox"
            />

            <div className="text">
              <h2>Ticket Title</h2>

              <div className="badges">
                {tags.map((el, idx) => (
                  <Badge key={"badge" + idx}>{el}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="right">
            <div className="btns">
              <Button
                bordered
                icon={{
                  src: "/assets/vectors/icons/share.svg",
                  title: "share",
                  alt: "share",
                }}
              >
                Share
              </Button>
              <Button
                bordered
                icon={{
                  src: "/assets/vectors/icons/save.svg",
                  title: "save",
                  alt: "save",
                }}
              >
                Save
              </Button>
            </div>

            <div className="summary">
              <div className="item">
                <div className="icon">
                  <img src="/assets/vectors/icons/dollar-2.svg" alt="dollar" />
                </div>
                <div className="text fw-500">$100 + $20</div>
              </div>
              <div className="item">
                <div className="icon">
                  <img src="/assets/vectors/icons/clock.svg" alt="clock" />
                </div>
                <div className="text text-light-2">5 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="mb-md-3 mb-2 d-flex align-items-md-center justify-content-between flex-md-row flex-column gap-1">
          <h4 className="">Descriptions</h4>
          <div className="fs-14">Fri 26 Aug</div>
        </div>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in
          fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus
        </p>
        <p>
          Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum
          sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel
          posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi
          donec facilisi venenatis. Nisi felis vitae in ut.
        </p>

        <div className="my-4 react-md">
          <ReactMarkdown
            children={markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>

        <ul>
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
        </ul>

        <p className="mb-4">
          Blandit at duis pharetra magna sit metus integer. Nullam malesuada
          feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
        </p>

        <h5 className="mb-3">Document</h5>
        <p className="mb-4">
          Blandit at duis pharetra magna sit metus integer. Nullam malesuada
          feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
        </p>

        <div className="btns">
          {downloadables.map((el, idx) => {
            return (
              <Button
                key={"downloadable-" + idx}
                lightGrey
                icon={{
                  src: "/assets/vectors/icons/import.svg",
                }}
              >
                {el}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="comments">
        <h5 className="d-flex gap-2 align-items-center">
          Comment <Badge green>2</Badge>
        </h5>

        <div className="comments-main">
          {comments.map((el, idx) => {
            return (
              <Comment
                key={"comment-item" + idx}
                className={"comment-" + idx}
                {...el}
              />
            );
          })}
        </div>
      </div>

      <div className="add-comment pb-0">
        <div className="add-comment-main">
          <div className="avatar">
            <img src="/assets/imgs/avatar-3.png" alt="avatar" />
          </div>

          <div data-color-mode="light">
            <div className="md-editor-wrap">
              <MDEditor
                preview="edit"
                // extraCommands={[]}
                // commands={[[commands.codeEdit], [commands.codePreview]]}
                height={200}
                value={formState.comment}
                onChange={(e) =>
                  inputChangeHandler({
                    target: {
                      name: "comment",
                      value: e,
                    },
                  })
                }
              />
              <div className="foot">
                Attach files by dragging &amp; dropping, selecting or pasting
                them.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 pt-2">
          <div className="d-flex justify-content-end flex-sm-row flex-column-reverse align-items-start gap-3 ps-50">
            <Button onClick={() => rest.closeModal()} grey>
              Close with comment
            </Button>
            <Button onClick={() => rest.closeModal()} primary>
              Comment
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DisplayTicket;
