import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPagePage } from './detail-page.page';

describe('DetailPagePage', () => {
  let component: DetailPagePage;
  let fixture: ComponentFixture<DetailPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
