import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import Badge from "../../../components/Badge";

const Header = () => {
  return (
    <ProjectLayoutSection bgGrey>
      <h2 className="fs-36 pt-10 d-flex align-items-center justify-content-start">
        Design{" "}
        <Badge className="ms-3" green outlined>
          Onboarding
        </Badge>
      </h2>

      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur. Vitae volutpat pulvinar tellus
        id dis vel. Sem.
      </p>
    </ProjectLayoutSection>
  );
};

export default Header;
