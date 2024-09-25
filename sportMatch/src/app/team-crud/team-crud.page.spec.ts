import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamCrudPage } from './team-crud.page';

describe('TeamCrudPage', () => {
  let component: TeamCrudPage;
  let fixture: ComponentFixture<TeamCrudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
