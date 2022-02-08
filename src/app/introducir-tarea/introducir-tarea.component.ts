import { Component, OnInit } from '@angular/core';
import { ProyectoTareasService } from '../proyecto-tareas.service';

@Component({
  selector: 'app-introducir-tarea',
  templateUrl: './introducir-tarea.component.html',
  styleUrls: ['./introducir-tarea.component.css']
})
export class IntroducirTareaComponent implements OnInit {

  listadetareas: ProyectoTareasService;
  nombre= "";
  descripcion= "";
  prioridad= "";
  estadotarea= false;

  constructor(tareas: ProyectoTareasService) {this.listadetareas = tareas;}

  anadirtarea(){
    if(this.nombre && this.descripcion && this.prioridad){ // cuando los 3 campos estén rellenos dejará añadir la tarea
      let datostarea = {
        nombre: this.nombre, 
        descripcion: this.descripcion, 
        fecha: new Date().toLocaleString(),
        prioridad: this.prioridad, 
        estadotarea: this.estadotarea
      };
      this.listadetareas.anadirunaTarea(datostarea);
      this.nombre = "";
      this.descripcion = "";
    }
  };

  ngOnInit(): void {
  };

}
