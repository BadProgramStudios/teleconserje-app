import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitacionPage } from './invitacion.page';

describe('InvitacionPage', () => {
  let component: InvitacionPage;
  let fixture: ComponentFixture<InvitacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
