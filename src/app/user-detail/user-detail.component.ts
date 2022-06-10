import { Component, OnInit } from '@angular/core'
import { IUser } from '../app.model'
import { AppService } from '../app.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-random',
    templateUrl: './user-detail.component.html',
})
export class UserDetailsComponent implements OnInit {
    user: IUser

    constructor(
        private appService: AppService,
        private activatedroute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getUserById(this.activatedroute.snapshot.paramMap.get('id'))
    }

    // GET by id
    getUserById(id: number | string): void {
        this.appService.getUser(id).subscribe((res) => {
            this.user = res.body
            res.status === 200
                ? this.appService.showDialog('GET', 'User fetched successfully')
                : this.appService.showDialog('GET', 'Something went wrong...')
        })
    }

    // Update
    updateUser(id: number | string): void {
        this.appService.updateUser(id, { ...this.user }).subscribe((res) => {
            res.status === 200
                ? this.appService.showDialog('PUT', 'Update successful')
                : this.appService.showDialog('PUT', 'Something went wrong...')
        })
    }

    // DELETE
    deleteUser(id: number | string): void {
        this.appService.deleteUser(id).subscribe((res) => {
            res.status === 200
                ? this.appService.showDialog('DELETE', 'Delete successful')
                : this.appService.showDialog(
                      'DELETE',
                      'Something went wrong...'
                  )
        })
    }
}
