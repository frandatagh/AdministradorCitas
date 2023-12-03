class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    // .map va a editar un elemento y nos retorna un nuevo arreglo que se asigna a citas
    editarCita(citaActualiza) {
        this.citas = this.citas.map( cita => cita.id === citaActualiza.id ? citaActualiza : cita);
    }


    // .filter va a quitar un elemento en base a una condición
    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }

    
}

export default Citas;