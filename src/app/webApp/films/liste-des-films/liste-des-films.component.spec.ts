import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesFilmsComponent } from './liste-des-films.component';

describe('ListeDesFilmsComponent', () => {
  let component: ListeDesFilmsComponent;
  let fixture: ComponentFixture<ListeDesFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
