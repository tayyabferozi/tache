import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import GridContainer from "../../../components/GridContainer";
import DisplayTicket from "../../../modals/DisplayTicket";
import cardAnimations from "../../../constants/card-animations";
import useModal from "../../../hooks/useModal";
import Ticket from "../../../components/Ticket";

import "./Tickets.scss";
import PaginationNum from "../../../components/PaginationNum/PaginationNum";

const data = [
  {
    days: 5,
    state: "development",
    title: "Ticket title 1",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    title: "Ticket title 2",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 3",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 4",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 5",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 6",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 7",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 8",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    title: "Ticket title 9",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 10",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    title: "Ticket title 11",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 12",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 13",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    title: "Ticket title 14",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 15",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 16",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 17",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 18",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 19",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 20",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    title: "Ticket title 21",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 22",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    title: "Ticket title 23",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 24",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 25",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    title: "Ticket title 26",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 27",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 28",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 29",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 30",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 31",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 32",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
  {
    days: 5,
    title: "Ticket title 33",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 34",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    title: "Ticket title 35",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
  },
  {
    days: 5,
    state: "development",
    title: "Ticket title 36",
    payment: "100",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
    tags: ["Frontend", "Database", "UI"],
    mysteryBonus: 20,
  },
];

const Tickets = ({ filterState, searchState }) => {
  const pageSize = 12;

  const { show: showTicketDisplayModal, toggleShow: toggleTicketDisplayModal } =
    useModal(false);

  const [show, setShow] = useState(false);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [dataLen, setDataLen] = useState(data.length);

  useEffect(() => {
    // SIMULATING API LOAD
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(data.length / pageSize))
        return prevState;
      const newData = data.filter((el) => {
        let shouldInclude = false;

        // SEARCH FILTER

        shouldInclude = el.title
          .toLowerCase()
          .includes(searchState.toLowerCase());

        // DROPDOWN FILTERS

        if (filterState === "In Development") {
          if (el.state !== "development") shouldInclude = false;
        }

        return shouldInclude;
      });

      // TO SHOW TOTAL IN THE PAGINATION (THIS LENGTH IS CALCULATED AFTER APPLYING FILTERS)

      setDataLen(newData.length);

      // RETURNING CURRENT PAGE ITEMS ONLY

      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, filterState, searchState]);

  return (
    <>
      <DisplayTicket
        show={showTicketDisplayModal}
        closeModal={() => toggleTicketDisplayModal("close")}
      />
      <div className="project-tickets">
        <AnimatePresence>
          <GridContainer rowClassName="g-20">
            {show
              ? filteredData.map((el, idx) => {
                  return (
                    <motion.div
                      key={"ticket" + el.id + Math.random()}
                      {...cardAnimations}
                      className="col-xl-4 col-md-6"
                      onClick={toggleTicketDisplayModal}
                    >
                      <div key={"project-ticket-" + idx} className="">
                        <Ticket idx={idx} {...el} />
                      </div>
                    </motion.div>
                  );
                })
              : new Array(12).fill(0).map((el, idx) => {
                  return (
                    <div
                      key={"skeleton-ticket" + idx}
                      className="col-xl-4 col-md-6"
                    >
                      <Ticket skeleton />
                    </div>
                  );
                })}
          </GridContainer>
        </AnimatePresence>

        <PaginationNum
          pageNumState={pageNumState}
          setPageNumState={setPageNumState}
          total={Math.ceil(dataLen / pageSize)}
        />
      </div>
    </>
  );
};

export default Tickets;
