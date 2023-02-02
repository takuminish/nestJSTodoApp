import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(todo_id: string): Promise<Todo> {
    return this.todoRepository.findOneBy({ todo_id });
  }

  async remove(todo_id: string): Promise<void> {
    await this.todoRepository.delete(todo_id);
  }
}
