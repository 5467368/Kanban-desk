import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumeComponent } from './colume.component';

describe('ColumeComponent', () => {
  let component: ColumeComponent;
  let fixture: ComponentFixture<ColumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
