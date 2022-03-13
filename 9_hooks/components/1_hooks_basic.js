import React from 'react';
import reactDom from 'react-dom';

// export default class HookDemo extends React.Component {
//     state = {value: 0}

//     myRef = React.createRef()

//     addOne = ()=>{
//         const {value} = this.state
//         this.setState({value: value + 1})
//     }

//     unmount = ()=>{
//         reactDom.unmountComponentAtNode(document.getElementById("root"))
//     }

//     show = ()=>{
//         console.log(this.myRef)
//         alert(this.myRef.current.value)
//     }

//     componentDidMount(){
//         this.timer = setInterval(()=>{this.setState(state => ({value: state.value+1}))}, 1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//     render() {
//         return (
//         <div>
//             <input type="text" ref={this.myRef}/>
//             <h1>Current value is {this.state.value}</h1>
//             <button onClick={this.addOne}>click me to add one</button>
//             <button onClick={this.unmount}>unmount the timer</button>
//             <button onClick={this.show}>show data from input bar</button>
//         </div>
//         );
//     }
// }

export default function HookDemo() {
    const [value, setValue] = React.useState(0)

    // the return of the function here correspond to componentWillUnmount; 
    // the rest correspond to componentDidUpdate and componentDidMount(if you don't specify which variable to subscribe to like we do here, it will just be componentDidMount)
    React.useEffect(() => {
        let timer = setInterval(()=>{setValue(value => value+1)}, 1000)
        return () => {clearInterval(timer)}
    }, [])

    const myRef = React.useRef()

    // function defined this way can be accessible in the whole file, while arrow function cannot
    function addOne(){
        setValue(value+1)
    }
    
    function unmount(){
        reactDom.unmountComponentAtNode(document.getElementById("root"))
    }

    function show(){
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>Current value is: {value}</h2>
            <button onClick={addOne}>click me to add one</button>
            <button onClick={unmount}>unmount the timer</button>
            <button onClick={show}>show data from input bar</button>
        </div>
    )
}