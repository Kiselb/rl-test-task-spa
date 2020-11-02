import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesActiveComponent } from './roles-active.component';

describe('RolesActiveComponent', () => {
  let component: RolesActiveComponent;
  let fixture: ComponentFixture<RolesActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
