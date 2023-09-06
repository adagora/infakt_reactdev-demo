import { ContentPage } from "../components/Layout/PageWrapper.styled";
import { ViewForm } from "../components/ViewWidget/ViewForm";

const Home: React.FC = (): JSX.Element => {
  const data = {
    results: [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Didaco",
          last: "Caldeira",
        },
        location: {
          street: {
            number: 1645,
            name: "Rua Treze ",
          },
          city: "Niterói",
          state: "Paraná",
          country: "Brazil",
          postcode: 88728,
          coordinates: {
            latitude: "-75.1496",
            longitude: "-158.3527",
          },
          timezone: {
            offset: "-3:30",
            description: "Newfoundland",
          },
        },
        email: "didaco.caldeira@example.com",
        login: {
          uuid: "4152d98d-58ef-4871-94fc-fd6b993d8baa",
          username: "yellowpeacock971",
          password: "damian",
          salt: "vH78FCh2",
          md5: "2221b3f20c73c150814986c9041e3fa4",
          sha1: "6e4d114ebc1d02617d04dc1f14e6104384e8747f",
          sha256:
            "f66cf543203bc150b0a70a9786f8bae5a99965f54857db89cae1f73dd2b9c113",
        },
        dob: {
          date: "1992-03-02T16:16:13.308Z",
          age: 31,
        },
        registered: {
          date: "2010-05-03T17:34:17.410Z",
          age: 13,
        },
        phone: "(66) 2856-6656",
        cell: "(74) 1395-5898",
        id: {
          name: "CPF",
          value: "142.118.012-73",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/73.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
        },
        nat: "BR",
      },

      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Didaco",
          last: "Caldeira",
        },
        location: {
          street: {
            number: 1645,
            name: "Rua Treze ",
          },
          city: "Niterói",
          state: "Paraná",
          country: "Brazil",
          postcode: 88728,
          coordinates: {
            latitude: "-75.1496",
            longitude: "-158.3527",
          },
          timezone: {
            offset: "-3:30",
            description: "Newfoundland",
          },
        },
        email: "didaco.caldeira@example.com",
        login: {
          uuid: "4152d98d-58ef-4871-94fc-fd6b993d8baa",
          username: "yellowpeacock971",
          password: "damian",
          salt: "vH78FCh2",
          md5: "2221b3f20c73c150814986c9041e3fa4",
          sha1: "6e4d114ebc1d02617d04dc1f14e6104384e8747f",
          sha256:
            "f66cf543203bc150b0a70a9786f8bae5a99965f54857db89cae1f73dd2b9c113",
        },
        dob: {
          date: "1992-03-02T16:16:13.308Z",
          age: 31,
        },
        registered: {
          date: "2010-05-03T17:34:17.410Z",
          age: 13,
        },
        phone: "(66) 2856-6656",
        cell: "(74) 1395-5898",
        id: {
          name: "CPF",
          value: "142.118.012-73",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/73.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
        },
        nat: "BR",
      },
    ],
    info: {
      seed: "f3e413b2dc17f90b",
      results: 1,
      page: 1,
      version: "1.4",
    },
  };

  return (
    <ContentPage>
      <>
        {data && data.results.map((item) => <ViewForm {...item} />)}

        {data && data.results.length === 0 && <h1>No results found</h1>}
      </>
    </ContentPage>
  );
};

export default Home;
