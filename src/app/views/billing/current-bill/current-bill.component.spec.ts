import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBillComponent } from './current-bill.component';

describe('CurrentBillComponent', () => {
  let component: CurrentBillComponent;
  let fixture: ComponentFixture<CurrentBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
