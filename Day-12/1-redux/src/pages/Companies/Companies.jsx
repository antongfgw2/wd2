import React from "react";
import "./Companies.css";
import { useSelector } from "react-redux";
import Company from "../../components/Company/Company";

const Companies = () => {
  const companies = useSelector((state) => state.companiesInfo.companies);

  return (
    <div className="companies">
      <div className="companies__title">Companies</div>
      <div className="companies__container">
        {companies.map((company) => {
          return (
            <Company
              key={company.id}
              id={company.id}
              name={company.name}
              users={company.users}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
