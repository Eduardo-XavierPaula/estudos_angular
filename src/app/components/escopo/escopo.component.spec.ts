import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscopoComponent } from './escopo.component';

describe('EscopoComponent', () => {
  let component: EscopoComponent;
  let fixture: ComponentFixture<EscopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscopoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
