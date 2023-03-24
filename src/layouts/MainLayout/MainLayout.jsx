import React from "react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";

import Footer from "../../partials/Footer/Footer";
import Navbar from "../../partials/Navbar";

import "./MainLayout.scss";

const MainLayout = ({ whiteBg, withoutDots, noBgClr }) => {
  return (
    <div id="main-layout">
      <div className={clsx("layout-content")}>
        <Navbar />

        <div className={clsx("layout-body", whiteBg && "white-bg")}>
          <div className={clsx(!noBgClr && "dark-bg-wrap")}>
            {!withoutDots && (
              <>
                <img
                  className="dots dots-1"
                  src="/assets/vectors/dots-2.svg"
                  alt="dots"
                  title="dots"
                />
                <img
                  className="dots dots-2"
                  src="/assets/vectors/dots-2.svg"
                  alt="dots"
                  title="dots"
                />
                <img
                  className="dots dots-3"
                  src="/assets/vectors/dots-2.svg"
                  alt="dots"
                  title="dots"
                />
              </>
            )}
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
