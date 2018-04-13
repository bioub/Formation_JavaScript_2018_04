import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosService {


  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get('http://localhost:3000/api/todos');
  }
}
