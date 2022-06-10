import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatChipsModule } from '@angular/material/chips'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatDialogModule } from '@angular/material/dialog'
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
    declarations: [DialogComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatChipsModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        AppRoutingModule,
    ],
    exports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatChipsModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
    ],
})
export class NgMaterialModule {}
