export interface IAlmacenamiento {
    girar(): void;
    almacenar(datos:string): void;
    leer(): void;
    escribir(): void;
    reportar(): void;
}
