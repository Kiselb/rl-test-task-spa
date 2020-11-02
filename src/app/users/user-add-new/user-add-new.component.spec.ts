import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddNewComponent } from './user-add-new.component';

describe('UserAddNewComponent', () => {
  let component: UserAddNewComponent;
  let fixture: ComponentFixture<UserAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
