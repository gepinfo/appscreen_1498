import { Component, OnInit } from '@angular/core';
import { CreatesalesService } from './createsales.service';

@Component({
  selector: 'app-createsales',
  templateUrl: './createsales.component.html',
  styleUrls: ['./createsales.component.scss'],
})

export class CreatesalesComponent implements OnInit {
    public testapp:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        test: '',
    }

    constructor (
        private createsalesService: CreatesalesService,
    ) { }

    ngOnInit() {
        this.testapp.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createsalesService.GpCreate(this.testapp).subscribe((data:any) => {
            this.testapp.name = ''
 	 	this.testapp.test = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}