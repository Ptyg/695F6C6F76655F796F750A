import { ComponentFixture, TestBed } from '@angular/core/testing';

import { March8Page } from './march8-page';

describe('March8Page', () => {
  let component: March8Page;
  let fixture: ComponentFixture<March8Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [March8Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(March8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
