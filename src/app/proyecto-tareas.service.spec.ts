import { TestBed } from '@angular/core/testing';

import { ProyectoTareasService } from './proyecto-tareas.service';

describe('ProyectoTareasService', () => {
  let service: ProyectoTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
