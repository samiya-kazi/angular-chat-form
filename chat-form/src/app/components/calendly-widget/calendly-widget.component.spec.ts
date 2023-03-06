import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendlyWidgetComponent } from './calendly-widget.component';

describe('CalendlyWidgetComponent', () => {
  let component: CalendlyWidgetComponent;
  let fixture: ComponentFixture<CalendlyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendlyWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendlyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
