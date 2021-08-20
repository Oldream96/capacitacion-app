export class AplicacionResponse{
    id: number;
    nombre: string;
    descripcion: string;
    esLanzador: true;
    esAppLanzamiento: true;
    nombreHost: string;
    dominio: string;
    url: string;
    ipAddress: string;
    key: string;
    code: string;
    browserDefault: string;
    versionBrowserDefault: string;
    version: string;
    imagen: string;
    identificadorMovil: string;
    esAppInterno: true;
    tipoAplicacion: TipoAplicacion;
    estado: EstadoAplicacion;
    visibleEnD4: boolean;
    esMesaServicio: boolean;
}


export class TipoAplicacion{
    id:     number;
    nombre: string;
}

export class EstadoAplicacion{
    id: number;
    descripcion: string;
}