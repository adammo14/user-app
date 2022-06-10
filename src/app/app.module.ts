import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { CardComponent } from './shared/card/card.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgMaterialModule } from './shared/mat.module'
import { UserDetailsComponent } from './user-detail/user-detail.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddUserComponent } from './add-user/add-user.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        UserDetailsComponent,
        AddUserComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgMaterialModule,
        FontAwesomeModule,
        FormsModule,
        Ng2SearchPipeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
