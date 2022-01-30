import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos app',
      description: 'Create NestJs todos app',
      done: false,
    },
    {
      id: 2,
      title: 'bread',
      description: 'buy bread',
      done: true,
    },
  ];

  findOne(id: string) {
    return this.todos.find((todos) => todos.id === Number(id));
  }

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDto) {
    this.todos = [...this.todos, todo];
  }

  update(id: string, todo: CreateTodoDto) {
    const todoToUpdate = this.todos.find((todos) => todos.id === +id);
    if (!todoToUpdate) {
      return new NotFoundException('no todo found');
    }
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updatedTodos = this.todos.map((todo) =>
      todo.id !== +id ? todo : todoToUpdate,
    );
    this.todos = [...updatedTodos];
    return { updatedTodos: 1, todo: todoToUpdate };
  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter(todos => todos.id !== +id)];
    if(this.todos.length < nbOfTodosBeforeDelete) {
      return { deletedTodos: 1,nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0,nbTodos: this.todos.length };
    }
  }
}
