import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogParentComponent } from './changelog-parent.component';

describe('ChangelogParentComponent', () => {
  let component: ChangelogParentComponent;
  let fixture: ComponentFixture<ChangelogParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangelogParentComponent]
    });
    fixture = TestBed.createComponent(ChangelogParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
