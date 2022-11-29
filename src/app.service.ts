import { Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

@Injectable()
export class AppService {
  constructor(private firebaseAuth: FirebaseAuthenticationService) { }

  async verifyToken(token: string) {
    return await this.firebaseAuth.verifyIdToken("eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5NmFkY2U5OTk5YmJmNWNkMzBmMjlmNDljZDM3ZjRjNWU2NDI3NDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kby1uZXN0LThmZDcxIiwiYXVkIjoidG9kby1uZXN0LThmZDcxIiwiYXV0aF90aW1lIjoxNjY5Njg2MTg2LCJ1c2VyX2lkIjoicHdGVThZamhvQmZCN1pSbnFsSTBrVXFPV2RWMiIsInN1YiI6InB3RlU4WWpob0JmQjdaUm5xbEkwa1VxT1dkVjIiLCJpYXQiOjE2Njk2ODYxODYsImV4cCI6MTY2OTY4OTc4NiwiZW1haWwiOiJmYWRobGFuaGFzeWltNTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImZhZGhsYW5oYXN5aW01NEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ")
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
