import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectoTareasService {
  listadetareas = new Array();
  nombre= "";
  descripcion= "";
  prioridad= "";
  estadotarea= false;

  constructor() { }

  anadirunaTarea(tareaintroducida:any){
    this["listadetareas"].push(tareaintroducida);
    console.log(this.listadetareas)
    this.ordenarPrioridad();
  }

  tareaCompletada(index:any){
    this['listadetareas'][index].estadotarea = true;
    localStorage['listadetareas']=JSON.stringify(this['listadetareas']);
  };

  borrartarea(index:any){
    this['listadetareas'].splice(index, 1);
    localStorage['listadetareas']=JSON.stringify(this['listadetareas']);
  };

  borrarCompletadas(){
    this['listadetareas'] = JSON.parse(localStorage['listadetareas']);
    let com= new Array();
    this['listadetareas'].forEach((tarea) => {
        if(!tarea.estadotarea){
            com.push(tarea);
        }
    });
    this['listadetareas'] = com;
    localStorage['listadetareas']=JSON.stringify(this['listadetareas']);
  };

  mostrarCompletadas() { // Muestra solo las tareas completadas
    this['listadetareas'] = JSON.parse(localStorage['listadetareas']);
    let com = new Array();
    this['listadetareas'].forEach((tarea) => {
        if (tarea.estadotarea) {
            com.push(tarea);
        }
        this['listadetareas'] = com;
    });
  };

  mostrarNoCompletadas() { // Muestra solo las tareas no completadas
    this['listadetareas'] = JSON.parse(localStorage['listadetareas']);
    let nocom = new Array();
    this['listadetareas'].forEach(tarea => {
        if (!tarea.estadotarea) {
            nocom.push(tarea);
        }
        this['listadetareas'] = nocom;
    });
  };

  mostrarTodas() { // Muestra todas las tareas
    this['listadetareas'] = JSON.parse(localStorage['listadetareas']);
  };

  aumentarlaPrioridad(index:any){ // Máxima prioridad es 1
      if (this['listadetareas'][index].prioridad > 1) {
        this['listadetareas'][index].prioridad--;
        this.ordenarPrioridad();
        localStorage['listadetareas']=JSON.stringify(this['listadetareas']);
    }
  };

  disminuirlaPrioridad(index:any){ // Mínima prioridad es 3
      if (this['listadetareas'][index].prioridad < 3) {
        this['listadetareas'][index].prioridad++;
        this.ordenarPrioridad();
        localStorage['listadetareas']=JSON.stringify(this['listadetareas']);
    }
  };

  ordenarPrioridad() {
    this['listadetareas'] = this['listadetareas'].sort((a, b) => {
        if (a.prioridad < b.prioridad) {
            return -1;
        } else if (a.prioridad > b.prioridad) {
            return 1;
        } else {
            return 0;
        }
    });
    localStorage['listadetareas']=JSON.stringify(this['listadetareas']);
  }
  nocompletadas(){
    let numincompletas = this.listadetareas.filter((tarea) => !tarea.estadotarea).length;
    return numincompletas;
  }

}
