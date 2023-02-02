import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedelsaleforceComponent } from './updatedelsaleforce.component';

describe('UpdatedelsaleforceComponent', () => {
  let component: UpdatedelsaleforceComponent;
  let fixture: ComponentFixture<UpdatedelsaleforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedelsaleforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedelsaleforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});