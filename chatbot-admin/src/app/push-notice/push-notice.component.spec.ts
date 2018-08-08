import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNoticeComponent } from './push-notice.component';

describe('PushNoticeComponent', () => {
  let component: PushNoticeComponent;
  let fixture: ComponentFixture<PushNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
