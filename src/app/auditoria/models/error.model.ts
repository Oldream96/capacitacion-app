export class ErrorLog{
    id:                  number;
    idtransaccion:       string;
    apimethod:           string;
    request:             string;
    response:            string;
    fecharegistro:       Date;
    mensaje:             string;
    nombreapi:           string;
    clase:               string;
    nombremetodo:        string;
    usuarioejecucion:    string;
}


export class ErrorLogList{
    logs:ErrorLog[];
    paginacion:{
        totalregistros: number;
        totalpagina:number;
    }
}

export class errorListaRequest{
    idtransaccion: number;
    fechainicio: string;
    fechafin: string;
    nombreapi: string;
    usuarioejecucion: string;
    numeropagina: number;
    registroporpagina: number;
}
