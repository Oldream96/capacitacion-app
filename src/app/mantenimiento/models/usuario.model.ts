export class UsuarioResponse{
    id: number;
    idPersona: number;
    nombre: string;
    login: string;
    email: string;
    esAd: number;
    fechaUltimaSesion: Date;
    estado: EstadoUsuario;
    perfil: PerfilUsuario;
}


export class EstadoUsuario{
    id: number;
    descripcion:string;
}

export class PerfilUsuario{
    id:number;
    nombre:string;
}

export class UsuarioResponseList{
    usuarios:UsuarioResponse[];
    paginacion:{
        totalregistros: number;
        totalpagina:number;
    }
}

export class UsuarioRequest{

    idPersona: number;
    nombre: string;
    login: string;
    email: string;
    esAd: number;
    clave: string;
    estado: {
      id: number;
    };
    cambioContrasenia: boolean;
  
}