import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePushComponent } from './notice-push.component';

describe('NoticePushComponent', () => {
  let component: NoticePushComponent;
  let fixture: ComponentFixture<NoticePushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticePushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
