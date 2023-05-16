import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconsumerComponent } from './listconsumer.component';

describe('ListconsumerComponent', () => {
  let component: ListconsumerComponent;
  let fixture: ComponentFixture<ListconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
