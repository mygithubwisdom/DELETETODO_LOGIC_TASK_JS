let id = 1; // Changed from const to let, and start from 1
const toDo = [{id: 1, toDo: 'Learn Node.js'}];

export const getToDo = (req, res) => {
    res.json(toDo); // Changed from res.send to res.json
}

export const addToDo = (req, res) => {
    const {task} = req.body;
    const newToDo = {
        id: ++id,
        toDo: task // Added the missing task property
    };
    toDo.push(newToDo); // Push the complete object
    res.json({message: "Added To-Do successfully"});
};

export const deleteToDo = (req, res) => {
    const {id} = req.params;
    
    // Convert id to number for comparison
    const toDoTobeDeleted = toDo.find((task) => task.id === parseInt(id));

    if(!toDoTobeDeleted) {
        return res.status(404).json({error: "To-Do not found."});
    }

    toDo.splice(toDo.indexOf(toDoTobeDeleted), 1);

    res.status(200).json({
        message: "To-Do deleted successfully."
    });
}

 



