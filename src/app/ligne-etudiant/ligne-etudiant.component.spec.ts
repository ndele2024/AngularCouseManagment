import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneEtudiantComponent } from './ligne-etudiant.component';

describe('LigneEtudiantComponent', () => {
  let component: LigneEtudiantComponent;
  let fixture: ComponentFixture<LigneEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneEtudiantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
