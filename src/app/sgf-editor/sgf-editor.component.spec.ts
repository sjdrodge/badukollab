import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgfEditorComponent } from './sgf-editor.component';

describe('SgfEditorComponent', () => {
  let component: SgfEditorComponent;
  let fixture: ComponentFixture<SgfEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SgfEditorComponent],
    });
    fixture = TestBed.createComponent(SgfEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
