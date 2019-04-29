![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Intro to React Router

For this lesson, students should:

- Understand components
- Understand state and props

The first part is a demonstration of how Router works. Students can then work on each lab and the challenges.

## Learning Objectives

- Learn about routing with react-router
  <!-- - Using data from APIs and JSON files -->
  <!-- - Create a Stock Trading app -->

## Preparation

First, we'll create a new app to learn how React Router works.

1. Create a new react app: `create-react-app learn-react-router`
2. `cd learn-react-router`
3. `npm install react-router-dom`

## What is React Router?

React Router is a module that makes it easy to make single page apps (SPAs). SPAs are web apps which load different sections of a website within the same page. The user feels as though they've never left the homepage because links swap out content and replace it with new content.

The main components of the router are:

1. `BrowserRouter`: The module that stores all the routes for the app as well as route history, current location and url.
2. `Switch`: Creates a switch case to replace the component area depending on the route.
3. `Route`: Used to define each individual route by relating each path to a specific component.

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

- `Route` is used to connect paths to components.
- `Link` is used to create links to `Route` paths.
- `Switch` will find the _first_ route to match a given path. Once found, it will stop looking, just like a Javascript switch statement.

Now we need some routes. But first, let's create a new component that we can attach to a route:

### About.js

```
import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div>
                All about routing! Read it here folks!
            </div>
        )
    }
}

export default About;
```

Before we jump into connecting the two let's look at the syntax for creating a Link to a route.

```jsx
<Link to='/about'>About</Link>
```

### App.js

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

Done. We've successfully added a link to a route in our app. Try visiting the route in the browser!

Try adding a route back to the homepage. Don't worry about content for now!

## Redirecting

Now let's learn about redirecting in react. To do so we will be using a few new concepts.

### withRouter

App.js

```diff
import React, { Component } from 'react';
+ import { withRouter } from 'react-router-dom';
import './styles/App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import About from './About';

class App extends Component {\
+   state = {
+   loggedIn: false
+ }

+ componentDidMount(){
+
+}

+ redirectHome = () => {
+   this.setState({
+    loggedIn: true
+})
+}
    render() {
        return (
          <header>
               <h1>Learn Routing</h1>
               <nav>
                   <ul>
                       <li><Link to="/about">About</Link></li>
+                       {/* adding a button to change the state to trigger redirection */}
+                       <li><button>Log In</button></li>
                   </ul>
               </nav>

               <div className="main">
                  <Switch>
                      <Route path="/about" component={ About } />
                   </Switch>
               </div>
           </header>
        );
    }
}
+ export default withRouter(App)
```

Now in our redirect function we can add this to force our react app to redirect to the route we choose.

Inside our componentDidMount.

```jsx
if (loggedIn) {
	this.props.history.push(`/about`);
}
```

And just like that we have redirection.
