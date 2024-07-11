export default class Cl_mayorE {
    constructor() {
        this.contadorpersonas = 0;
        this.contadorpersonasmayores = 0;
    }
    procesarpersonas(personas) {
        this.contadorpersonas++;
        if (p.edad > 18) {
            this.contadorpersonasmayores++;
        }
    }
    porcentajemayoresE() {
        return (this.contadorpersonasmayores / this.contadorpersonas)*100;
   }
}