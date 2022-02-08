import { Component, OnInit } from '@angular/core';
import { ProyectoTareasService } from '../proyecto-tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listadetareas: ProyectoTareasService;
  constructor(tareas: ProyectoTareasService) {this.listadetareas = tareas;}

  ngOnInit(): void {
    this.listadetareas.listadetareas = JSON.parse(localStorage['listadetareas']);
  }
}
