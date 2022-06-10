import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
    title: string
    message: string

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {}
}
