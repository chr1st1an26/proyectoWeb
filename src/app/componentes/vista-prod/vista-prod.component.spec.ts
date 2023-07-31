import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProdComponent } from './vista-prod.component';

describe('VistaProdComponent', () => {
  let component: VistaProdComponent;
  let fixture: ComponentFixture<VistaProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
