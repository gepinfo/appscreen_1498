import { Component, OnInit } from '@angular/core';
import { SearchsaleforceService } from './searchsaleforce.service';

@Component({
  selector: 'app-searchsaleforce',
  templateUrl: './searchsaleforce.component.html',
  styleUrls: ['./searchsaleforce.component.scss'],
})

export class SearchsaleforceComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },];
    public testapp:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        test: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchsaleforceService: SearchsaleforceService,
    ) { }

    ngOnInit() {
        this.testapp.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.searchsaleforceService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchsaleforceService.GpSearch(this.testapp).subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}