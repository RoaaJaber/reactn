import React,{Component} from "react";
import './additem.css'
class AddItem extends Component{
    state={
        name:'',
        age:''
    }
    handelChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }
    handelSubmit =(e) =>{
        e.preventDefault();
        if(e.target.name.value===''  || e.target.age.value ===''){return false}
        else{
        this.props.addItem(this.state);
        this.setState({
            name:'' ,
            age:''
            }
        )}

    }
    render() {
        return(
            <div>
            <form onSubmit={this.handelSubmit}>
                <input type="text" placeholder="Enter Name ..." id="name" value={this.state.name} onChange={this.handelChange}/>
                <input type="number" placeholder="Enter Age ..." id="age" value={this.state.age} onChange={this.handelChange}/>
                <input type="submit" value="Add"/>

            </form>

            </div>
        )
    }
}
export default AddItem