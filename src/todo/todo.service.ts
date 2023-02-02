import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private usersRepository: Repository<Todo>,
  ) { }

  findAll(): Promise<Todo[]> {
    return this.usersRepository.find();
  }

  findOne(todo_id: string): Promise<Todo> {
    return this.usersRepository.findOneBy({ todo_id });
  }

  async remove(todo_id: string): Promise<void> {
    await this.usersRepository.delete(todo_id);
  }
}
