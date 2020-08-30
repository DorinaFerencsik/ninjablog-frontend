import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedPostComponent } from './highlighted-post.component';

describe('HighlightedPostComponent', () => {
  let component: HighlightedPostComponent;
  let fixture: ComponentFixture<HighlightedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedPostComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
