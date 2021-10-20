import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedahotelhabitacionComponent } from './busquedahotelhabitacion.component';

describe('BusquedahotelhabitacionComponent', () => {
  let component: BusquedahotelhabitacionComponent;
  let fixture: ComponentFixture<BusquedahotelhabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedahotelhabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedahotelhabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
