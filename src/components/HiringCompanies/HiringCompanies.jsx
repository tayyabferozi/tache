import clsx from "clsx";
import React from "react";

import useModal from "../../hooks/useModal";
import Button from "../Button";
import EditCompanies from "../../modals/EditCompanies";

const HiringCompanies = ({ user, editState, hiredBy, setUser }) => {
  const {
    show: showEditCompaniesModal,
    toggleShow: toggleShowEditCompaniesModal,
  } = useModal(false);

  if (user?.allCompanies?.length === 0) return null;

  return (
    <>
      {setUser && (
        <EditCompanies
          show={showEditCompaniesModal}
          closeModal={() => toggleShowEditCompaniesModal("close")}
          allItems={user.allCompanies}
          pinnedItems={user.hiredBy}
          setUser={setUser}
        />
      )}

      <div className="hired-by mt-20">
        <div className="text-focus">Hired by</div>

        <div className="companies mt-20">
          {hiredBy.map((el, idx) => {
            return (
              <div key={"hiring-company" + idx} className="company-item">
                <div className="logo">
                  <img src={el.img} alt={el.name} />
                </div>
                <div className="text">
                  <div className="name text-focus fw-500">{el.name}</div>
                  <div className="fs-12 mt-1">{el.title}</div>
                </div>
              </div>
            );
          })}

          <Button
            onClick={() => {
              if (editState || hiredBy.length === 0)
                toggleShowEditCompaniesModal();
            }}
            icon={{
              src:
                editState || hiredBy.length === 0
                  ? "/assets/vectors/icons/plus.svg"
                  : "",
            }}
            className={clsx(
              "mb-10 gap-10",
              !editState && hiredBy.length > 0 && "view-more d-none",
              !editState && hiredBy.length < 5 && "d-none"
            )}
            primaryLight
          >
            {editState || hiredBy.length === 0 ? "Edit Companies" : "View more"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default HiringCompanies;
