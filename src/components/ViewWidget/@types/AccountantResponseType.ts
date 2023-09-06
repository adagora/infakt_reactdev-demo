export type AccountantType = {
  cell: string; // numer telefonu
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

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
    results: number;
    seed: string;
  };
};
