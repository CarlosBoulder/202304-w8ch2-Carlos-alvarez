import { useState } from "react";
import { PersonalData } from "../../types";

const PersonalDataForm = (): React.ReactElement => {
  const initialPersonalData: PersonalData = {
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
  };

  const [personalData, setPersonalData] =
    useState<PersonalData>(initialPersonalData);

  const onChangePersonalData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({
      ...personalData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="form-container">
      <form>
        <h2>Personal Data</h2>
        <div className="mb-3">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="firstname"
            onChange={onChangePersonalData}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="birthdate">Birth date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Birth date"
            id="birthdate"
            onChange={onChangePersonalData}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={onChangePersonalData}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Next step
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">Go to login</a>
        </p>
      </form>
    </div>
  );
};

export default PersonalDataForm;
