import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { UserDTO } from 'src/todo/todo.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    // @Get(':email')
    // getData(email:string){
    //     return this.userService.getData(email);
    // }

    @Get()
    getData(){
        return this.userService.getData();
    }

    @Post()
    createData(@Body() body){
        // console.log(body['token'])
        return this.userService.createData(body['token'])
    }
}
