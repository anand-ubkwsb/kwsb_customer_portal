import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerinfoComponent } from './consumerinfo.component';

describe('ConsumerinfoComponent', () => {
  let component: ConsumerinfoComponent;
  let fixture: ComponentFixture<ConsumerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
