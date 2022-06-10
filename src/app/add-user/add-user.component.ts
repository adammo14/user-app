import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { IUser } from '../app.model'
import { AppService } from '../app.service'

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
    constructor(private appService: AppService) {}

    ngOnInit(): void {}

    // puts together a payload accepted by an endpoint
    private prepareBody(form: NgForm): IUser {
        const { lat, lng, ...withoutLatLng } = form.value.address
        return {
            ...form.value.general,
            company: { ...form.value.company },
            address: {
                ...withoutLatLng,
                geo: {
                    lat: form.value.address.lat,
                    lng: form.value.address.lng,
                },
            },
        }
    }

    // POST
    createUser(form: NgForm): void {
        const body = this.prepareBody(form)
        this.appService.createUser(body).subscribe((res) => {
            res.status === 201
                ? this.appService.showDialog('POST', 'User created succesfully')
                : this.appService.showDialog('POST', 'Something went wrong...')
        })
    }
}
