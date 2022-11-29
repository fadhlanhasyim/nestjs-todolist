import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { applicationDefault } from 'firebase-admin/app';

const app = initializeApp({
    credential: applicationDefault(),
    projectId: "todo-nest-8fd71",
});
const auth = getAuth(app);

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

    async createData(idToken:string){
        const decodedToken = await auth.verifyIdToken(idToken);
        const data : Prisma.userCreateInput = {
            email: decodedToken.email,
            userid: decodedToken.uid,
        }
        return this.prisma.user.create({data}).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
