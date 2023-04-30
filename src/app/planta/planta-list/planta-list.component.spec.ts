/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { PlantaListComponent } from './planta-list.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.plantas.push(planta);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr class="lista-plantas"> elements', () => {
    expect(debug.queryAll(By.css('tr.lista-plantas'))).toHaveSize(3)
  });

  it('should have 1 <tr class="encabezado-tabla"> elements', () => {
    expect(debug.queryAll(By.css('tr.encabezado-tabla'))).toHaveSize(1)
  });

  it('should have 1 <div class="total-plantas> elements', () => {
    expect(debug.queryAll(By.css('div.total-plantas'))).toHaveSize(1)
  });

});
