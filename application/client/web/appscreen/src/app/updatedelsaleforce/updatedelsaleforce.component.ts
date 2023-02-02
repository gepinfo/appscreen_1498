import { Component, OnInit } from '@angular/core';
import { UpdatedelsaleforceService } from './updatedelsaleforce.service';

@Component({
  selector: 'app-updatedelsaleforce',
  templateUrl: './updatedelsaleforce.component.html',
  styleUrls: ['./updatedelsaleforce.component.scss'],
})

export class UpdatedelsaleforceComponent implements OnInit {
    queryId: any;
    public testapp:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        test: '',
    }

    constructor (
        private updatedelsaleforceService: UpdatedelsaleforceService,
    ) { }

    ngOnInit() {
        this.testapp.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpUpdate() {
        this.updatedelsaleforceService.GpUpdate(this.testapp).subscribe((data:any) => {
            this.testapp.name = ''
 	 	this.testapp.test = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updatedelsaleforceService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetNounById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}