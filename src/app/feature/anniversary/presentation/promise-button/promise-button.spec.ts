import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseButton } from './promise-button';

describe('PromiseButton', () => {
  let component: PromiseButton;
  let fixture: ComponentFixture<PromiseButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
