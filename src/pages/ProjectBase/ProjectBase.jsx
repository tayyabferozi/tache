import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./ProjectBase.scss";

import Section from "../../components/Section";
import GridContainer from "../../components/GridContainer";
import SearchWrap from "../../components/SearchWrap/SearchWrap";
import ProjectTile from "./ProjectTile/ProjectTile";
import WorkerPool from "./WorkerPool/WorkerPool";
import cardAnimations from "../../constants/card-animations";
import PaginationNum from "../../components/PaginationNum/PaginationNum";

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
  const pageSize = 4;

  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [dataLen, setDataLen] = useState(data.length);
  const [searchState, setSearchState] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(data.length / pageSize))
        return prevState;
      const newData = data.filter((el) =>
        el.title.toLowerCase().includes(searchState.toLowerCase())
      );
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, searchState]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      <Section id="project-base">
        <h2 id="project-base-search">Project Base</h2>

        <GridContainer>
          <div className="col-xl-9">
            <SearchWrap
              searchState={searchState}
              setSearchState={setSearchState}
              withAddBtn
            />
          </div>
          <div className="col-xl-3 d-xl-block d-none"></div>

          <div className="col-xl-9">
            <AnimatePresence>
              <GridContainer
                rootClassName="mt-40 mt-767-34"
                rowClassName="g-20"
              >
                {show
                  ? filteredData.map((el, idx) => {
                      return (
                        <motion.div
                          key={"tile" + el.id + Math.random()}
                          {...cardAnimations}
                          className="col-lg-6"
                        >
                          <ProjectTile id={idx} {...el} />
                        </motion.div>
                      );
                    })
                  : new Array(4).fill(0).map((el, idx) => {
                      return (
                        <div className="col-lg-6" key={"skeleton" + idx}>
                          <ProjectTile id={idx} {...el} skeleton />
                        </div>
                      );
                    })}
              </GridContainer>
            </AnimatePresence>
          </div>
          <div className="col-12 d-sm-none">
            <div className="my-20">
              <PaginationNum
                scrollTo="project-base-search"
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

          <div className="d-sm-block d-none pagination-lg">
            <PaginationNum
              scrollTo="project-base-search"
              pageNumState={pageNumState}
              setPageNumState={setPageNumState}
              total={Math.ceil(dataLen / pageSize)}
            />
          </div>
        </GridContainer>
      </Section>
    </>
  );
};

export default ProjectBase;
