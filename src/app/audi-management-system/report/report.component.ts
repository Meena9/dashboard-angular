import { Component, OnInit } from "@angular/core";
import { dataConst } from "src/app/constants/dataConst";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"],
})
export class ReportComponent implements OnInit {
  title: string = "Report Lists";
  search: string = "";
  displayedColumns: string[] = [
    "name",
    "report",
    "create",
    "createDate",
    "updatedDate",
  ];
  dataSource = dataConst.report_data;
  constructor() {}

  ngOnInit() {}
}
