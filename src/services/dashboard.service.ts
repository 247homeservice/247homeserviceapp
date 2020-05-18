import { DashBoardModel } from '../models/dashboardModel';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpService } from './http.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService extends BaseService<DashBoardModel> {

  constructor(public http: HttpService) {
    super('dashboard', http);
  }
  getAllDeshBoard() {
    return this.http.get(`${environment.url_api}/dashboard/`);
  }
}
