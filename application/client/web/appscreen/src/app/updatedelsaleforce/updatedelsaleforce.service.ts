import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatedelsaleforceService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(testapp:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/testapp' + `?jwt_token=${jwt_token}`, testapp);
    }
    GpDelete(testappId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.WEB_API + '/testapp/' + testappId + `?jwt_token=${jwt_token}`);
    }
}