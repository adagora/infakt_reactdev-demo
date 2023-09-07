/**
 * @typedef {Object} AccountantType
 * @param {string} cell - Numer telefonu księgowego.
 * @param {string} gender - Płeć księgowego.
 * @param {Object} name - Obiekt zawierający imię i nazwisko księgowego.
 * @param {string} name.first - Imię księgowego.
 * @param {string} name.last - Nazwisko księgowego.
 * @param {string} email - Adres e-mail księgowego.
 * @param {Object} picture - Obiekt zawierający miniaturkę i medium obrazu księgowego.
 * @param {string} picture.thumbnail - Ścieżka do miniaturki obrazu księgowego.
 * @param {string} picture.medium - Ścieżka do obrazu medium księgowego.
 * @param {Object} login - Obiekt zawierający unikalny identyfikator księgowego.
 * @param {string} login.uuid - Unikalny identyfikator księgowego.
 */

export type AccountantType = {
  cell: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

/**
 * @typedef {Object} AccountantResponseType
 * @param {AccountantType[]} results - Array of AccountantType objects.
 * @param {Object} info - Information about the response.
 * @param {number} info.page - The current page number.
 * @param {number} info.results - The number of results per page.
 * @param {string} info.seed - The seed used to generate the response.
 */

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
    results: number;
    seed: string;
  };
};
