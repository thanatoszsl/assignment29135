import {Map, List} from "immutable";

const init = List([
    Map({key: 0, id: 0, status: 1, text: "Learn React"}),
	Map({key: 1, id: 1, status: 1, text: "Learn Redux"}),
    Map({key: 2, id: 2, status: 0, text: "Reduxify this app"}),
    Map({key: 3, id: 3, status: 0, text: "Learn React Native"})
]);


export default function (state = init, action) {
    switch (action.type) {
        case "ADD_TODO":
            return state.push(
                Map(action.payload)
            );
        case "TOGGLE_TODO":
            return state.map(t => {
                if (t.get("id") === action.payload) {
                    return t.update("status", status => !status);
                } else {
                    return t;
                }
            });
        default:
            return state;
    }
}