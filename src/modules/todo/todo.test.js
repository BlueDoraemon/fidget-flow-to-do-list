const { Project, TodoItem } = require('./todo.js');

describe('Project', () => {
    let project;
  
    beforeEach(() => {
      project = new Project('My Project', 'Project description');
    });
  
    it('should initialize a project with the correct properties', () => {
      expect(project.name).toBe('My Project');
      expect(project.description).toBe('Project description');
      expect(project.list).toEqual([]);
    });
  
    it('should add a todo item to the project', () => {
      const todoItem = new TodoItem('Task 1', 'Task description', '2023-06-30', 'High');
      project.addItem(todoItem);
      expect(project.list).toHaveLength(1);
      expect(project.list[0]).toBe(todoItem);
    });
  });
  
  describe('TodoItem', () => {
    let todoItem;
  
    beforeEach(() => {
      todoItem = new TodoItem('Task 1', 'Task description', '2023-06-30', 'High');
    });
  
    it('should initialize a todo item with the correct properties', () => {
      expect(todoItem.name).toBe('Task 1');
      expect(todoItem.description).toBe('Task description');
      expect(todoItem.dueDate).toBe('2023-06-30');
      expect(todoItem.priority).toBe('High');
      expect(todoItem.done).toBe(false);
    });
  
    it('should change the name of a todo item', () => {
      todoItem.changeName('Updated Task 1');
      expect(todoItem.name).toBe('Updated Task 1');
    });
  
    it('should change the description of a todo item', () => {
      todoItem.changeDescription('Updated Task description');
      expect(todoItem.description).toBe('Updated Task description');
    });
  
    it('should change the due date of a todo item', () => {
      todoItem.changeDate('2023-07-05');
      expect(todoItem.dueDate).toBe('2023-07-05');
    });
  
    it('should change the priority of a todo item', () => {
      todoItem.changePriority('Medium');
      expect(todoItem.priority).toBe('Medium');
    });
  
    it('should mark a todo item as finished', () => {
      todoItem.finish();
      expect(todoItem.done).toBe(true);
    });
  
    it('should mark a todo item as unfinished', () => {
      todoItem.unfinish();
      expect(todoItem.done).toBe(false);
    });
  });