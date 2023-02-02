import { Component, OnInit } from '@angular/core';
import { AdminconnectService } from './adminconnect.service';

@Component({
  selector: 'app-adminconnect',
  templateUrl: './adminconnect.component.html',
  styleUrls: ['./adminconnect.component.scss'],
})

export class AdminconnectComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },];
    public testapp:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        test: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private adminconnectService: AdminconnectService,
    ) { }

    ngOnInit() {
        this.testapp.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    GpCreate() {
        this.adminconnectService.GpCreate(this.testapp).subscribe((data:any) => {
            this.testapp.name = ''
 	 	this.testapp.test = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.adminconnectService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}