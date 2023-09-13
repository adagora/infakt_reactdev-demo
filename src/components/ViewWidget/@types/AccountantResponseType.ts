export type AccountantType = {
  /**
   * Numer telefonu księgowego.
   */
  cell: string;
  /**
   * Płeć księgowego.
   */
  gender: string;
  /**
   * Obiekt zawierający imię i nazwisko księgowego.
   */
  name: {
    first: string;
    last: string;
  };
  /**
   * Adres e-mail księgowego.
   */
  email: string;
  /**
   * Obiekt zawierający miniaturkę i medium obrazu księgowego.
   */
  picture: { thumbnail: string; medium: string };
  /**
   * Obiekt zawierający unikalny identyfikator księgowego.
   */
  login: {
    uuid: string;
  };
};

export type AccountantResponseType = {
  /**
   * Tablica zawierająca księgowych.
   */
  results: AccountantType[];
  /**
   * Obiekt zawierający informacje o stronie.
   * @param page Numer strony.
   * @param results Ilość księgowych na stronie.
   * @param seed Unikalny identyfikator księgowego.
   *
   */
  info: {
    page: number;
    results: number;
    seed: string;
  };
};
