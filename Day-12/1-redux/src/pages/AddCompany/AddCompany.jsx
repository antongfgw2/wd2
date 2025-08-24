import React from "react";
import { useState } from "react";
import "./AddCompany.css";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCompany } from "../../slices/company";

const AddCompany = () => {
  const [companyInfo, setCompanyInfo] = useState({
    id: "",
    name: "",
    users: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setCompanyInfo((currInfo) => {
      return {
        ...currInfo,
        id: uuid(),
      };
    });
  }, []);

  const addData = () => {
    dispatch(addCompany(companyInfo));
    setCompanyInfo({
      id: uuid(),
      name: "",
      users: [],
    });
  };

  return (
    <div className="addCompany">
      <div className="addCompany__formContainer">
        <h1>Add Company</h1>
        <input type="text" value={companyInfo.id} disabled />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter company name"
          value={companyInfo.name}
          onChange={(e) => {
            setCompanyInfo((currInfo) => {
              return {
                ...currInfo,
                name: e.target.value,
              };
            });
          }}
        />
        <br />
        <button onClick={addData}>Add Company</button>
      </div>
    </div>
  );
};

export default AddCompany;
