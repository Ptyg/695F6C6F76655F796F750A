import { ComponentFixture, TestBed } from '@angular/core/testing';

import { February14Page } from './february14-page';

describe('February14Page', () => {
  let component: February14Page;
  let fixture: ComponentFixture<February14Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [February14Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(February14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
