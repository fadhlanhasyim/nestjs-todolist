import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDTO } from './todo.dto';
import { Todo } from './todo.entitiy';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ) { }

    async getData() {
        return this.todoRepository.find();
    }

    async createData(todo: TodoDTO): Promise<Todo> {
        const newTodo = await this.todoRepository.create(todo);
        await this.todoRepository.save(newTodo);
        return newTodo
    }

    async deleteData(id: string) {
        this.todoRepository.delete(id);
        return { "deleted": true }
    }

    async updateData(id: string, todo: Partial<TodoDTO>) {
        await this.todoRepository.update(+id, todo);
        return this.todoRepository.findOne({ where: { id: +id } })
    }
}
