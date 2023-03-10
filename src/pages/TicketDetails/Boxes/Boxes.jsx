import React from "react";
import GridContainer from "../../../components/GridContainer";

import "./Boxes.scss";

const boxes = [
  {
    icon: "/assets/imgs/ticket-box-1.png",
    title: "Base",
    price: 100,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/assets/imgs/ticket-box-2.png",
    title: "Money for coffee",
    price: 100,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/assets/imgs/ticket-box-3.png",
    title: "Buy a Beer",
    price: 100,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "/assets/imgs/ticket-box-4.png",
    title: "Mystery Bonus",
    price: "???",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Boxes = () => {
  return (
    <div className="boxes">
      <GridContainer rowClassName="justify-content-center">
        {boxes.map((el, idx) => {
          return (
            <div className="col-lg-3 col-lg-6 col-md-6" key={"box-" + idx}>
              <div className="box">
                <div className="name">
                  <div className="icon">
                    <img src={el.icon} alt={el.title} />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className="text-light-3 fw-500 mb-xl-3 mb-1">
                      {el.title}
                    </h5>
                    <h4 className="mb-xl-2 text-primary-1">${el.price}</h4>
                  </div>
                </div>
                <p>{el.desc}</p>
              </div>
            </div>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Boxes;
