import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display';
import VIEWTODO from './viewTodo';

class HOMECOMPONENT extends Component {
    

    state = {
        rowsData: [],
        todoList: [],
    }

    constructor() {
        super();
      }


  async componentDidMount(){
        this.getAllAPI();
    }

    getAllAPI = ()=>{
        (async() =>{
            try {
                const response = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
                this.setState({rowsData:response.data});
               // console.log(this.state.rowsData);
                 } catch (error) {
                console.error(error);
              }
        })();
    }

    viewTodoById =(id)=>{
        (async() =>{
            try {
                const response = await axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`);
                this.setState({todoList:response.data});
               // console.log(this.state.rowsData);
                 } catch (error) {
                console.error(error);
              }
        })();
    }
    render() { 
        
          return (  
            <>
          <Display rows={this.state.rowsData} getById={this.viewTodoById}/>
          <VIEWTODO todoList={this.state.todoList} />        
      </>  
          );
      }
}


export default HOMECOMPONENT;