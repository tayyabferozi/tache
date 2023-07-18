import { Link } from "react-router-dom";

import Button from "../../components/Button";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div id="signup-newsletter">
      <div className="main">
        <img
          className="newsletter-dots dots-1"
          src="/assets/vectors/icons/newsletter-dots-1.svg"
          alt="dots"
        />
        <img
          className="newsletter-dots dots-2"
          src="/assets/vectors/icons/newsletter-dots-2.svg"
          alt="dots"
        />
        <div className="text-center">
          <div className="fs-24 fw-500 text-white">Sign Up for Newsletter</div>
          <p className="fs-14 fw-400 text-white mt-2">
            Be the first to know about releases and Industry news and insights.
          </p>
        </div>

        <div className="input-container">
          <input type="email" placeholder="Enter your email" />
          <Button primaryLight inline>
            Subscribe
          </Button>
        </div>

        <p className="fs-14 text-white">
          We care about your data in our <Link to="#0">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
