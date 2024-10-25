import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLogStudentComponent } from './training-log-student.component';

describe('TrainingLogStudentComponent', () => {
  let component: TrainingLogStudentComponent;
  let fixture: ComponentFixture<TrainingLogStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingLogStudentComponent]
    });
    fixture = TestBed.createComponent(TrainingLogStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
