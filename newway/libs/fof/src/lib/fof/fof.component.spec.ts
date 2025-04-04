import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FofComponent } from './fof.component';

describe('FofComponent', () => {
  let component: FofComponent;
  let fixture: ComponentFixture<FofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FofComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
