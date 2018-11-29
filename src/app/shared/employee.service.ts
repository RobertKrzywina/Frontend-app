import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  readonly rootUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  postEmployee(formData: Employee) {
    return this.http.post(this.rootUrl + '/employees', formData);
  }

  refreshList() {
    this.http.get(this.rootUrl + '/employees')
      .toPromise().then(res => {
        this.list = res as Employee[];
    });
  }

  putEmployee(formData: Employee) {
    return this.http.put(this.rootUrl + '/employees/' + formData.id, formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.rootUrl + '/employees/' + id);
  }
}
