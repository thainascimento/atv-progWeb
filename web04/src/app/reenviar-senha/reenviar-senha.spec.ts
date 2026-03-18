import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenviarSenha } from './reenviar-senha';

describe('ReenviarSenha', () => {
  let component: ReenviarSenha;
  let fixture: ComponentFixture<ReenviarSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReenviarSenha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReenviarSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
