import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AudiManagementSystemComponent } from "./audi-management-system/audi-management-system.component";
import { ReportComponent } from "./audi-management-system/report/report.component";
import { VendorManagementComponent } from "./vendor-management/vendor-management.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: AudiManagementSystemComponent },
  { path: "report", component: ReportComponent },
  { path: "vendor-management", component: VendorManagementComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
