import React, { useState, useRef } from "react";

import Header from "./Header";
import Pipes from "./Pipes";
import ConfirmationModal from "../../modals/Confirmation";
import useModal from "../../hooks/useModal";

import "./OnboardingDesign.scss";

const OnboardingDesign = () => {
  const [isInEditState, setIsInEditState] = useState(false);
  const [currPipe, setCurrPipe] = useState(1);
  const [isPipeTouched, setIsPipeTouched] = useState(false);
  const [pipeSnapshot, setPipeSnapshot] = useState({});
  const [pipesDataState, setPipesDataState] = useState([
    {
      type: "intro",
      description: "Vitae volutpat",
      md: `#### We Welcome you as a Tache Designer!! 🔥 \n At tache we take designs very seriously. We use the best quality designers and are excited to have you onboard. In the process, what software we use and provide you with any asse sheets or files you require to get started \n# Communication ☎️\n We are happy for you to message us : \n

- List item one
- List item two

Here we have some instructions for using markdown. It is really a simple language, and allows you to do cool stuff\n# What’s Next 📗\nLorem ipsum dolor sit amet consectetur. Iaculis accumsan fermentum egestas nulla morbi bibendum praesent ultricies. Lacus enim id aenean iaculis. Dolor turpis morbi pellentesque morbi lorem ut facilisis. Cras sed egestas non elit euismod leo.\n\n
Semper elit quis vitae erat ullamcorper arcu arcu. Fermentum nisl turpis quam posuere enim tortor aliquet urna auctor. Pulvinar dictum consectetur sollicitudin tincidunt sit lectus in odio tellus. Ac ipsum gravida eget viverra ut donec velit. Enim turpis dictum sed lacus at massa euismod scelerisque egestas. Praesent lacus semper non.
      `,
    },
    {
      type: "reg",
      description: "Vitae volutpat",
      md: `
# Public Descriptions \n

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus
\n
Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi donec facilisi venenatis. Nisi felis vitae in ut. \n

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

- Cras malesuada massa non, id donec pulvina
- Cras malesuada massa non, id donec pulvina
- Cras malesuada massa non, id donec pulvina

Blandit at duis pharetra magna sit metus integer. Nullam malesuada feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.

\n\n
# Document

Blandit at duis pharetra magna sit metus integer. Nullam malesuada feugiat tortor in. Magna nisi ut mi malesuada feugiat blandit nisi.
\n
Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi donec facilisi venenatis. Nisi felis vitae in ut.
      `,
      files: [
        {
          id: "pipe-content-regular-downlaod-1",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-2",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-3",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-4",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-5",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-6",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-7",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-8",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-9",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-10",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-11",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-12",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-13",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-14",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-15",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-16",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-17",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-18",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-19",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-20",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-21",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-22",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-23",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-24",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-25",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-26",
          name: "Document",
          date: "Fri 26 Aug",
        },
        {
          id: "pipe-content-regular-downlaod-27",
          name: "Document",
          date: "Fri 26 Aug",
        },
      ],
    },
    {
      type: "vid",
      description: "Vitae volutpat",
      md: "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus",
      files: [{ name: "Sample", src: "/assets/videos/sample.mp4" }],
    },
    {
      type: "img",
      description: "Vitae volutpat",
      md: "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus",
      files: [
        { id: 1, name: "Sample", src: "/assets/imgs/img1.png" },
        { id: 2, name: "Sample", src: "/assets/imgs/img2.png" },
        { id: 3, name: "Sample", src: "/assets/imgs/img3.png" },
        { id: 4, name: "Sample", src: "/assets/imgs/img4.png" },
        { id: 5, name: "Sample", src: "/assets/imgs/img5.png" },
        { id: 6, name: "Sample", src: "/assets/imgs/img6.png" },
        { id: 7, name: "Sample", src: "/assets/imgs/img7.png" },
        { id: 8, name: "Sample", src: "/assets/imgs/img8.png" },
        { id: 9, name: "Sample", src: "/assets/imgs/img9.png" },
        { id: 10, name: "Sample", src: "/assets/imgs/img2.png" },
        { id: 11, name: "Sample", src: "/assets/imgs/img3.png" },
        { id: 12, name: "Sample", src: "/assets/imgs/img4.png" },
        { id: 13, name: "Sample", src: "/assets/imgs/img5.png" },
        { id: 14, name: "Sample", src: "/assets/imgs/img6.png" },
        { id: 15, name: "Sample", src: "/assets/imgs/img7.png" },
        { id: 16, name: "Sample", src: "/assets/imgs/img8.png" },
        { id: 17, name: "Sample", src: "/assets/imgs/img9.png" },
        { id: 18, name: "Sample", src: "/assets/imgs/img1.png" },
        { id: 19, name: "Sample", src: "/assets/imgs/img2.png" },
        { id: 20, name: "Sample", src: "/assets/imgs/img3.png" },
        { id: 21, name: "Sample", src: "/assets/imgs/img4.png" },
        { id: 22, name: "Sample", src: "/assets/imgs/img5.png" },
        { id: 23, name: "Sample", src: "/assets/imgs/img6.png" },
        { id: 24, name: "Sample", src: "/assets/imgs/img7.png" },
        { id: 25, name: "Sample", src: "/assets/imgs/img8.png" },
        { id: 26, name: "Sample", src: "/assets/imgs/img9.png" },
      ],
    },
    {
      type: "file",
      description: "Vitae volutpat",
      md: "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus",
      files: [
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
        {
          name: "Title Document",
          size: 9283,
        },
      ],
    },
  ]);

  const pipeIdxCache = useRef();

  const { show: showConfirmationModal, toggleShow: toggleConfirmationModal } =
    useModal(false);

  const takePipeSnapshot = () => {
    setPipeSnapshot(JSON.parse(JSON.stringify(pipesDataState)));
  };

  const setPipe = (idx, shouldConfirm) => {
    if (shouldConfirm && isInEditState && isPipeTouched) {
      pipeIdxCache.current = idx;
      toggleConfirmationModal();
    } else {
      setCurrPipe(idx);
      setIsInEditState(false);
    }
  };

  const confirmPageChange = () => {
    setCurrPipe(pipeIdxCache.current);
    revertPipeline();
    setIsInEditState(false);
  };

  const revertPipeline = () => {
    setPipesDataState(JSON.parse(JSON.stringify(pipeSnapshot)));
  };

  return (
    <div id="onboarding-design">
      <ConfirmationModal
        title="The changes to current pipe will be discarded"
        body="Are you sure you want to continue?"
        dangerBtnTxt="Yes"
        safeBtnTxt="No"
        onClickDelete={confirmPageChange}
        show={showConfirmationModal}
        closeModal={() => toggleConfirmationModal("close")}
      />
      <Header
        isInEditState={isInEditState}
        setIsInEditState={setIsInEditState}
        setPipesData={setPipesDataState}
      />
      <Pipes
        setPipesDataState={setPipesDataState}
        isInEditState={isInEditState}
        setIsInEditState={setIsInEditState}
        pipesData={pipesDataState}
        setPipesData={setPipesDataState}
        currPipe={currPipe}
        setCurrPipe={setPipe}
        takePipeSnapshot={takePipeSnapshot}
        toggleConfirmationModal={toggleConfirmationModal}
        setIsPipeTouched={setIsPipeTouched}
      />
    </div>
  );
};

export default OnboardingDesign;
