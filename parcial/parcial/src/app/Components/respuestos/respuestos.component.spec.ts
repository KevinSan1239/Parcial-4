import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestosComponent } from './respuestos.component';

describe('RespuestosComponent', () => {
  let component: RespuestosComponent;
  let fixture: ComponentFixture<RespuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
