import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import Button from "../../components/Button";
import Modal from "../../components/Modal/Modal";
import "./Review.scss";
import useSwiperRef from "../../hooks/useSwiperRef";

const Review = ({ ...rest }) => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Modal id="review-modal" {...rest}>
      <div className="fs-20 fw-500 text-light-1 d-flex align-items-center gap-10">
        <img
          src="/assets/vectors/icons/user-octagon.svg"
          alt="user"
          title="user"
        />
        Talent Reviews
      </div>

      <div className="p-relative mt-30">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevEl,
            nextEl: nextEl,
          }}
          spaceBetween={50}
        >
          {new Array(3).fill(0).map((el, idx) => (
            <SwiperSlide key={"swiper-slide" + idx}>
              <div className="slider-item">
                <div className="slider-img">
                  <img
                    src="/assets/imgs/review-modal.png"
                    alt="review modal"
                    title="review modal"
                  />
                </div>
                <div className="slider-txt">
                  <div className="fs-28 text-dark-1 fw-600">
                    Title of the task
                  </div>
                  <div className="mt-10 d-flex gap-20">
                    <div className="stars d-flex">
                      <img src="/assets/vectors/icons/star.svg" alt="star" />
                      <img src="/assets/vectors/icons/star.svg" alt="star" />
                      <img src="/assets/vectors/icons/star.svg" alt="star" />
                      <img src="/assets/vectors/icons/star.svg" alt="star" />
                      <img
                        src="/assets/vectors/icons/star-half-fllled.svg"
                        alt="star-half-filled"
                      />
                    </div>
                    <div className="d-inline-block">Thu 23 Feb</div>
                  </div>
                  <div className="mt-20">
                    <span className="text-primary-1 fs-18">
                      Lorem ipsum dolor sit
                    </span>{" "}
                    amet consectetur. Orci purus aenean massa elementum sed done
                    consequat done
                  </div>
                  <div className="mt-30 d-flex justify-content-between align-items-start gap-20">
                    <div className="d-flex gap-20 flex-shrink-0 flex-grow-1">
                      <img
                        className="quotes"
                        src="/assets/vectors/icons/quotes.svg"
                        alt="quotes"
                        title="qoutes"
                      />
                      <div className="text">
                        <div className="text-focus fs-16">
                          Talent Review Name
                        </div>
                        <div className="text-secondary-1 fs-14">
                          Founder Company
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-btns btns d-flex gap-10">
          <Button
            cref={prevRef}
            noText
            className="justify-content-center d-flex"
            bordered
            icon={{
              src: "/assets/vectors/icons/arrow-4.svg",
              title: "arrow",
              alt: "arrow",
              className: "mirrored transitioned",
            }}
          ></Button>
          <Button
            cref={nextRef}
            noText
            className="justify-content-center d-flex"
            bordered
            icon={{
              src: "/assets/vectors/icons/arrow-4.svg",
              title: "arrow",
              alt: "arrow",
            }}
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default Review;
