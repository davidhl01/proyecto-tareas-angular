import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirTareaComponent } from './introducir-tarea.component';

describe('IntroducirTareaComponent', () => {
  let component: IntroducirTareaComponent;
  let fixture: ComponentFixture<IntroducirTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducirTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
