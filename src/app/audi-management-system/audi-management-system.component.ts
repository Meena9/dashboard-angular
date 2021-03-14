import { Component, OnInit } from "@angular/core";
import { dataConst } from "../constants/dataConst";
export interface PeriodicElement {
  name: string;
  description: string;
  create: string;
  createDate: string;
  updatedDate: string;
}

@Component({
  selector: "app-audi-management-system",
  templateUrl: "./audi-management-system.component.html",
  styleUrls: ["./audi-management-system.component.css"],
})
export class AudiManagementSystemComponent implements OnInit {
  title: string = "Check Lists";
  search: string = "";
  displayedColumns: string[] = [
    "name",
    "description",
    "create",
    "createDate",
    "updatedDate",
  ];
  dataSource = dataConst.audit_data;
  constructor() {}

  ngOnInit() {}
}
