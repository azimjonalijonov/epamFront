import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogTrainerComponent } from './training-log-trainer.component';

describe('TrainingLogTrainerComponent', () => {
  let component: TrainingLogTrainerComponent;
  let fixture: ComponentFixture<TrainingLogTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingLogTrainerComponent]
    });
    fixture = TestBed.createComponent(TrainingLogTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
