var list = document.getElementById("list");
function addtodo(){
    var todo_item = document.getElementById("todo-item");

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value))

    var deleteButton = document.createElement("button");

    var deltext = document.createTextNode("Delete");
    deleteButton.setAttribute("onclick","deleteitems(this)")

    deleteButton.appendChild(deltext);

    li.appendChild(deleteButton);
//     console.log(li)

//     list.appendChild(li);
// }


var editbtn = document.createElement('button');
var edittext = document.createTextNode("Edit")
editbtn.setAttribute("onclick","editItems(this)")

editbtn.appendChild(edittext);
li.appendChild(editbtn);
console.log(li);

list.appendChild(li); 

todo_item.value="";

}

function deleteitems(e){
    e.parentNode.remove()
}
 
function editItems(e){

    var value= e.parentNode.firstChild.nodeValue;
    var editedvalue= prompt("Enter edit value",value);
    e.parentNode.firstChild.nodeValue=editedvalue;

}

function deleteall(){
    list.innerHTML=" ";
}


