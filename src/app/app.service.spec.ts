import { TestBed } from '@angular/core/testing'
import { AppService } from './app.service'
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing'
import { MODIFIED_USER, USER, USERS } from 'src/test-data/user'
import { MatDialogModule } from '@angular/material/dialog'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('UserAppService', () => {
    let appService: AppService
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, MatDialogModule],
            providers: [AppService],
            schemas: [NO_ERRORS_SCHEMA],
        })

        appService = TestBed.inject(AppService)
        httpTestingController = TestBed.inject(HttpTestingController)
    })

    it('should get all users', () => {
        appService.getAllUsers().subscribe((res) => {
            expect(res).toBeTruthy()
            expect(res.body.body.length).toBe(10)
            expect(res.status).toBe(200)
            const selecedUser = res.body.body.find(
                (user) => user.name === 'Patricia Lebsack'
            )
            expect(selecedUser.email).toBe('Julianne.OConner@kory.org')
        })

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        )
        expect(req.request.method).toEqual('GET')
        req.flush(USERS)
        httpTestingController.verify()
    })

    it('should get a specific user by id', () => {
        appService.getUser(9).subscribe((res) => {
            expect(res.body).toBeTruthy()
            expect(res.body.id).toBe(9)
            expect(res.status).toBe(200)
        })

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users/9'
        )
        expect(req.request.method).toEqual('GET')
        req.flush(USER)
    })

    it('should create a new user', () => {
        appService.createUser(MODIFIED_USER).subscribe((res) => {
            expect(res.body).toBeTruthy()
            expect(res.body.name).toBe('Update Test')
            expect(res.body.company).toBeTruthy()
            expect(res.status).toBe(200)
        })

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users'
        )
        expect(req.request.method).toEqual('POST')
        req.flush(MODIFIED_USER)
    })

    it('should update a specific user by id', () => {
        appService.updateUser(9, MODIFIED_USER).subscribe((res) => {
            expect(res.body).toBeTruthy()
            expect(res.body.name).toBe('Update Test')
            expect(res.body.address).toBeTruthy()
            expect(res.status).toBe(200)
        })

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users/9'
        )
        expect(req.request.method).toEqual('PUT')
        req.flush(MODIFIED_USER)
    })

    it('should delete a specific user by id', () => {
        appService.deleteUser(9).subscribe((res) => {
            expect(res).toBeTruthy()
            expect(res.status).toBe(200)
        })

        const req = httpTestingController.expectOne(
            'https://jsonplaceholder.typicode.com/users/9'
        )
        expect(req.request.method).toEqual('DELETE')
        req.flush(USER)
    })
})
