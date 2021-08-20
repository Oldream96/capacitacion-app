export class PerfilResponse{
        id: number;
        nombre: string;
        descripcion: string;
        empresa: Empresa;
        ambitosAsignados: any[];
        aplicacionesAsignadas: any[];
        estado: EstadoPerfil;
}

export class Empresa{
    id: number;
    nombre: string;
}

export class EstadoPerfil{
    id: number;
    descripcion: string;
}