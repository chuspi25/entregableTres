import { IAlmacenamiento } from "./IAlmacenamiento.js";

export class IVinilo implements IAlmacenamiento {
  #nombre: string;
  #capacidad: number;
  #contenido: string;
  #tipo: string;
  

  constructor(nombre: string,capacidad: number,contenido: string,tipoDeDisco: string,) {
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#contenido = contenido;
        this.#tipo = tipoDeDisco;
    }
    get nombre(): string {
        return this.#nombre;
    }
    set nombre(nombre: string) {
        this.#nombre = nombre;
    }
    get capacidad(): number {
        return this.#capacidad;
    }
    set capacidad(capacidad: number) {
        this.#capacidad = capacidad;
    }
    get contenido(): string {
        return this.#contenido;
    }
    set contenido(contenido: string) {
        this.#contenido = contenido;
    }
    get tipo(): string {
        return this.#tipo;
    }
    set tipo(tipo: string) {
        this.#tipo = tipo;
    }
    girar(): void {
        console.log(`disco girando`)
    }   
    almacenar(datos: string): void {
        console.log(`almacenando ${datos} en el vinilo`)
    }
    leer(): void {
        console.log(`leyendo vinilo`)
    }
    escribir(): void {
        console.log(`escribiendo vinilo`)
    }
    reportar(): void {
        console.log(`nombre: ${this.#nombre}, capacidad: ${this.#capacidad}, contenido: ${this.#contenido}, tipo: ${this.#tipo}`)        
    }
}