# Phone Finder

React application used to verify phone numbers all over the world using Numverify's API.

## Instructions

1. Make sure you have Node LTS installed, GIT and yarn.
2. Go to https://numverify.com/product and get an API key - This is free!
3. Clone this project.
4. Copy the file `.env.template` and rename it as `.env`
5. Run `yarn install`
6. Run `yarn start`
7. Start hacking!

## What packages are we using?

- React v16.6.3
- [cross-env ](https://github.com/kentcdodds/cross-env) so we can use absolute imports
- [husky](https://github.com/typicode/husky) for pre commit hooks
- [lint-staged](https://github.com/okonet/lint-staged) to run prettier before each commit
- [node-sass](https://github.com/sass/node-sass) to use `.scss` instead of `.css`
- [prettier](https://github.com/prettier/prettier) to format our code

## File Structure

React doesn't promote any particular file structure like Angular or RoR. But that doesn't mean that we're lost!

As a personal preference, I like to keep everything _code/feature_ related inside the `src` folder, that give you organization. The more organized your project is, the more productive you'll be!

For a small React application, it is fine to have a simple file structure as the one described below.

### Components

```
src
├── components
│   └── ComponentA
│     ├── ComponentA.js
│     └── index.js
│     └── ComponentA.scss
│   └── ComponentB
│     ├── ComponentB.js
│     └── index.js
│     └── ComponentB.scss
```

We have a base folder called `components`, there, we will store all of our components.
Each component, at least, should have its own `index.js` file plus the file of the component itself. That said, if I have a component called `ComponentA`, I should have a folder called `ComponentA` as well and an index file.

Also, if you're using `.scss / .css / .styl / .less`, it is a good practice to have one file per component.

```js
// src/components/ComponentA/ComponentA.js
import React from 'react';
import './ComponentA.scss'; // This will load the .scss file into the project.

function ComponentA() {
  return <h1 className="App">I am the component A</h1>;
}

export default ComponentA;

// src/components/ComponentA/index.js
// This will export the default export that lives in src/components/ComponentA/ComponentA.js
// so we can import it as: import ComponentA from 'components/ComponentA'; everywhere in the application
export { default } from 'components/ComponentA/ComponentA';
```

```scss
// src/components/ComponentA/ComponentA.scss
.App {
  color: red;
}
```

### Styles

```
src
├── components
│   └── ComponentA
│       ├── ComponentA.js
│       └── index.js
│       └── ComponentA.scss <--- component level styles
├── index.js
├── logo.svg
├── serviceWorker.js
└── styles
    ├── _variables.scss <--- global styles variables
    └── index.scss <--- main application styles
```

You can have _two types_ of styles in your application, the styles for the application as a whole and the styles for each component.

Everything that is not component related, should go into `src/styles/` - because it affects the whole app ;)
