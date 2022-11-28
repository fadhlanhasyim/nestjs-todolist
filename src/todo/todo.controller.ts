import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}

    @Get()
    getData() {
        return this.todoService.getData();
    }

    @Post()
    createData(@Body() todo:TodoDTO){
        // console.log(todo)
        return this.todoService.createData(todo);
    }

    @Delete(':id')
    deleteData(@Param('id') id:string){
        return this.todoService.deleteData(+id);
    }

    @Put(':id')
    updateData(@Param('id') id:string, @Body() todo:Partial<TodoDTO>){
        return this.todoService.updateData(+id, todo);
    }

}
