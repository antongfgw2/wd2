import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
};

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      let newData = [...state.companies, action.payload];
      state.companies = newData;
    },
    addUserToCompany: (state, action) => {
      const newData = state.companies.map((company) => {
        if (company.id === action.payload.companyId) {
          return {
            ...company,
            users: [...company.users, action.payload.userId],
          };
        }
      });
      state.companies = [...newData];
    },
  },
  deleteCompany: (state, action) => {
    const newCompanies = state.companies.filter((company) => {
      return company.id !== action.payload;
    });
    state.companies = [...newCompanies];
  },
});

export const { addCompany, addUserToCompany, deleteCompany } =
  companySlice.actions;

export default companySlice.reducer;
