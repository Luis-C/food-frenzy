import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private PATH = 'http://localhost:3030/transaction';
  constructor(private http: HttpClient) {}

  increaseBuy(username, amount) {
    let transaction: Transaction = {
      username: username,
      type: 'increase',
      amount: amount,
    };

    return this.http.post(`${this.PATH}/buy`, transaction);
  }

  decreaseBuy(username, amount) {
    let transaction: Transaction = {
      username: username,
      type: 'decrease',
      amount: amount,
    };

    return this.http.post(`${this.PATH}/buy`, transaction);
  }

  increaseBump(username, amount) {
    let transaction: Transaction = {
      username: username,
      type: 'increase',
      amount: amount,
    };

    return this.http.post(`${this.PATH}/bump`, transaction);
  }

  decreaseBump(username, amount) {
    let transaction: Transaction = {
      username: username,
      type: 'decrease',
      amount: amount,
    };

    return this.http.post(`${this.PATH}/bump`, transaction);
  }
}
