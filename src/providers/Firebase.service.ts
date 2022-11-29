import { Injectable } from "@nestjs/common";
import * as admin from 'firebase-admin'
import {ServiceAccount} from 'firebase-admin'
import { applicationDefault, initializeApp } from 'firebase-admin/app';

@Injectable()
export class FirebaseService {
    static initAdmin = () => {
        initializeApp({
            credential: applicationDefault(),
            projectId: "todo-nest-8fd71",
        });
        // const config: ServiceAccount = {
        //     projectId: process.env.FIREBASE_PROJECT_ID,
        //     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        //     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // }
    }
}