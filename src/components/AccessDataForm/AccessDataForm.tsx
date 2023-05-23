import { useState } from "react";
import { AccessData } from "../../types";

const AccessDataForm = (): React.ReactElement => {
  const initialAccessData: AccessData = {
    username: "",
    password: "",
    repeatPassword: "",
  };

  const [AccessData, setAccessData] = useState<AccessData>(initialAccessData);

  const onChangeAccessData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccessData({
      ...AccessData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="form-container">
      <form>
        <h2>Access Data</h2>
        <div className="mb-3">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            id="username"
            onChange={onChangeAccessData}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={onChangeAccessData}
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rep-password">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat password"
            onChange={onChangeAccessData}
            id="rep-password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Previous step
          </button>
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

export default AccessDataForm;
