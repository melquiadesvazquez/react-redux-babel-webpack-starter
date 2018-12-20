# React Redux Starter

## Start the project

```sh
npm init -y
```

## Install react packages

```sh
npm i -D react react-dom react-redux redux redux-logger prop-types
```

## Install webpack packages

```sh
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

## Install html and css packages

```sh
npm i -D html-loader css-loader style-loader
```

## Install babel packages

```sh
npm i -D babel-loader @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react
```

## Create folders and files

```sh
mkdir public; touch public/index.html
mkdir -p src/containers; touch src/components/App.js
mkdir -p src/components; touch src/components/MyComponent.js
mkdir -p src/actions; touch src/actions/index.js;
mkdir -p src/types; touch src/types/index.js;
mkdir -p src/reducers; touch src/reducers/index.js; touch src/reducers/myReducer.js
mkdir -p src/css; touch src/css/style.css;
mkdir -p src/public; touch src/public/index.html;
touch src/index.js src/store.js
touch webpack.config.js
touch .babelrc
```

## Edit webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
    })
  ]
};
```

## Edit .babelrc

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties"
    ]
  ]
}
```

## Edit packge.json

```json
(...)
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },
(...)
```

## Edit public/index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <title>React App</title>
</head>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
</body>

</html>
```

## Edit src/index.js

```js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Edit src/store.js

```js
import { createStore } from 'redux';
import rootReducer from './reducers';


const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

## Edit src/containers/App.js

```js
import React, { Fragment } from 'react';

import '../css/style.css';
import MyComponent from '../components/MyComponent';

const App = () => (
  <Fragment>
    <MyComponent />
  </Fragment>
);

export default App;
```

## Edit src/actions/index.js

```js
import * as types from '../types';

export const myAction = value => ({
  type: types.MYACTION,
  payload: value
});
```

## Edit src/reducers/myReducer.js

```js
import * as types from '../types';

const initialState = {myProperty: 'any'};

const myReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.MYACTION:
      return { ...state, myProperty: (action.payload === 'other')? 'any':'other' };
    default:
      return state;
  }
};

export default myReducer;
```

## Edit src/reducers/index.js

```js
import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  myReducer
});

export default rootReducer;
```

## Edit src/components/MyComponent

```js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { MYACTION } from '../types'

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        This is my property {this.props.myProperty}?
        <input
          type="button"
          value="Change property"
          onClick={() => this.props.dispatch({ type: MYACTION, payload: this.props.myProperty })}
          />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    myProperty: state.myReducer.myProperty
  }
};


export default connect(mapStateToProps)(MyComponent);
```