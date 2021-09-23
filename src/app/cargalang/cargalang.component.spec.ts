import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargalangComponent } from './cargalang.component';

describe('CargalangComponent', () => {
  let component: CargalangComponent;
  let fixture: ComponentFixture<CargalangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargalangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargalangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
