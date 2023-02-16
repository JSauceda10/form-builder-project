import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfoudationComponent } from './formfoudation.component';

describe('FormfoudationComponent', () => {
  let component: FormfoudationComponent;
  let fixture: ComponentFixture<FormfoudationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfoudationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfoudationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
