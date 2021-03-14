import { Component, OnInit } from "@angular/core";
import { dataConst } from "../constants/dataConst";

@Component({
  selector: "app-vendor-management",
  templateUrl: "./vendor-management.component.html",
  styleUrls: ["./vendor-management.component.css"],
})
export class VendorManagementComponent implements OnInit {
  title: string = "Vendors Lists";
  search: string = "";
  displayedColumns: string[] = [
    "name",
    "address",
    "create",
    "createDate",
    "updatedDate",
  ];
  dataSource = dataConst.vendor_data;
  constructor() {}

  ngOnInit() {}
}
