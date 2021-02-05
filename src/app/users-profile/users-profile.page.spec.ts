import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersProfilePage } from './users-profile.page';

describe('UsersProfilePage', () => {
  let component: UsersProfilePage;
  let fixture: ComponentFixture<UsersProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
