import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogChildComponent } from './changelog-child.component';

describe('ChangelogChildComponent', () => {
  let component: ChangelogChildComponent;
  let fixture: ComponentFixture<ChangelogChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangelogChildComponent]
    });
    fixture = TestBed.createComponent(ChangelogChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
