import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobanComponent } from './goban.component';

describe('GobanComponent', () => {
  let component: GobanComponent;
  let fixture: ComponentFixture<GobanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GobanComponent],
    });
    fixture = TestBed.createComponent(GobanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
