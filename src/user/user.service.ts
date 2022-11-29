import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaClient){}

    async getData(){
        return this.prisma.user.findMany()
    }
    // async getData(email:string){
    //     return this.prisma.user.findUnique({
    //         where : {email}
    //     })
    // }

    async createData(data: Prisma.UserCreateInput){
        return this.prisma.user.create({data})
    }
}
