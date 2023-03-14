import React from "react";

import CustomMDEditor from "../../../../components/CustomMDEditor";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
import Button from "../../../../components/Button";
import useModal from "../../../../hooks/useModal";
import DownloadFiles from "../../../../modals/DownloadFiles";
import PurchaseReview from "../../../../modals/PurchaseReview";
import DescBox from "../DescBox/DescBox";

const SharedBox = ({ icon, title, value, inputChangeHandler, noRevisions }) => {
  const { show: showDownloadModal, toggleShow: toggleDownloadModal } =
    useModal(false);
  const {
    show: showPurchaseReviewModal,
    toggleShow: togglePurchaseReviewModal,
  } = useModal(false);

  return (
    <>
      <DownloadFiles
        show={showDownloadModal}
        closeModal={toggleDownloadModal}
      />
      <PurchaseReview
        show={showPurchaseReviewModal}
        closeModal={togglePurchaseReviewModal}
      />
      <DescBox icon={icon} title={title}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet in
          fringilla vel rhoncus, posuere ultrices risus. Est, at congue risus{" "}
          <br />
          Cras malesuada massa non, id donec pulvinar. Sed commodo dui elementum
          sit. Pretium aliquet cursus sem dictum egestas. Nam donec vitae vel
          posuere quis amet nibh dignissim suspendisse. Pretium quis odio morbi
          donec facilisi venenatis. Nisi felis vitae in ut.
        </p>

        <div className="d-flex flex-wrap justify-content-between gap-30">
          <div className="buttons">
            <DownloadBtn date="Fri 26 Aug" name="Document" />
            <DownloadBtn date="Fri 26 Aug" name="Document" />
            <DownloadBtn date="Fri 26 Aug" name="Document" />
            {/* <DownloadBtn date="Fri 26 Aug" name="Document" />
              <DownloadBtn date="Fri 26 Aug" name="Document" />
              <DownloadBtn date="Fri 26 Aug" name="Document" />
              <DownloadBtn date="Fri 26 Aug" name="Document" />
              <DownloadBtn date="Fri 26 Aug" name="Document" /> */}
          </div>
          <div className="d-flex gap-20 justify-content-sm-start w-575-100">
            <Button className="h-40 px-4" grey onClick={toggleDownloadModal}>
              Show All
            </Button>
            <Button className="h-40 px-4" primary>
              Download All
            </Button>
          </div>
        </div>

        <div className="buttons-2 d-flex flex-wrap justify-content-sm-start mt-50 mt-767-30 gap-10">
          <Button
            className="w-unset justify-content-start"
            primaryLight
            icon={{
              src: "/assets/vectors/icons/accept-work.svg",
              title: "accept work",
              alt: "accept work",
            }}
          >
            Accept Work
          </Button>
          <Button
            className="justify-content-start"
            textClassName="fs-16"
            bordered
            icon={{
              className: "w-20",
              src: "/assets/vectors/icons/dollar.svg",
              title: "dollar",
              alt: "dollar",
            }}
            onClick={togglePurchaseReviewModal}
          >
            Purchase Revision
          </Button>
        </div>

        {noRevisions ? (
          <div className="out-of-revisions">
            You have run out of revisions, purchase another to continue
          </div>
        ) : (
          <>
            <div className="custom-form-control mt-30">
              <label className="text-light-1" htmlFor="">
                Description
              </label>
              <CustomMDEditor
                name="submissionComment"
                placeholder="Writing your comment..."
                value={value}
                inputChangeHandler={inputChangeHandler}
                footText="0/5000"
              />
            </div>

            <div className="mt-20 d-flex">
              <Button primaryLight inline className="px-3 h-45 revision-btn">
                Submit Revision
              </Button>
            </div>
          </>
        )}
      </DescBox>
    </>
  );
};

export default SharedBox;
