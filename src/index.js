'use strict';

//factory function for creating an object


class todo {
    constructor(name,dueDate,important){
        this.name = name;
        this.dueDate = dueDate;
        this.important = important;
        this.done = false;
    }
    changeName(newName){
        this.name = newName;
    }
    changeDate(newDate){
        this.dueDate = newDate;
    }
    changeImportant(newImportance){
        this.important = newImportance;
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