import { Component, Input, OnInit } from '@angular/core'
import { IUser } from 'src/app/app.model'
import { AppService } from 'src/app/app.service'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
    @Input('item') user: IUser

    constructor(private appService: AppService) {}

    ngOnInit(): void {}

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
