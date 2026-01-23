import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseCodesComponent } from './response-codes.component';


describe('ResponseCodes', () => {
  let component: ResponseCodesComponent;
  let fixture: ComponentFixture<ResponseCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseCodesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseCodesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
