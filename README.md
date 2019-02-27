![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Intro to React Router

For this lesson, students should:

- Understand components
- Understand state and props

The first part is a demonstration of how Router works. Students can then work on each lab and the challenges.

## Learning Objectives
- Learn about routing with react
- Using data from APIs and JSON files
- Create a Stock Trading app

## Preparation

First, we'll create a new app to learn how React Router works.

1. Create a new react app: `create-react-app learn-react-router`
2. `cd learn-react-router`
3. `npm install react-router-dom`

Once we're done learning the basics, students can clone this repository and use the starter files to get started with the labs.

## What is React Router?

React Router is a module that makes it easy to make single page apps (SPAs). SPAs are web apps which load different sections of a website within the same page. The user feels as though they've never left the homepage because links swap out content and replace it with new content.

The main components of the router are:

1. `BrowserRouter`: The module that stores all the routes for the app as well as route history, current location and url.
2. `Route`: Used to define each individual route by relating each path to a specific component.

Since `BrowserRouter` is the parent component, we'll configure it in `index.js`. It would look like this:

```
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom"

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
```

Update `index.js` to include this code.

Next, let's add some routes. Open `App.js` and let's add let's import the routing components we'll need first.

```
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
```

- `Route` is used to connect paths to components
- `Link` is used to create links to `Route` paths.
- `Switch` will find the *first* route to match a given path. Once found, it will stop looking, just like a Javascript switch statement

Now we need some routes. But first, let's create a new component that we can attach to a route:

<details>
<summary>About.js</summary>

```
import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div>
                All about stocks. Read it here, folks!
            </div>
        )
    }
}

export default About;
```

<summary>App.js</summary>

```diff
import React, { Component } from 'react';
import './styles/App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

+ import About from './About';

class App extends Component {
    render() {
        return (
+           <header>
+               <h1>Learn Routing</h1>
+               <nav>
+                   {/* Create our nav bar links using the Link element from react router */}
+                   <ul>
+                       <li><Link to="/about">About</Link></li>
+                   </ul>
+               </nav>

                {/* Create the routes. This will not appear on the page. */}
+               <div className="main">
+                   <Switch>
+                       <Route path="/about" component={ About } />
+                   </Switch>
+               </div>
+           </header>
        );
    }
}

export default App;

```

</details>

Done. We've successfully added a link to a route in our app. Try visiting the route in the browser!

Try adding a route back to the homepage. Don't worry about content for now!


<!-- ## Lab: Stock Trader App -->

<!-- For today's lab you will be building a stock tracking app. The lab will be broken down into two parts... -->

<!-- 1. Build a React app that uses react-router -->
<!-- 2. Communicate with 3rd-party APIs -->

<!-- Clone this [repo](https://git.generalassemb.ly/SF-WDI/react-router-lab) to get the starter code. -->
