import React from "react";
import { TextField } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {List} from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Todo = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [todoText, setTodo] = useState("");
  const [editId, setEditId] = useState(null);
  function handleAdd() {
    if (todoText.trim()) {
      dispatch({
        type: "Add_TODO",
        payload: { id: Date.now(), text: todoText },
      });
      setTodo("");
    }
  }

function handledelete(id){
    dispatch({type:"DELETE_TODO",payload:id})
}
function handleEdit(item){
    setEditId(item.id);
    setTodo(item.text);

}
const handleUpdate = () => {
    if (todoText.trim()) {
      dispatch({ type: 'UPDATE_TODO', payload: { id: editId, text: todoText } });
      setTodo('');
      setEditId(null);
    }
  };

  return (
    <div>
      <h2>Todo App</h2>
      <TextField
        id="standard-basic"
        label="Task Name"
        variant="standard"
        value={todoText}
        sx={{ color: "white" }}
        onChange={(e) => setTodo(e.target.value)}
      />

{editId ? (
    <Fab
        color="primary"
        aria-label="update"
        sx={{ marginLeft: 5 }}
        onClick={handleUpdate}
      >
<DoneIcon />
</Fab>
        // <button onClick={handleUpdate}>Update Todo</button>
      ) : (
        <Fab
        color="primary"
        aria-label="add"
        sx={{ marginLeft: 5 }}
        onClick={handleAdd}
      >
        <AddIcon />
      </Fab>
      )}
     

      <List sx={{  width: 500, bgcolor: 'background.paper'}}>
      {todos.map((item, index) => (
        <>
           <ListItem
      key={index}
      disableGutters
      secondaryAction={
        <>
        <Fab color="secondary" aria-label="edit" onClick={()=>handleEdit(item)} sx={{margin:3}}>
        <EditIcon />
      </Fab>
 <Fab sx={{backgroundColor:"red", '&:hover': {
          backgroundColor: ' #b30000', // Change to your desired hover color
        },}} aria-label="delete" onClick={()=>handledelete(item.id)}>
      
      <DeleteIcon/>
      </Fab>
        </>
        
      }
      sx={{padding:3 ,marginTop:2}}
    >
      <ListItemText primary={`${item.text}`} />
          
    </ListItem>
        </>
      ))}
      </List>
    </div>
  );
};

export default Todo;
