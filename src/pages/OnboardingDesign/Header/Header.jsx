import clsx from "clsx";

import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import useModal from "../../../hooks/useModal";
import DeletePipelineModal from "../../../modals/DeletePipeline";
import SubmitPipeline from "../../../modals/SubmitPipeline";

import "./Header.scss";

const Header = ({ isInEditState, setIsInEditState, setPipesData }) => {
  const {
    show: showDeletePipelineModal,
    toggleShow: toggleDeletePipelineModal,
  } = useModal(false);
  const {
    show: showSubmitPipelineModal,
    toggleShow: toggleSubmitPipelineModal,
  } = useModal(false);

  const deletePipelineHandler = () => {
    setPipesData([
      {
        type: "intro",
        description: "Vitae volutpat",
      },
    ]);
  };

  return (
    <ProjectLayoutSection bgGrey>
      <SubmitPipeline
        onClickFinalize={() => {
          toggleSubmitPipelineModal("close");
          setIsInEditState(false);
        }}
        show={showSubmitPipelineModal}
        closeModal={() => {
          toggleSubmitPipelineModal("close");
        }}
      />
      <DeletePipelineModal
        onClickDelete={deletePipelineHandler}
        show={showDeletePipelineModal}
        closeModal={() => toggleDeletePipelineModal("close")}
      />
      <div
        className={clsx(
          isInEditState && "d-flex justify-content-between flex-wrap gap-20"
        )}
      >
        <div>
          <h2 className="fs-36 pt-10 d-flex align-items-center justify-content-start">
            {isInEditState ? "Create Form" : "Design"}
            {!isInEditState && (
              <Badge className="ms-3" green outlined>
                Onboarding
              </Badge>
            )}
          </h2>

          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Vitae volutpat pulvinar
            tellus id dis vel. Sem.
          </p>
        </div>

        {isInEditState && (
          <div className="d-flex flex-column justify-content-center gap-2 flex-shrink-0">
            <Button
              icon={{
                src: "/assets/vectors/icons/clipboard-tick.svg",
                alt: "task completed",
                title: "task completed",
              }}
              textClassName="fs-12"
              className="h-30"
              primaryLight
              onClick={toggleSubmitPipelineModal}
            >
              Finish Project
            </Button>
            <Button
              icon={{
                src: "/assets/vectors/icons/trash-sm.svg",
                alt: "trash",
                title: "trash",
              }}
              textClassName="fs-12"
              className="h-30"
              redLight
              onClick={toggleDeletePipelineModal}
            >
              Delete Project
            </Button>
          </div>
        )}
      </div>
    </ProjectLayoutSection>
  );
};

export default Header;
