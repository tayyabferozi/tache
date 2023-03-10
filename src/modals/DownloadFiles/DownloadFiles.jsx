import React, { useState } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import "./DownloadFiles.scss";

const DownloadFiles = ({ ...rest }) => {
  const [itemsState] = useState([
    {
      title: "File 1",
    },
    {
      title: "File 2",
    },
    {
      title: "File 3",
    },
  ]);

  return (
    <Modal className="custom-order-modal" small {...rest}>
      <div className="small-modal-contents">
        <div className="small-head">
          <div className="small-title">
            <h5 className="fw-500">Files</h5>
            <img
              src="/assets/vectors/icons/close-3.svg"
              alt="close"
              className="small-close"
              title="close"
              onClick={rest.closeModal}
            />
          </div>
        </div>
        <div className="small-main">
          <ul className="items">
            {itemsState.map((el, idx) => {
              return (
                <li key={"downloadable-item" + idx} className="item px-1 pe-20">
                  <div>{el.title}</div>

                  <img
                    className="c-pointer"
                    src="/assets/vectors/icons/import-2.svg"
                    alt="download"
                    title="download"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="small-foot py-20 justify-content-center">
          <Button primary>Download All</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadFiles;
