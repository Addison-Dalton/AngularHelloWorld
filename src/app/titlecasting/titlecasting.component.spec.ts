import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecastingComponent } from './titlecasting.component';

describe('TitlecastingComponent', () => {
  let component: TitlecastingComponent;
  let fixture: ComponentFixture<TitlecastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlecastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
