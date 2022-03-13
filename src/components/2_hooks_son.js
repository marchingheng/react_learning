import React,{useEffect} from 'react';

// export default function HookSon({fatherValue}){
//     const [sonValue, setSonValue] = React.useState(0)

//     useEffect(() => {
//         console.log("print this after mounting and any state/props change")
//     })

//     useEffect(() => {
//         console.log("print this after mounting and state/props change of sonValue")
//     }, [sonValue])

//     useEffect(() => {
//         console.log("print this only after mounting")
//     }, [])

//     function increaseSonValue(){setSonValue(sonValue+1)}


//     return (<div>
//                 <div>Son receive {fatherValue} from father</div>
//                 <button onClick={increaseSonValue}>click me to increase value own by son</button>
//                 <div>Son has value {sonValue} on its own</div>
//             </div>);
// }


export default class HookSon extends React.Component {
    componentDidMount(){
        console.log("print this during initial mounting and any state change")
    }

    componentDidUpdate(){
        console.log("print this during when component is updated")
    }


    state = {sonValue: 0}

    increaseSonValue = ()=>{
        const {sonValue} = this.state;
        this.setState({sonValue: sonValue+1})
    }

    render() {
        // rendered will be called in these 2 scenarios\
        //             1. after mounting and when any state/props change\
        //             2. when any state/props change, it does not matter whether the state/props is in the using in the returning JSX)
        console.log("render is called")
        const {sonValue} = this.state;
        return (<div>
                    <div>Son receive {this.props.fatherValue} from father</div>
                    <button onClick={this.increaseSonValue}>click me to increase value own by son</button>
                    <div>Son has value {sonValue} on its own</div>
                </div>);
    }
}
