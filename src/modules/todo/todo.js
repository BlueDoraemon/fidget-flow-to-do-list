
class Project {
    constructor(name, description){
        this.name = name;
        this. description = description;
        this.list = [];
    }
    addItem(todoItem) {
        this.list.push(todoItem);
    }
}
class TodoItem {
    constructor(name,description,dueDate,priority){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    }
    changeName(newName){
        this.name = newName;
    }
    changeDescription(newDescription){
        this.description = newDescription;
    }
    changeDate(newDate){
        this.dueDate = newDate;
    }
    changePriority(newImportance){
        this.priority = newImportance;
    }
    finish(){
        this.done = true;
    }
    unfinish(){
        this.done = false;
    }
    //undo button?
}

module.exports = { Project, TodoItem };