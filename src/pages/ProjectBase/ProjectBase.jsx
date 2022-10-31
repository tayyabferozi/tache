import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./ProjectBase.scss";

import Section from "../../components/Section";
import GridContainer from "../../components/GridContainer";
import SearchWrap from "../../components/SearchWrap/SearchWrap";
import ProjectTile from "./ProjectTile/ProjectTile";
import WorkerPool from "./WorkerPool/WorkerPool";
import Pagination from "./Pagination";

const data = [
  {
    title: "1 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "2 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "3 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "4 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "5 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "6 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "7 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "8 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "9 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "10 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "11 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "12 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "13 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "14 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "15 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
  {
    title: "16 Technology design template",
    access: "public",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    totalTickets: 12,
    activeTickets: 12,
    maintainers: [
      {
        img: "/assets/imgs/maintainer-1.png",
      },
      {
        img: "/assets/imgs/maintainer-2.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
      {
        img: "/assets/imgs/maintainer-3.png",
      },
      {
        img: "/assets/imgs/maintainer-4.png",
      },
      {
        img: "/assets/imgs/maintainer-5.png",
      },
      {
        img: "/assets/imgs/maintainer-6.png",
      },
    ],
    subscribes: "32 K",
    isSubscribed: false,
  },
];

const ProjectBase = () => {
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [dataLen, setDataLen] = useState(data.length);
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    const size = 4;

    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(data.length / 4))
        return prevState;
      const newData = data.filter((el) => el.title.includes(searchState));
      setDataLen(newData.length);
      return newData.slice((pageNumState - 1) * size, pageNumState * size);
    });
  }, [pageNumState, searchState]);

  return (
    <Section id="project-tickets">
      <h2>Project Base</h2>

      <GridContainer>
        <div className="col-xl-9">
          <SearchWrap
            searchState={searchState}
            setSearchState={setSearchState}
          />
        </div>
        <div className="col-xl-3 d-xl-block d-none"></div>

        <div className="col-xl-9">
          <AnimatePresence>
            <GridContainer rootClassName="mt-40 mt-767-34" rowClassName="g-20">
              {filteredData.map((el, idx) => {
                return (
                  <motion.div
                    key={"tile" + el.id + Math.random()}
                    transition={{ duration: 0.3 }}
                    initial={{ transform: "scale(.95)", opacity: 0.5 }}
                    animate={{ transform: "scale(1)", opacity: 1 }}
                    exit={{ transform: "scale(.95)", opacity: 0 }}
                    className="col-lg-6"
                  >
                    <ProjectTile id={idx} {...el} />
                  </motion.div>
                );
              })}
            </GridContainer>
          </AnimatePresence>
        </div>
        <div className="col-12 d-sm-none">
          <div className="my-20">
            <Pagination
              pageNumState={pageNumState}
              setPageNumState={setPageNumState}
              total={Math.ceil(dataLen / 4)}
            />
          </div>
        </div>
        <div className="col-xl-3">
          <div className="mt-40 mt-1199-0">
            <WorkerPool />
          </div>
        </div>

        <div className="d-sm-block d-none">
          <Pagination
            pageNumState={pageNumState}
            setPageNumState={setPageNumState}
            total={Math.ceil(dataLen / 4)}
          />
        </div>
      </GridContainer>
    </Section>
  );
};

export default ProjectBase;
