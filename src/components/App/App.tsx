import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AccessDataForm from "../AccessDataForm/AccessDataForm";
import PersonalDataForm from "../PersonalDataForm/PersonalDataForm";

const App = (): React.ReactElement => {
  return (
    <>
      <h1>Form</h1>
      <PersonalDataForm />
      <AccessDataForm />
    </>
  );
};

export default App;
