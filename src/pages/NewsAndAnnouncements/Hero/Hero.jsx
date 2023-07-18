import Badge from "../../../components/Badge";
import SearchWrap from "../../../components/SearchWrap/SearchWrap";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero text-center">
      <div className="d-flex justify-content-center">
        <Badge green>Tache Media</Badge>
      </div>
      <h2 className="mt-2">News and Announcements</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vitae volutpat pulvinar tellus
        id dis vel. Sem.
      </p>

      <div className="mt-50">
        <SearchWrap lg />
      </div>
    </div>
  );
};

export default Hero;
