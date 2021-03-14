import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiManagementSystemComponent } from './audi-management-system.component';

describe('AudiManagementSystemComponent', () => {
  let component: AudiManagementSystemComponent;
  let fixture: ComponentFixture<AudiManagementSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiManagementSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
