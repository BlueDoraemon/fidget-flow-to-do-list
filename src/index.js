'use strict';

//factory function for creating an object


class todo {
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
    changepriority(newImportance){
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
console.log('hello');

// test doms 