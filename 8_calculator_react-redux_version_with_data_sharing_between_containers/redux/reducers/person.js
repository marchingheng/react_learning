import { ADD_PERSON } from "../constant";

const initState = [{id: "001", name: "Tom", age: 18}]
export default function personReducer(preState=initState, action){
    const {data, type} = action
    switch (type) {
        case ADD_PERSON:
            // // You cannot write like this, because this will make personReducer no longer a pure function. Redux enforce the reduces to be pure functions.
            // // Definition of pure function:
            // // 1. given the same input will return the same output
            // // 2. produce no side effect(like setting other variables' value or making requests to other services)
            // preState.unshift(data)
            // return preState
            return [data, ...preState];
        default:
            return preState;
    }
}