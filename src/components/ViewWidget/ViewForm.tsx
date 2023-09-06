import { AccountantType } from "./@types/AccountantResponseType";
import {
  CardFooter,
  CardHeader,
  CardImg,
  CardTitle,
  CardWrapper,
} from "./ViewForm.styled";

export const ViewForm: React.FC<AccountantType> = ({
  cell,
  gender,
  name,
  email,
  picture,
  login,
}): JSX.Element => {
  return (
    <CardWrapper id={String(login.uuid)}>
      <CardHeader>
        {picture && <CardImg src={picture.medium} alt="person" />}
        <CardTitle>
          <h2>{gender === "female" ? "Twoja księgowa" : "Twój księgowy"}</h2>
          <h1>{`${name.first} ${name.last}`}</h1>
        </CardTitle>
      </CardHeader>

      <h3>Email</h3>
      {email ? (
        <a href={`mailto:${email}`}>{email}</a>
      ) : (
        <span>Not provided.</span>
      )}

      <h3>Telefon</h3>
      {cell ? <span>{cell}</span> : <span>Not provided.</span>}

      <h3>Średnia cena netto usługi / m-c</h3>
      <span>350,00 PLN</span>

      <CardFooter>
        <button>Dowiedz się więcej</button>
      </CardFooter>
    </CardWrapper>
  );
};
