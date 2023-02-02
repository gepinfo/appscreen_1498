import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconnectComponent } from './adminconnect.component';

describe('AdminconnectComponent', () => {
  let component: AdminconnectComponent;
  let fixture: ComponentFixture<AdminconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});