import React, {Component} from "react";
import Header from "./Header";
import ShowAddNewTodo from "../containers/ShowAddNewTodo";
import ShowTodoList from "../containers/ShowTodoList";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <ShowTodoList /> 
			    <ShowAddNewTodo />
			
            </div>
        );
    }
}
