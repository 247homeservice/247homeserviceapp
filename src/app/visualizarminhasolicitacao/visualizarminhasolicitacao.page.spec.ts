import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizarminhasolicitacaoPage } from './visualizarminhasolicitacao.page';

describe('VisualizarminhasolicitacaoPage', () => {
  let component: VisualizarminhasolicitacaoPage;
  let fixture: ComponentFixture<VisualizarminhasolicitacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarminhasolicitacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarminhasolicitacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
