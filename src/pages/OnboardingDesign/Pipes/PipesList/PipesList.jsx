import React from "react";

import "./PipesList.scss";
import clsx from "clsx";

const PipesList = ({ pipesData, currPipe, setCurrPipe }) => {
  return (
    <div className="pipes-list">
      {pipesData.map((el, idx) => {
        let icon, name;
        switch (el.type) {
          case "reg":
            icon = (
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="circle"
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="21.5"
                />
                <path
                  className="to-white"
                  d="M22.002 32.0001C27.502 32.0001 32.002 27.5001 32.002 22.0001C32.002 16.5001 27.502 12.0001 22.002 12.0001C16.502 12.0001 12.002 16.5001 12.002 22.0001C12.002 27.5001 16.502 32.0001 22.002 32.0001Z"
                  fill="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="to-green"
                  d="M17.748 22L20.578 24.83L26.248 19.17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            );
            name = "Regular";
            break;
          case "vid":
            icon = (
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="circle"
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="21.5"
                />
                <path
                  className="to-white"
                  d="M32.0039 25V19C32.0039 14 30.0039 12 25.0039 12H19.0039C14.0039 12 12.0039 14 12.0039 19V25C12.0039 30 14.0039 32 19.0039 32H25.0039C30.0039 32 32.0039 30 32.0039 25Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="to-green"
                  d="M12.5234 17.1101H31.4834"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="to-green"
                  d="M18.5234 12.11V16.97"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="to-green"
                  d="M25.4766 12.11V16.52"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="to-green"
                  d="M19.75 24.4499V23.2499C19.75 21.7099 20.84 21.0799 22.17 21.8499L23.21 22.4499L24.25 23.0499C25.58 23.8199 25.58 25.0799 24.25 25.8499L23.21 26.4499L22.17 27.0499C20.84 27.8199 19.75 27.1899 19.75 25.6499V24.4499V24.4499Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            );
            name = "Video";
            break;
          case "img":
            icon = (
              <>
                {" "}
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 44 44"
                >
                  <path
                    d="M22,.5h0A21.51,21.51,0,0,1,43.5,22h0A21.51,21.51,0,0,1,22,43.5h0A21.51,21.51,0,0,1,.5,22h0A21.51,21.51,0,0,1,22,.5Z"
                    fill="none"
                    className="circle"
                  />
                  <path
                    className="to-outline-white"
                    d="M19,32h6c5,0,7-2,7-7V19c0-5-2-7-7-7H19c-5,0-7,2-7,7v6C12,30,14,32,19,32Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    className="to-white"
                    d="M19,20a2,2,0,1,0-2-2A2,2,0,0,0,19,20Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    className="to-white"
                    d="M32,23.9l-1.63-1.4a2.23,2.23,0,0,0-2.82,0l-4.16,3.57a2.23,2.23,0,0,1-2.82,0l-.33-.29a2.25,2.25,0,0,0-2.64-.14L12.67,29C13.6,31.14,15.6,32,19,32h6c5,0,7-2,7-7Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </>
            );
            name = "Images";
            break;
          case "file":
            icon = (
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="circle"
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="21.5"
                />
                <path
                  className="to-white"
                  d="M20.0039 16H24.0039C26.0039 16 26.0039 15 26.0039 14C26.0039 12 25.0039 12 24.0039 12H20.0039C19.0039 12 18.0039 12 18.0039 14C18.0039 16 19.0039 16 20.0039 16Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="to-white"
                  d="M26 14.02C29.33 14.2 31 15.43 31 20V26C31 30 30 32 25 32H19C14 32 13 30 13 26V20C13 15.44 14.67 14.2 18 14.02"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            );
            name = "Files";
            break;
          default:
            icon = (
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="circle"
                  x="0.5"
                  y="0.5"
                  width="43"
                  height="43"
                  rx="21.5"
                />
                <path
                  className="to-white"
                  d="M20.0693 12.82L13.1393 18.37C12.3593 18.99 11.8593 20.3 12.0293 21.28L13.3593 29.24C13.5993 30.66 14.9593 31.81 16.3993 31.81H27.5993C29.0293 31.81 30.3993 30.65 30.6393 29.24L31.9693 21.28C32.1293 20.3 31.6293 18.99 30.8593 18.37L23.9293 12.83C22.8593 11.97 21.1293 11.97 20.0693 12.82Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 28V25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="to-green"
                />
              </svg>
            );
            name = "Introduction";
            break;
        }

        return (
          <div
            className={clsx(
              currPipe === idx + 1 && "active",
              currPipe > idx + 1 && "passed",
              "pipe-list-item"
            )}
            key={"pipe-list-items" + idx}
            onClick={() => setCurrPipe(idx + 1)}
          >
            <div className="icon-container">{icon}</div>
            <div className="text">
              <div className="fs-18 fw-500 name">{name}</div>
              <div className="fs-12 desc">{el.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PipesList;
