import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AudiManagementSystemComponent } from "./audi-management-system/audi-management-system.component";
import { ReportComponent } from "./audi-management-system/report/report.component";
import { VendorManagementComponent } from "./vendor-management/vendor-management.component";
import { SideNavBarComponent } from "./side-nav-bar/side-nav-bar.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
} from "@angular/material";
import { TableComponent } from "./common/table/table.component";
@NgModule({
  declarations: [
    AppComponent,
    AudiManagementSystemComponent,
    ReportComponent,
    VendorManagementComponent,
    SideNavBarComponent,

    TableComponent,
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatToolbarModule,
    LayoutModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
