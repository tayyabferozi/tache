import React from "react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import useModal from "../../../hooks/useModal";
import AddSkill from "../../../modals/AddSkill";
import "./UserInfo.scss";
import CustomMDEditor from "../../../components/CustomMDEditor";

const animVariants = {
  hide: {
    // opacity: 0,
  },
  show: {
    // opacity: 1,
  },
};

const UserInfo = ({ user, setUser, editState, setEditState }) => {
  const { show: showSkillAddModal, toggleShow: toggleShowSkillAddModal } =
    useModal(false);

  const inputChangeHandler = (e) => {
    setUser((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      newState.about = e.target.value;

      return newState;
    });
  };

  const startEditing = () => {
    setEditState(true);
  };

  const stopEditing = () => {
    setEditState(false);
  };

  return (
    <>
      <AddSkill
        show={showSkillAddModal}
        setUser={setUser}
        addedSkills={user.skills}
        closeModal={() => toggleShowSkillAddModal("close")}
      />
      <div className="desc-box p-30 p-767-20 p-575-10 " id="user-info-box">
        <div className="user-info">
          <div className="user-info-main">
            <div className="cover">
              <img
                className="cover-img"
                src="/assets/imgs/bg-profile.png"
                alt="cover"
              />
            </div>
            <div className="info-main">
              <div className="info-main__left">
                <div className="profile-img-container">
                  <div className="profile-img-wrap">
                    <img
                      className="profile-img"
                      src="/assets/vectors/profile-img.svg"
                      alt="profile-img"
                    />
                    <img
                      className="profile-badge"
                      src="/assets/imgs/profile-badge.png"
                      alt="profile-img"
                    />
                  </div>
                </div>

                <div className="d-none d-md-block">
                  {/* <HiringCompanies user={user} hiredBy={user.hiredBy} /> */}
                  <div className="mt-20">
                    <div>
                      <div className="text-focus">Skills</div>
                    </div>

                    <div className="badges">
                      {user?.skills?.map((el, idx) => {
                        return (
                          <Badge key={"proflie-badge" + idx}>{el.label}</Badge>
                        );
                      })}
                      <AnimatePresence>
                        {editState && (
                          <motion.div
                            key="add-skill"
                            variants={animVariants}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Badge
                              className="c-pointer"
                              onClick={toggleShowSkillAddModal}
                            >
                              +
                            </Badge>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-main__center">
                <div className="top">
                  <div className="left">
                    <h4 className="d-flex align-items-center gap-20">
                      {user.name}

                      <div className="d-sm-block d-none">
                        <EditBtn
                          editState={editState}
                          startEditing={startEditing}
                        />
                      </div>
                    </h4>

                    <div className="mt-575-1 mt-2 d-flex align-items-center gap-10">
                      <img
                        src="/assets/vectors/icons/location.svg"
                        alt="location"
                      />
                      <div className="fs-14 text-light-1">{user.location}</div>
                    </div>

                    <div className="d-sm-none d-block">
                      <EditBtn
                        editState={editState}
                        startEditing={startEditing}
                      />
                    </div>
                  </div>
                  <Right className="d-none d-lg-flex" user={user} />
                </div>

                <div className="text-content mt-34">
                  <div className="text-left">
                    <div>
                      <div className="text-focus">About us</div>
                    </div>

                    <div className="about-text">
                      {editState ? (
                        <CustomMDEditor
                          name="about"
                          value={user.about}
                          inputChangeHandler={inputChangeHandler}
                          footText="0/5000"
                        />
                      ) : (
                        <ReactMarkdown children={user.about} />
                      )}
                    </div>

                    <div className="d-md-block d-none">
                      <AnimatePresence>
                        {editState && (
                          <motion.div
                            key="save-changes"
                            variants={animVariants}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            transition={{ type: "spring", stiffness: 75 }}
                            className="mt-30 d-flex justify-content-end w-100"
                          >
                            <Button
                              className="save-btn"
                              persistHeight
                              primary
                              onClick={stopEditing}
                            >
                              Save Changes
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="d-block d-md-none">
                    <div className="mt-20 mt-767-0 mt-575-20">
                      <div>
                        <div className="text-focus">Skills</div>
                      </div>

                      <div className="badges">
                        {user?.skills?.map((el, idx) => {
                          return (
                            <Badge key={"proflie-badge" + idx}>
                              {el.label}
                            </Badge>
                          );
                        })}
                        <AnimatePresence>
                          {editState && (
                            <motion.div
                              key="add-skill"
                              variants={animVariants}
                              initial="hide"
                              animate="show"
                              exit="hide"
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Badge
                                className="c-pointer"
                                onClick={toggleShowSkillAddModal}
                              >
                                +
                              </Badge>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="d-md-none d-block">
                      <AnimatePresence>
                        {editState && (
                          <motion.div
                            key="save-changes"
                            variants={animVariants}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            transition={{ type: "spring", stiffness: 75 }}
                            className="mt-30 d-flex justify-content-end w-100"
                          >
                            <Button
                              className="save-btn"
                              persistHeight
                              primary
                              onClick={stopEditing}
                            >
                              Save Changes
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Right className="d-flex d-lg-none" user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;

const Right = ({ className, user }) => {
  return (
    <div className={clsx("right pt-2 mt-991-1", className)}>
      <div className="info-box">
        <div className="text-focus">Ratings</div>

        <div className="d-flex">
          <div className="d-flex gap-1 flex-shrink-0 me-10">
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star-empty.svg"
              alt="star-empty"
              title="star-empty"
            />
          </div>
          <div className="">{user.rating}</div>
        </div>
      </div>
      <div className="info-box">
        <div className="text-focus">Project Completed</div>

        <div className="d-flex justify-content-between align-items-end">
          <div className="fs-20 text-light-3 fw-500">
            {user.projectsCompleted}
          </div>
          <div className="text-primary-1 fs-13">
            {user.trend}
            <img
              className="timer-icon ms-1"
              src="/assets/vectors/icons/trend-up.svg"
              alt="trend-up"
            />
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="text-focus">Project Ongoing</div>

        <div className="d-flex justify-content-between align-items-end">
          <div className="fs-20 text-light-3 fw-500">
            {user.projectsOngoing}
          </div>
          <div className="fs-13 pb-1">{user.projectsOngoingPercent} %</div>
        </div>
      </div>
    </div>
  );
};

const EditBtn = ({ editState, startEditing }) => (
  <AnimatePresence>
    {!editState && (
      <motion.div
        key="save-changes"
        variants={animVariants}
        initial="hide"
        animate="show"
        exit="hide"
        transition={{ type: "spring", stiffness: 75 }}
      >
        <Button
          className="h-40 edit-btn"
          inline
          primaryLight
          onClick={startEditing}
        >
          Edit Profile
        </Button>
      </motion.div>
    )}
  </AnimatePresence>
);
