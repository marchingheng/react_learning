# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

# REACT learning

## redux
Centralize the communcation between components: instead of using props(value or callback to set value) for communication, each component will set and get the through redux store

## react-redux
A wrapper around react components, which will communicate with redux directly.
We refer this wrapper as `Container Component`, and refer to the React component as `UI Component`.
The value and the callback(to set the value) flow this way: `Redux Store` => `Container Component` => `UI Component`

## react-redux-share-data



## The advantage of using react
virtual DOM which is more light weight compared to real DOM, and you don’t need to render everything everytime; using JSX to simplify the writing
## JSX
a syntax which can be read by React engine, which looks like the combination of javascript and XML
# Babel 
translator to translate JSX to native javascript and html, which browser would understand
# Modularization vs componentization
a module is just a .js file; a component will include css,js,html,image…
A component can be either written as a function or a class
# State, props, refs, context
State: internal state of a component. Everytime when the state of the component is updated, the virtual DOM will be rendered again.
Props: data from external source
Refs: it is the replacement of element `id` in native javascript, which help us access the elements of the component; document of React does not suggest to use it too often because it would slow down the page. 
Refs is better than id because: 
You will need to call React.createRef()each time which ensures refs is unique
The refs will only be accessible  in the context where it is defined, which force developers to use state/props outside of the context

Class component have access to state, props and refs; Function component only have access to props unless using hooks
When a component need to be rendered again, it will compare the old virtual DOM and new virtual DOM node by node, according to their key. If the node is of the same content, then the algorithm won’t render the node again. Otherwise, the node will be rendered again. 
When you are rendering a list of nodes, the best practice is to use some unique identifier like `id` as the key. If you don’t specify the key explicitly, the default key will be the index of each element in the list, which could be inefficient and error-prone if you add item to the middle or beginning of the list: 
multiple nodes will have to render again, 
and if each node in the list have <input> tag like <li>something<input/></li>, the input tag will be misplaced, because the input value is in real DOM rather than in virtual DOM, thus won’t be used in making comparison.
React framework 3 core files: index.js is the entrance which do 2 things
importing dependencies
mount App.js to node <root> written in index.html
	App.js is the source component of everything
 Lifecycle hooks/function: 
Used in class component: componentDidMount, componentWillUnmount, componentDidUpdate
Used in function component, equal to the 3 above combined: useEffect
SDLC of React Development:
Conceptualize the frontend with components
Develop static UI with components
Connect to the database
Make it interactive
class vs className vs style
All of these are for styling, while “style” is for defining the style inline, class(native javascript) and className(React) are referring to a css file
Father component pass data to son component by Props; son component pass data/change to father through callback function
Callback function: define by yourself and will be executed elsewhere
The function updating the state should be in the same file where the state is
Proxy can use to avoid “cross origin request blocking”. Axios is the package we use along with React to make ajax request. 
ajax(asynchronous javascript XML) request
Http requests sent from frontend javascript code without refreshing the page(when you are refreshing the page, you are loading the javascript bundle, which will then make ajax request). These requests are sent to backend asynchronously, which will then push into a queue and consume by server in order.
The js instance created in frontend which send request and receive response is XMLHttpRequest or xhr
XHR vs fetch: xhr and fetch are both native in javascript used to send ajax request. Xhr return directly while fetch return a promise object and have a better separation of concern(check whether reach server first then check whether the request is processed). Axios and jQuery are both wrapper around XHR
Fetch example:
fetch(some_url).
	# check whether reach the server first
then(response => {console.log(“reach server successfully.”), return response.json()},
        error => {console.log(“failed to reach server”)}).
# check whether the request is processed by server later
then(...)
Body of a component is passed as a props “children”, so the son component can directly inherit the body by <SonComponent {...this.props}/>
Router:
	2 key components:
<Link>(publisher): change the route in the address bar when this component is clicked
<Routes>(subscriber): parse the new route, and select components to render according to the parsed route
	History: 
the history of visited routes will be push into a stack automatically, for you to go back and forth in the history(BOM)
Redux(Relay Store is similar to Redux)
Centralize the control of state, which facilitates the communication between components of all level.
Core concept: action creator, store, reducer
	Restaurant metaphor: component is customer, action creator is server, store is boss, reducer is cook


1-10-2022
JS Learning:
ECMAScript: standard for javascript followed by all developers and browsers
DOM: document object model, manipulate nodes in web page in ood way with Javascript. There are 4 types of nodes in the model: html, tag, attribute, text
DOM event: mouseclick, mousemove...
BOM: interact with browser by javascript: browser will store the history of visited routes in a stack, so you can go back and forth in the history of routes. And every route will match a specific rendering of components
front end code will be obfuscated then downloaded to the browser, so the front end logic won't be exposed to the user. But still before and after obfuscation, they are JavaScript code.
Backend code vs frontend code: not downloaded to browser vs downloaded to browser; run in server vs run by browser; complex business logic vs simple business logic/logic related to UI.
Conclusion on “update invoice line item” tickets
Create update invoice mutation type
Register the mutation type in the mutation_type.rb as a field
Apollo/Relay: Javascript framework for fetching and managing gql data in React app. The major benefit of using them is to avoid boilerplate code in caching and networking.
Webpack: javascript bundler, turn dynamic javascript/html/css code into static codes
Yarn: front end package manager, handling the caching/installation/download of packages
