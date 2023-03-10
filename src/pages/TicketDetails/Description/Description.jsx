import React, { useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AnimatePresence, motion } from "framer-motion";

import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import CustomMD from "../../../components/CustomMD";
import GridContainer from "../../../components/GridContainer";
import Input from "../../../components/Input";
import Comment from "../../../modals/DisplayTicket/Comment";
import CustomMDEditor from "../../../components/CustomMDEditor";
import SharedBox from "./SharedBox";
import "./Description.scss";
import TalendCard from "./TalentCard/TalendCard";
import PaginationNum from "../../../components/PaginationNum";
import cardAnimations from "../../../constants/card-animations";
import DescBox from "./DescBox/DescBox";

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

const comments = [
  {
    avatar: "/assets/imgs/avatar-1.png",
    name: "Alexander",
    subtext: "Comment 1 minute ago",
    role: "Author",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus, urna, id sit.",
    othersSelectedEmojis: {
      "🚀": 2,
      "👀": 3,
    },
  },
  {
    avatar: "/assets/imgs/avatar-2.png",
    name: "Alexander",
    subtext: "Comment 1 minute ago",
    role: "Author",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
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
  {
    avatar: "/assets/imgs/maintainer-2.png",
    repliedName: "Alexander",
    repliedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    name: "Me",
    subtext: "Comment 1 minute ago",
    role: "Author",
    text: "consectetur adipiscing elit. Imperdiet in fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus, urna, id sit.",
  },
  {
    avatar: "/assets/imgs/avatar-2.png",
    name: "Alexander",
    subtext: "Comment 1 minute ago",
    role: "Author",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const talents = [
  {
    id: 1,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 1",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 2,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 2",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 3,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 3",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 4,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 4",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 5,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 5",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 6,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 6",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 7,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 7",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 8,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 8",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 9,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 9",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 10,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 10",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 11,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 11",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 12,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 12",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 13,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 13",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 14,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 14",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 15,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 15",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    id: 16,
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William 16",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
];

const recommended = [
  {
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
  {
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate William",
    location: "Nanjing, China",
    badges: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    rating: 4.7,
    completedTicket: 12,
  },
];

const data = talents;
const pageSize = 4;

const Description = () => {
  const [formState, setFormState] = useState({
    documentComment: "",
    copyrightComment: "",
    files: [],
  });
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFormState((prevState) => {
        return {
          ...prevState,
          files: acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        };
      });
    },
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(data.length / pageSize))
        return prevState;
      let newData = [...data];

      // RETURNING CURRENT PAGE ITEMS ONLY
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState]);

  return (
    <div className="description">
      <DescBox
        icon="/assets/vectors/icons/globe.svg"
        title="Public Descriptions"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in
          fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus{" "}
          <br />
          Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum
          sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel
          posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi
          donec facilisi venenatis. Nisi felis vitae in ut.
        </p>

        <div className="code-block">
          <CustomMD markdown={markdown} />
        </div>

        <ul className="mb-3">
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
        </ul>

        <p>
          Blandit at duis pharetra magna sit metus integer. Nullam malesuada
          feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
        </p>
      </DescBox>
      <DescBox
        icon="/assets/vectors/icons/lock.svg"
        title="Private Descriptions"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in
          fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus{" "}
          <br />
          Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum
          sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel
          posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi
          donec facilisi venenatis. Nisi felis vitae in ut.
        </p>

        <div className="code-block">
          <CustomMD markdown={markdown} />
        </div>

        <ul className="mb-3">
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
          <li>Cras malesuada massa non, id donec pulvina</li>
        </ul>

        <p>
          Blandit at duis pharetra magna sit metus integer. Nullam malesuada
          feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
        </p>
      </DescBox>

      <SharedBox
        icon={"/assets/vectors/icons/document.svg"}
        title="Document"
        value={formState.documentComment}
        inputChangeHandler={inputChangeHandler}
      />
      <SharedBox
        icon={"/assets/vectors/icons/copyright.svg"}
        title="Copyright"
        value={formState.documentComment}
        inputChangeHandler={inputChangeHandler}
      />
      <DescBox icon="/assets/vectors/icons/submission.svg" title="Submission">
        <p>
          Blandit at duis pharetra magna sit metus integer. Nullam malesuada
          feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
        </p>

        <GridContainer rowClassName="mt-10">
          <div className="col-md-6 d-flex flex-column">
            <label class="text-light-1 fw-500">File</label>

            <div className="dropzone-container flex-grow-1" {...getRootProps()}>
              <div>
                {formState.files.length > 0 ? (
                  <>
                    {formState.files.map((el, idx) => {
                      return (
                        <div
                          key={"selected-file" + idx}
                          className="selected-file my-1 fs-14"
                        >
                          {el.name}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <img
                      className="icon"
                      src="/assets/vectors/icons/import.svg"
                      alt="import"
                    />
                    <div className="mt-2 text-light-2">Drop your file</div>
                    <div className="mt-1">JPG, SVG, PDF etc</div>
                  </>
                )}
              </div>
              <input {...getInputProps()} />
            </div>
          </div>
          <div className="col-md-6">
            <Input
              darkLabel
              textarea
              label="Description"
              name="submissionDescComment"
              value={formState.submissionDescComment}
              rows={10}
              placeholder="Writing your comment..."
            />

            <Button inline primaryLight className="h-45 mt-20 revision-btn">
              Submit Revision
            </Button>
          </div>
        </GridContainer>
      </DescBox>
      <DescBox
        icon="/assets/vectors/icons/ready-to-work.svg"
        title="Ready to work"
      >
        <AnimatePresence>
          <GridContainer>
            {filteredData.map((el, idx) => {
              return (
                <motion.div
                  className="col-lg-6"
                  key={"ready-to-work" + el.id}
                  {...cardAnimations}
                >
                  <TalendCard el={el} idx={idx} />
                </motion.div>
              );
            })}
          </GridContainer>
        </AnimatePresence>

        <PaginationNum
          className="mb-575-30 mt-575-20"
          pageNumState={pageNumState}
          setPageNumState={setPageNumState}
          total={Math.ceil(data.length / pageSize)}
        />
      </DescBox>
      <DescBox
        icon="/assets/vectors/icons/talent.svg"
        title="Recommended Talent"
      >
        <GridContainer>
          {recommended.map((el, idx) => {
            return (
              <div className="col-lg-6" key={"rec-talent" + idx}>
                <TalendCard el={el} idx={idx} />
              </div>
            );
          })}
        </GridContainer>

        <div className="mt-50 d-flex justify-content-end">
          <Button className="h-50 talent-btn" primary>
            Find More Talent
          </Button>
        </div>
      </DescBox>

      <div className="desc-box">
        <div className="sub-page-container">
          <div className="comments py-0">
            <h5 className="d-flex gap-2 align-items-center">
              Comment <Badge green>{comments.length}</Badge>
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

          <div className="add-comment p-0">
            <div className="add-comment-main">
              <div className="avatar">
                <img src="/assets/imgs/avatar-3.png" alt="avatar" />
              </div>

              <CustomMDEditor
                reply="Replying at alexandra"
                value={formState.comment}
                inputChangeHandler={inputChangeHandler}
                footText="Maximal 200 Character"
                placeholder="Writing another comment . . ."
              />
            </div>

            <div className="d-flex justify-content-end mt-40">
              <Button primary>Comment</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
