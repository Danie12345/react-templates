# Create React App Templates

Repo to multiple react app templates. Feel free to add your own.

> Like the repo? Leave a 🎇, it helps ;)
---
## Want your own template?
- Create a new branch with the name `cra-USER-TEMPLATE_USE-VERSION` (eg. `cra-danie12345-react_basic-1`)
- Modify what you need. Here is a [sample](https://github.com/ihaback/create-react-app-template) of what you can do
- To test that your template works:
  - First run: `npx create-react-app my-app --template file:.`
  - Second run `cd my-app`
  - Then run `npm i` (install the right dependencies, cannot skip this step)
  - Finally run `npm start`
- To publish your template:
  - Change the `"name"` property in `package.json` (Not the one in `my-app/package.json`)
  - Use a similar naming system to the branch you're in
  - Run: `npm publish`

  *Create your own branch with your username (eg. `danie12345`), and in it as many branches as you need, but **DO NOT** create PR's. You can fork instead.*

- To create your react app run `npx create-react-app my-app --template your-template-name` in the directory you want your project to be in.

---
> The following are dependencies in main, which you can delete in your own branch if needed. These can be found in ` template.json`.
## Dependencies in Main
- `@testing-library/jest-dom@5.16.4`
- `@testing-library/react@13.2.0`
- `@testing-library/user-event@13.5.0`
- `prop-types@15.8.1`
- `react@18.1.0`
- `react-dom@18.1.0`
- `react-scripts@5.0.1`
- `web-vitals@2.1.4`

## DevDependencies in Main
- `@babel/core@7.18.0`
- `@babel/eslint-parser@7.17.0`
- `@babel/plugin-syntax-jsx@7.17.12`
- `@babel/preset-env@7.18.0`
- `@babel/preset-react@7.17.12`
- `eslint@7.32.0`
- `eslint-config-airbnb@18.2.1`
- `eslint-plugin-import@2.26.0`
- `eslint-plugin-jsx-a11y@6.5.1`
- `eslint-plugin-react@7.30.0`
- `eslint-plugin-react-hooks@4.5.0`
- `gh-pages@4.0.0`
- `stylelint@13.13.1`
- `stylelint-config-standard@21.0.0`
- `stylelint-csstree-validator@1.9.0`
- `stylelint-scss@3.21.0`

### The original repo can be found [here](https://github.com/ihaback/create-react-app-template).

> Note: this repo is NOT for substituting [ihaback](https://github.com/ihaback)'s repository, but rather to go wild with as many different templates as one can want for different projects.