import React from 'react';
import HookSon from './2_hooks_son';

// export default function HookFather(){
//     const [fatherValue, setFatherValue] = React.useState(0)

//     function increaseFatherValue(){setFatherValue(fatherValue+1)}


//     return (<div>
//                 <button onClick={increaseFatherValue}>click me to increase value passed to son</button>
//                 <HookSon fatherValue={fatherValue}/>
//             </div>);
// }


export default class HookFather extends React.Component {
    state = {fatherValue: 0}

    increaseFatherValue = ()=>{
        const {fatherValue} = this.state;
        this.setState({fatherValue: fatherValue+1})
    }

    render() {
        const {fatherValue} = this.state;
        return (<div>
                    <button onClick={this.increaseFatherValue}>click me to increase value passed to son</button>
                    <HookSon fatherValue={fatherValue}/>
                </div>);
    }
}
