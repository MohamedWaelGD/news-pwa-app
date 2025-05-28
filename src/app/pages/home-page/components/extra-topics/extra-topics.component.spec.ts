import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraTopicsComponent } from './extra-topics.component';

describe('ExtraTopicsComponent', () => {
  let component: ExtraTopicsComponent;
  let fixture: ComponentFixture<ExtraTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
