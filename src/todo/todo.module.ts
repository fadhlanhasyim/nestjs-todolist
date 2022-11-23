import { Module } from '@nestjs/common';
import { Todo } from './todo.entitiy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaClient } from '@prisma/client';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo])
    ],
    controllers: [TodoController],
    providers: [TodoService, PrismaClient],
})

export class TodoModule {}
