#### How to start

```bash
# install dependencies
yarn

# start dev server
yarn start:client

# run storybook to view and develop components
yarn storybook
```

#### Project structure

The project is divided into packages: `client` and `libs`. They are in the `/packages` folder.

- `libs` are common components that can be reused. Doesn't depend on the client.
- `client` is a frontend project that has its own logic and reuses components from libs.

#### Folder structure
- `components` - react components that *do not contain their own logic*, but accept it through props. Developed in the *storybook*.
- `containers` - react components that have their own business logic, for example, hooks. Includes components.
- `pages` - separate containers for pages. Includes containers.
- `store` - a global storage of data and business logic of the project
- `utils` - general project functions
- `hooks` - react hooks that can be reused
- `hooks/formik` - hooks for forms using formik.

#### Configuring project

See `/packages/client/.env` file for configuration:

```dotenv
# Backend api URL
REACT_APP_API_URL=https://your.api.url/
```

### Adding font icons

```bash
# Will open browser with icon font configuration tool
yarn fontello:open
```

- Add your icon by dragging SVG file into page. Toggle your icon in list (it should be highlighted with circle)
- Press `save` and `just export config`. 
- Paste `config.json` contents into `packages/libs/assets/fonts/fontello/config.json`
- Run `yarn fontello`
- Open `packages/libs/assets/fonts/fontello/demo.html` to see all available icons
- Add icon to FontIcon component