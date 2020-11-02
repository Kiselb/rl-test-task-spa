import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAddNewComponent } from './role-add-new.component';

describe('RoleAddNewComponent', () => {
  let component: RoleAddNewComponent;
  let fixture: ComponentFixture<RoleAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
