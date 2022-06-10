import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'
import { HomeComponent } from './home.component'
import { AppModule } from '../app.module'
import { setupUsers } from 'src/test-data/setup-test-data'

describe('UserDirectoryComponent', () => {
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>
    let el: DebugElement

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HomeComponent)
                component = fixture.componentInstance
                el = fixture.debugElement
            })
    }))

    it('Should create the component', () => {
        expect(component).toBeTruthy()
    })

    it('should display all user cards on home page', () => {
        component.userList = setupUsers()
        fixture.detectChanges()
        const cards = el.queryAll(By.css('.user-card'))
        expect(cards).toBeDefined()
        expect(cards.length).toBe(10)
    })
})
