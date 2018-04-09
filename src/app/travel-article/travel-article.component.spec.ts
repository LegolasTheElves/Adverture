import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelArticleComponent } from './travel-article.component';

describe('TravelArticleComponent', () => {
  let component: TravelArticleComponent;
  let fixture: ComponentFixture<TravelArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
