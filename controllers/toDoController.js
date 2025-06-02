const id = 0;
const toDo = [{id: 1, toDo: 'Learn Node.js'}];

export const getToDo = (req, res) => {
    res.send(toDo);
}


export const addToDo = (req, res) => {
    const {task} = req.body;
    const newToDo = task;
    toDo.push({
        id: ++id,
    
    });
    res.json({message:"Added To-Do successfully"});
};
export const deleteToDo = (req, res) => {
    const {id} = req.params;

    const toDoTobeDeleted = toDo.find((task) => task.id === id);

    if(!toDoTobeDeleted) {
        return res.status(404).json({error: "To-Do not found."});
    }

    toDo.splice(toDo.indexOf(toDoTobeDeleted), 1);

    res.status(200).json({
        message: "To-Do deleted successfully."
    });
}



 



