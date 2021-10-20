import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesdeperfilComponent } from './ajustesdeperfil.component';

describe('AjustesdeperfilComponent', () => {
  let component: AjustesdeperfilComponent;
  let fixture: ComponentFixture<AjustesdeperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesdeperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesdeperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
