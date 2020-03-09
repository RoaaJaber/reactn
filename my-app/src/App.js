import React ,{Component} from 'react';
import Todo from './Component/todoitem/todoitem';
import AddItem from "./Component/additem/additem";
import './App.css'
 class App extends Component {
  state={
    items:[
      {id:1,name:'hamza',age:22},
      {id:2,name:'rami',age:20},
      {id:3,name:'Ahmad',age:24},
      {id:4,name:'Mohamed',age:22}
    ]
  }
  deleteItem=(id)=>{
    let items=this.state.items.filter((item) =>{
       return  id !== item.id
    })
      this.setState({items})
  }
  addItem = (item) =>{
      item.id=Math.random();
      let items=this.state.items;
      items.push(item);
      this.setState({items})

  }
  render(){
  return (
    <div className="App">
        <h1 className="text-center">TodoList App</h1>


      <Todo items={this.state.items} deletItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
  );
}}

export default App;

