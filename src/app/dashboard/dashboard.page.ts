import { Component, OnInit } from '@angular/core';
import { IDashBoard } from '../../interfaces/IDashBoard';
import { DashBoardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  list: IDashBoard[] = [];
  constructor(private dashBoardService: DashBoardService) { }

  ionViewWillEnter() {
    this.loadData();
  }

  async loadData() {
    const { success, data } = await this.dashBoardService.getAllDeshBoard();
    if (success) {
      this.list = data as IDashBoard[];
    }
  }

}
