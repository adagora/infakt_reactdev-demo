import { AccountantType } from "./@types/AccountantResponseType";
import {
  CardFooter,
  CardHeader,
  CardImg,
  CardTitle,
  CardWrapper,
} from "./ViewForm.styled";

/**
 * karta księgowego.
 *
 * @param {AccountantType} - Dane księgowego.
 * @param {onClick} - Funkcja obsługująca przekierowanie do strony księgowego.
 */
export const ViewForm: React.FC<AccountantType & { onClick: () => void }> = ({
  cell,
  gender,
  name,
  email,
  picture,
  login,
  onClick,
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
      {<a href={`mailto:${email}`}>{email}</a>}

      <h3>Telefon</h3>
      {<span>{cell}</span>}

      <h3>Średnia cena netto usługi / m-c</h3>
      <span>350,00 PLN</span>

      <CardFooter>
        <button onClick={onClick}>Dowiedz się więcej</button>
      </CardFooter>
    </CardWrapper>
  );
};
