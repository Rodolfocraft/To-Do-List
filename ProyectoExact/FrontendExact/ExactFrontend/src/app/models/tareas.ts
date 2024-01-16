export class Tareas{
    id:number = 0;
    titulo:string = '';
    fechafin:Date=new Date(Date.now());
    seleccionado?: boolean;
    estado: string = 'en proceso';
}