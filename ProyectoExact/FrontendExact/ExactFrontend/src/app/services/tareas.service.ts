import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable, Subject} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Tareas } from '../models/tareas';
const base_url=environment.base;
@Injectable({
  providedIn: 'root'

})
export class TareasService {
  
  private url=`${base_url}/tareas`;
  private listaCambio=new Subject<Tareas[]>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tareas[]>(this.url);
  }

  insert(tar:Tareas){
    return this.http.post(this.url,tar);
  }

  setList(listaNueva:Tareas[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }
  listId(id: number){
    return this.http.get<Tareas>(`${this.url}/${id}`);
  }
  update(tar: Tareas) {
    return this.http.put(`${this.url}/${tar.id}`, tar);
  }
    
}
