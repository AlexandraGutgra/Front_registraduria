import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  getPartido(id: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  listar(): Observable<Partido[]> {
      return this.http.get<Partido[]>(`${environment.url_gateway}/partidos`);    
  }
  eliminar(id:string){
    return this.http.delete<Partido>(`${environment.url_gateway}/partidos/${id}`,);
  }
  getMesa(id: string): Observable<Partido> {
    return this.http.get<Partido>(`${environment.url_gateway}/partidos/${id}`);
  }
  crear(elPartido: Partido) {
    return this.http.post(`${environment.url_gateway}/partidos`, elPartido);
  }
  editar(id:string,elPartido: Partido) {
    return this.http.put(`${environment.url_gateway}/partidos/${id}`,elPartido);
  }
}