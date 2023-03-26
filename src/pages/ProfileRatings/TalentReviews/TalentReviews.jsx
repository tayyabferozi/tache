import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import GridContainer from "../../../components/GridContainer";
import PaginationNum from "../../../components/PaginationNum";
import useModal from "../../../hooks/useModal";
import ReviewModal from "../../../modals/Review";
import cardAnimations from "../../../constants/card-animations";
import ReviewCard from "./ReviewCard";
import "./TalentReviews.scss";

const pageSize = 6;

const TalentReviews = ({
  title,
  rating,
  reviews: data,
  name,
  userState,
  setUserState,
}) => {
  const { show: showReviewModal, toggleShow: toggleReviewModal } =
    useModal(false);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCardHidden = (id) => {
    const idx = userState[name].findIndex((el) => el.id === id);

    if (idx < 0) return;

    setUserState((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      newState[name][idx].isHidden = !newState[name][idx].isHidden;

      if (newState[name][idx].isHidden) {
        const item = newState[name][idx];

        newState[name] = [].concat(
          newState[name].slice(0, idx),
          newState[name].slice(idx + 1),
          item
        );
      }

      return newState;
    });
  };

  const toggleTicketDisplayModal = (e, el) => {
    if (el.isHidden) return;
    if (
      e?.target?.classList?.contains("menu") ||
      e?.target?.classList?.contains("dots-icon") ||
      e?.target?.classList?.contains("menu-option")
    )
      return;
    toggleReviewModal();
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
  }, [pageNumState, data]);
  return (
    <>
      <ReviewModal
        show={showReviewModal}
        closeModal={() => toggleReviewModal("close")}
      />
      <div className="my-projects desc-box">
        <div className="sub-page-container">
          <div
            className="d-flex justify-content-between align-items-sm-start align-items-center gap-20 flex-wrap"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <h5 className="d-flex align-items-center gap-3">
              <img
                src="/assets/vectors/icons/user-octagon.svg"
                alt="user-octagon"
                title="My Projects"
              />
              {title}
            </h5>

            <div className="d-none d-sm-block">
              <div className="d-flex align-items-center gap-10">
                <img
                  className="d-none d-sm-inline"
                  src="/assets/vectors/icons/star.svg"
                  alt="star"
                  title="star"
                />{" "}
                <div className="flex-shrink-0 fw-600 fs-22">{rating} of 5</div>
              </div>
              <div className="mt-1">{data.length} Customer ratings</div>
            </div>

            <img
              className={clsx(isCollapsed && "mirrored", "d-block d-sm-none")}
              src="/assets/vectors/icons/arrow-3.svg"
              alt="arrow"
              title="arrow"
            />
          </div>

          <AnimatePresence>
            {(!isCollapsed || window.innerWidth > 575) && (
              <motion.div
                className="d-sm-block"
                initial={{ height: "auto" }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <div className="d-block d-sm-none mt-20">
                  <div className="d-flex align-items-center gap-10">
                    <img
                      className="d-none d-sm-ilnine"
                      src="/assets/vectors/icons/star.svg"
                      alt="star"
                      title="star"
                    />{" "}
                    <div className="flex-shrink-0 fw-600 fs-22">
                      {rating} of 5
                    </div>
                  </div>
                  <div className="mt-1">{data.length} Customer ratings</div>
                </div>

                <div className="mt-30">
                  <AnimatePresence>
                    <GridContainer>
                      {filteredData.map((el, idx) => {
                        return (
                          <motion.div
                            key={"my-projects" + el.id}
                            {...cardAnimations}
                            className="col-xxl-4 col-lg-6"
                          >
                            <div
                              onClick={(e) => toggleTicketDisplayModal(e, el)}
                            >
                              <ReviewCard
                                el={el}
                                id={el.id}
                                idx={idx}
                                toggleHidden={toggleCardHidden}
                                toggleReviewModal={toggleReviewModal}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </GridContainer>
                  </AnimatePresence>
                </div>

                <PaginationNum
                  className="mt-575-20 mb-575-30"
                  pageNumState={pageNumState}
                  setPageNumState={setPageNumState}
                  total={Math.ceil(data.length / pageSize)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TalentReviews;
