import { IAlmacenamiento } from "./IAlmacenamiento.js";

export class IDiscoDuro implements IAlmacenamiento {
    #nombre: string;
    #capacidad: number;
    #velocidad: number;
    #tipo: string;  
    #contenido: string;

    constructor (nombre: string, capacidad: number, velocidad: number, tipo: string, contenido: string) {
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#velocidad = velocidad;
        this.#tipo = tipo;
        this.#contenido = contenido;
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
    get velocidad(): number {
        return this.#velocidad;
    }
    set velocidad(velocidad: number) {
        this.#velocidad = velocidad;
    }
    get tipo(): string {
        return this.#tipo;
    }
    set tipo(tipo: string) {
        this.#tipo = tipo;
    }
    get contenido(): string {
        return this.#contenido;
    }
    set contenido(contenido: string) {
        this.#contenido = contenido;
    }
    girar(): void {
        console.log(`disco girando`)        
    }
    almacenar(datos: string): void {
        console.log(`almacenando ${datos} en el disco duro`)        
    }
    leer(): void {
        console.log(`leyendo disco duro`)        
    }
    escribir(): void {
        console.log(`escribiendo disco duro`)        
    }
    reportar(): void {
        console.log(`nombre: ${this.#nombre}, capacidad: ${this.#capacidad}, velocidad: ${this.#velocidad}, tipo: ${this.#tipo}, contenido: ${this.#contenido}`)        
    }
    




}