import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSyllabusComponent } from './show-syllabus.component';

describe('ShowSyllabusComponent', () => {
  let component: ShowSyllabusComponent;
  let fixture: ComponentFixture<ShowSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
