import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

// localhost:4200/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto) {
    this.todosService.create(newTodo);
    return 'to do created';
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() newTodo: CreateTodoDto) {
    return this.todosService.update(id, newTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.delete(id);
  }
}
