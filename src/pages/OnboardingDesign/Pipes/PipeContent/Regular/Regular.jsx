import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CustomMD from "../../../../../components/CustomMD";
import DownloadBtn from "../../../../../components/DownloadBtn";
import PaginationNum from "../../../../../components/PaginationNum";

import "./Regular.scss";

const md = `
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
`;

const files = [
  { id: "pipe-content-regular-downlaod-1", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-2", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-3", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-4", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-5", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-6", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-7", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-8", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-9", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-10", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-11", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-12", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-13", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-14", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-15", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-16", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-17", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-18", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-19", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-20", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-21", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-22", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-23", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-24", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-25", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-26", date: "Fri 26 Aug" },
  { id: "pipe-content-regular-downlaod-27", date: "Fri 26 Aug" },
];

const pageSize = 9;

const Regular = () => {
  const [dataLen, setDataLen] = useState(files.length);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredFiles, setFilteredFiles] = useState(files);

  useEffect(() => {
    setFilteredFiles((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(files.length / pageSize))
        return prevState;
      const newData = files;
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState]);

  return (
    <div className="regular">
      <div className="md">
        <CustomMD markdown={md} />
      </div>
      <div className="d-flex justify-content-between gap-10 download-btns">
        <AnimatePresence>
          {filteredFiles.map((el, idx) => {
            return (
              <motion.div
                key={el.id}
                {...{
                  transition: { duration: 0.3 },
                  initial: { transform: "scale(.95)", opacity: 0.5 },
                  animate: { transform: "scale(1)", opacity: 1 },
                  exit: {
                    transform: "scale(.95)",
                    opacity: 0,
                    display: "none",
                  },
                }}
              >
                <DownloadBtn date={el.date} name="Document" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {Math.ceil(dataLen / pageSize) !== 0 && (
        <PaginationNum
          offset={-20}
          scrollTo={"find-talent-search-bar"}
          total={Math.ceil(dataLen / pageSize)}
          pageNumState={pageNumState}
          setPageNumState={setPageNumState}
        />
      )}
    </div>
  );
};

export default Regular;
