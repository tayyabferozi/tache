import React from "react";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";

import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import HiringCompanies from "./HiringCompanies";
import CustomMDEditor from "../../../components/CustomMDEditor";
import AddSkill from "../../../modals/AddSkill";
import useModal from "../../../hooks/useModal";
import "./UserInfo.scss";

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
        closeModal={() => toggleShowSkillAddModal("close")}
      />
      <div className="user-info">
        <div className="cover">
          <img
            className="cover-img"
            src="/assets/imgs/bg-profile.png"
            alt="cover"
          />
          <AnimatePresence>
            {editState && (
              <motion.img
                key="upload-cover"
                variants={animVariants}
                initial="hide"
                animate="show"
                exit="hide"
                className="edit"
                src="/assets/vectors/icons/upload-2.svg"
                alt="upload"
              />
            )}
          </AnimatePresence>
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
                <AnimatePresence>
                  {editState && (
                    <motion.img
                      variants={animVariants}
                      key="upload-profile"
                      initial="hide"
                      animate="show"
                      exit="hide"
                      className="edit"
                      src="/assets/vectors/icons/upload.svg"
                      alt="upload"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="d-none d-sm-block">
              <HiringCompanies
                user={user}
                editState={editState}
                hiredBy={user.hiredBy}
                setUser={setUser}
              />
            </div>
          </div>
          <div className="info-main__center">
            <h4 className="d-flex align-items-center gap-20">
              {user.name}
              <div className="d-md-block d-none">
                <EditBtn editState={editState} startEditing={startEditing} />
              </div>
            </h4>

            <div className="mt-575-1 mt-2 d-flex align-items-center gap-10">
              <img src="/assets/vectors/icons/location.svg" alt="location" />
              <div className="fs-14">{user.location}</div>
            </div>

            <div className="options d-flex d-md-none flex-column">
              <div className="follow-boxes">
                <div className="follow-box">
                  <div className="fw-500 fs-16">{user.followers}</div>
                  <div className="fs-12 mt-1">Followers</div>
                </div>
                <div className="follow-box">
                  <div className="fw-500 fs-16">{user.following}</div>
                  <div className="fs-12 mt-1">Following</div>
                </div>
              </div>
              <EditBtn editState={editState} startEditing={startEditing} />
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
              </div>

              <div className="text-right">
                <div>
                  <div>
                    <div className="text-focus">Skills</div>
                  </div>

                  <div className="badges">
                    {user?.skills?.map((el, idx) => {
                      return <Badge key={"proflie-badge" + idx}>{el}</Badge>;
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

                <div className="d-block d-sm-none">
                  <HiringCompanies
                    editState={editState}
                    user={user}
                    hiredBy={user.hiredBy}
                    setUser={setUser}
                  />
                </div>

                <div className="d-sm-flex d-block justify-content-end">
                  <AnimatePresence>
                    {editState && (
                      <motion.div
                        key="save-changes"
                        variants={animVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        transition={{ type: "spring", stiffness: 75 }}
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
      </div>
    </>
  );
};

export default UserInfo;

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
        <Button className="h-40" inline primaryLight onClick={startEditing}>
          Edit Profile
        </Button>
      </motion.div>
    )}
  </AnimatePresence>
);
