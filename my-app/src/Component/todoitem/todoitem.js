import React from "react";
import './todoitem.css'
const Todo = (props) => {
    const {items,deletItem}=props;
    let length=items.length;
    const ListItem=length? (items.map(item =>
        {
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>deletItem(item.id)}>&times;</span>

                </div>
            )
        }
    )):(<p>There is no item to show</p>)
    return(
        <div className="ListItem">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItem}
        </div>
    )
}
export default Todo