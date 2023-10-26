import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    { id: 0, name: 'react js', description: 'belajar react js' },
    { id: 1, name: 'nest js' },
    { id: 2, name: 'selenium', description: 'belajar selenium' },
  ];

  create(createTodoDto: CreateTodoDto): Todo[] {
    // const newTodo = { id: Date.now(), ...createTodoDto };

    // this.todos.push(newTodo);
    // newt
    this.todos = [...this.todos, { id: Date.now(), ...createTodoDto }];

    return this.todos;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
