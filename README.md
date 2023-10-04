# Example solution to the following task:

Goal: to create a view with accounting cards with the ability to top up additional cards after pressing a button.

### Technologies used

1. react
2. typescript
3. axios
4. react query
5. styled components

### How to run

```shell
npm install
npm start
```

## Test task for the React Developer position

Goal: to create a view with accounting cards with the ability to top up additional cards after pressing a button.

To complete the task, you can use the given repository as a template, or you can use template create-react-app:

```
npx create-react-app my-app --template typescript
```

Mockup: https://www.sketch.com/s/b0736a6b-3a81-4863-95b6-4ec6775a20e3/a/dg1Gl5l
(In the sketch side menu in the upper right corner, in the "Inspect" tab, you can preview the properties of the accountant card elements)

![Alt ​​text](image.png)

Task description:

Using data from the provided public API, create a view that displays a list of accountants.
The accountant's card should be created according to the design from the link attached above.
At the bottom, under the list of accounting cards, there should be a button allowing you to load additional cards with information about accountants

Performance criteria:

1. Task completed in React using TypeScript
2. No errors in the browser console
3. The repository with the task should be located on github and have public access for viewing
4. The project should be made available online on one of the platforms according to: your own discretion (e.g. github pages, netlify, vercel, etc.)
5. The use of css in js (e.g. styled components) is welcome.

- Additional task: placing a view of accounting cards under the link /to the accountant using React Router (i.e. adding routing)

After completing the task, share a link to the repository and a link to preview the completed task.

#### API

API link: https://randomuser.me/api/ (documentation - https://randomuser.me/documentation)
Parameters used:

- seed
- gender
-page
- results

Sample link: https://randomuser.me/api/?seed=abc&gender=female&page=1&results=5

API data displayed in the accountant's card:

```
type AccountantType = {
  cell: string; // numer telefonu
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
type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

```
