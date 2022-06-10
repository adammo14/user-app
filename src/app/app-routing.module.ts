import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddUserComponent } from './add-user/add-user.component'
import { HomeComponent } from './home/home.component'
import { UserDetailsComponent } from './user-detail/user-detail.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'info/:id', component: UserDetailsComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
