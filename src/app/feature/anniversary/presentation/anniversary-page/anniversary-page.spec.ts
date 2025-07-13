import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryPage } from './anniversary-page';

describe('AnniversaryPage', () => {
  let component: AnniversaryPage;
  let fixture: ComponentFixture<AnniversaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnniversaryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnniversaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
