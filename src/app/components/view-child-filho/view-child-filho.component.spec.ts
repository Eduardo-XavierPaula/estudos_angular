import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildFilhoComponent } from './view-child-filho.component';

describe('ViewChildFilhoComponent', () => {
  let component: ViewChildFilhoComponent;
  let fixture: ComponentFixture<ViewChildFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildFilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
