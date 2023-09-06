import { useNavigate } from "react-router-dom";
import { ContentPage } from "../components/Layout/PageWrapper.styled";

const Ksiegowi: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClickRedirect = () => {
    navigate("/");
  };

  return (
    <ContentPage>
      <h1>Ksiegowi page</h1>
      <br />
      <button onClick={handleClickRedirect}>Redirect to main page</button>
    </ContentPage>
  );
};

export default Ksiegowi;
