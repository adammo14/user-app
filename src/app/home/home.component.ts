import { Component, OnInit } from '@angular/core'
import { IUser } from '../app.model'
import { AppService } from '../app.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    userList: IUser[]
    selectedField: string
    searchValue: string
    availableFields: string[] = [
        'id',
        'name',
        'username',
        'email',
        'phone',
        'website',
    ]

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.getAllUsers()
    }

    // GET
    getAllUsers(field?: string, value?: string): void {
        value && value.indexOf(' ') >= 0
            ? (value = value.split(' ').join('%20'))
            : value
        this.appService.getAllUsers(field, value).subscribe((res) => {
            this.userList = res.body
        })
    }

    resetFilter(): void {
        this.selectedField = ''
        this.searchValue = ''
        this.getAllUsers()
    }
}
