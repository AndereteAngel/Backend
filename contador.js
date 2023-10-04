
class Contador {
    constructor(responsable) {
        this.responsable = responsable;
        this.cuentaIndividual = 0;
        Contador.cuentaGlobal = 0;
    }

    contar() {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }

    getCuentaIndividual() {
        return this.cuentaIndividual;
    }

    static getCuentaGlobal() {
        return Contador.cuentaGlobal;
    }

    pruebaDeIndividualidad(otroContador) {
        return this.responsable !== otroContador.getResponsable();
    }

    getResponsable() {
        return this.responsable;
    }
}

const contador1 = new Contador("Angel");
const contador2 = new Contador("Macarena");

contador1.contar();
contador1.contar();
contador2.contar();

console.log(contador1.getResponsable() + ": " + contador1.getCuentaIndividual()); // Juan: 2
console.log(contador2.getResponsable() + ": " + contador2.getCuentaIndividual()); // María: 1
console.log("Cuenta Global: " + Contador.getCuentaGlobal()); // Cuenta Global: 3


console.log(contador1.pruebaDeIndividualidad(contador2)); 