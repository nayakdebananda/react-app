import React from 'react';
import Heading from './Heading';
import Item from './Item';
import InputText from './InputText';
import FlatButton from './FlatButton'

var todoText=['Go to gym', 'Drink water', 'watching movie'];
var todoItem=[];
todoText.forEach(function (element){
    todoItem.push(<Item todo={element}/>);
});
function App(){
    return <div>
        <Heading />
        <InputText />
        <FlatButton name="Add ToDO" />
        <FlatButton name="Delet Done" />
        {todoItem}
    </div>;
}

export default App;
