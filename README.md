![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Intro to React Router

For this lesson, students should:

- Understand components
- Understand state and props

The first part is a demonstration of how Router works. Students can then work on each lab and the challenges.

## What is React Router?

React Router is tool that will allow us to update the URL of our React applications without having to fully refresh the page. This makes for a much smoother user experience in the browser.

## Preparation

First, we'll create a new app to learn how React Router works.

1. Create a new react app: `npx create-react-app react-router`
2. `cd react-router`
3. `npm install react-router-dom`

## What is a Single Page App (SPA)?

SPAs are web apps which load different sections of a website without technically reloading the page. The user feels as if they are navigating to different pages on the website but infact the React application is just hiding and showing different "Page" components.

However, in a standard web application, when a user navigates to different pages the URL will update to match the page they are currently visiting. However, with React, hiding and showing different page components will not update the URL.

This is where React Router comes in.

## Where Does React Router Come In?

React Router is a module that makes it easy to make single page apps (SPAs) with React and will allow us to update the URL when a user visits a particular "Page" in the app. 

## Code Along

We'll build a bare bones application that will allow us to focus on using React Router. For this app we'll create a few different "Pages". We'll also create a Header at the top of the app that will allow us to switch betweeen pages by clicking on the navigation links.

---
## Wrap the App in Router

In `index.js`, we'll import the `BrowserRouter` module from `react-router-dom` and rename it to `Router`. As a feature of ES6 imports we can rename our imports to whatever we would like.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
```

Here, we are wrapping our entire React application in our `Router`. This will allow us to use React Router throughout the entirety of our app.

---
## Create Files

We'll go ahead and create a few "Page" Components.

Start by creating a `pages` directory.
```bash
mkdir src/pages
```

Then we'create the files for the three pages, `HomePage.jsx`, `AboutPage.jsx`, and `ContactPage.jsx`.

```bash
touch src/pages/HomePage.jsx
touch src/pages/AboutPage.jsx
touch src/pages/ContactPage.jsx
```

Create a `components` directory and create a `Header.jsx` inside `components`.

```bash
mkdir src/components
touch src/components/Header.jsx
```
---
## Create the Components

Our pages will start off very basic to allow us to focus on React Router.

In `HomePage.jsx` add a basic function component.
```js
function HomePage() {
  return (
    <main>Home Page Component</main>
  )
}

export default HomePage;
```

Create components for the `AboutPage` page and the `ContactPage` page. They can be basic just like the `HomePage` component, but with different content in the return statement.

---

In `Header.jsx` set up the navigation. The navigation won't include links/anchor tags for now. We'll be adding those in with React Router.
```js
function Header() {
  return (
    <nav>
      <h1>React Router</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
```

---

## Add Components to the App

In App.js add all of the components and pages we just created.

```js
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
```

In the browser, you'll notice we're showing all three Page components at once. The goal is to only show one at a time. When the user visits `/` we want to see the `Homepage` component showing. If the user visits `/about` we want to see the `AboutPage` component. If the user visits `/contact` we want to see the `ContactPage` component. We'll add this functionality now!

## Add Links

In `Header.jsx` import the `Link` component from `react-router-dom`. We're using object destructuring to pull out just the `Link` variable from the `react-router-dom` package.
```js
import { Link } from 'react-router-dom';
...
```

In the `Header` component wrap each navigation component in a `<Link>` component. Set the `to` prop of each `<Link>` component to its corresponding route.
```js
...
function Header() {
  return (
    <nav>
      <h1>React Router</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
```

Test it out. Try clicking on the navigation links. We should see the path in the URL update. 

Open up the elements panel in your browser and you'll notice we've actually created anchor tags. Each one with the `href` property set to either `/`, `/about`, or `/contact`.
---

## Swap the Page Components

Pretty cool. However, these links don't yet switch out our components. If we click on "About" and navigate to `/about` we only want to see the `AboutPage` component displaying.

In `App.jsx` we'll now create our routes.

Import the `Switch` and the `Route` component from `react-router-dom`.
```js
import { Switch, Route } from 'react-router-dom';
...
```

Just like a JavaScript switch statement, we'll be able to switch out our components based on the URL.

In the `App` component wrap all of the page components in a the `Switch` component we just imported.

```js
...
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <HomePage />
        <AboutPage />
        <ContactPage />
      </Switch>
    </div>
  );
}

export default App;
```

Wrap each of the Page components in a `Route` component and set the `path` prop accordingly.

The `path` designates what path we will show that particular component for.

When we navigate to the `/` path we want to render the `HomePage` component. When we navigate to the `/about` path we want to render the `AboutPage` component. When we navigate to the `/contact` path we want to render the `ContactPage` component.

```js
function App() {
  return (
    <div>
      <Header />
      <Switch>

        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
```

Try it out. By clicking on "About" in the navigation, the URL should update to `/about` and we should see the `AboutPage` component rendering.

Pull up the `App.js` file and the `Header.jsx` file side by side to visually see this connection. Each link is paired with a path, and each path is paired with a component we want to render for that path.

---

## Additional Resources

[React Router Docs](https://reactrouter.com/web/guides/quick-start)