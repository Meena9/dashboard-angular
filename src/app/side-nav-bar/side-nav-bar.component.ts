import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-side-nav-bar",
  templateUrl: "./side-nav-bar.component.html",
  styleUrls: ["./side-nav-bar.component.css"],
})
export class SideNavBarComponent implements OnInit {
  isHandset = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isHandset = true;
        } else {
          this.isHandset = false;
        }
      });
  }
}
