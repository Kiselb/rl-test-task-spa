import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersActiveComponent } from './users-active.component';

describe('UsersActiveComponent', () => {
  let component: UsersActiveComponent;
  let fixture: ComponentFixture<UsersActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
