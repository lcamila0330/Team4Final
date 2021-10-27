import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsedebajaComponent } from './darsedebaja.component';

describe('DarsedebajaComponent', () => {
  let component: DarsedebajaComponent;
  let fixture: ComponentFixture<DarsedebajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarsedebajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarsedebajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
