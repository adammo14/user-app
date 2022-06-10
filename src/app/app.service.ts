import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUser } from './app.model'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from './shared/dialog/dialog.component'

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private url: string = 'https://jsonplaceholder.typicode.com'

    constructor(private http: HttpClient, private dialog: MatDialog) {}

    // GET all users
    getAllUsers(field?: string, value?: string): Observable<any> {
        const url =
            !field && !value
                ? `${this.url}/users`
                : `${this.url}/users?${field}=${value}`
        return this.http.get(`${url}`, {
            observe: 'response',
        })
    }

    // GET user by id
    getUser(id: number | string): Observable<any> {
        return this.http.get(`${this.url}/users/${id}`, {
            observe: 'response',
        })
    }

    // CREATE new user
    createUser(body: IUser): Observable<any> {
        return this.http.post(`${this.url}/users`, body, {
            observe: 'response',
        })
    }

    // UPDATE user
    updateUser(id: number | string, body: IUser): Observable<any> {
        return this.http.put(`${this.url}/users/${id}`, body, {
            observe: 'response',
        })
    }

    // DELETE user
    deleteUser(id: number | string): Observable<any> {
        return this.http.delete(`${this.url}/users/${id}`, {
            observe: 'response',
        })
    }

    // Show a dialog depending on the response
    showDialog(title: string, message: string): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: {
                title: title,
                message: message,
            },
        })
    }
}
