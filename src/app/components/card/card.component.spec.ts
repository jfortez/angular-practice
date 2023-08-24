import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupComponentsComponent } from './card.component';

describe('GroupComponentsComponent', () => {
  let component: GroupComponentsComponent;
  let fixture: ComponentFixture<GroupComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupComponentsComponent],
    });
    fixture = TestBed.createComponent(GroupComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
