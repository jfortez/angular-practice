import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomColorTextComponent } from './random-color-text.component';

describe('RandomColorTextComponent', () => {
  let component: RandomColorTextComponent;
  let fixture: ComponentFixture<RandomColorTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RandomColorTextComponent]
    });
    fixture = TestBed.createComponent(RandomColorTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
