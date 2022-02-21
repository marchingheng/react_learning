# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`



## redux
Centralize the communcation between components: instead of using props(value or callback to set value) for communication, each component will set and get the through redux store

## react-redux
A wrapper around react components, which will communicate with redux directly.
We refer this wrapper as `Container Component`, and refer to the React component as `UI Component`.
The value and the callback(to set the value) flow this way: `Redux Store` => `Container Component` => `UI Component`

