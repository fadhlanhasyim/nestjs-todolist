import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prisma, PrismaClient } from '@prisma/client';
import { Repository } from 'typeorm';
import { TodoDTO } from './todo.dto';
import { Todo } from './todo.entitiy';

@Injectable()
export class TodoService {
    constructor(
        // @InjectRepository(Todo)
        // private todoRepository: Repository<Todo>
        private prisma:PrismaClient
    ) { }

    async getData() {
        return this.prisma.todo.findMany()
        // return this.todoRepository.find();
    }

    async createData(data: Prisma.todoCreateInput): Promise<Todo> {
        data.isFinished = JSON.parse(data.isFinished + "")
        return this.prisma.todo.create({data})
        // const newTodo = this.todoRepository.create(todo);
        // await this.todoRepository.save(newTodo);
        // return newTodo
    }

    async deleteData(id: number) {
        return this.prisma.todo.delete({
            where: {id}
        })
        // this.todoRepository.delete(id);
        // return { "deleted": true }
    }

    async updateData(id: number, data: Prisma.todoUpdateInput) : Promise<Todo>{
        data.isFinished = JSON.parse(data.isFinished+"")
        return this.prisma.todo.update({
            where: {
                id:id,
            },
            data
        })
        // await this.todoRepository.update(+id, todo);
        // return this.todoRepository.findOne({ where: { id: +id } })
    }
}
