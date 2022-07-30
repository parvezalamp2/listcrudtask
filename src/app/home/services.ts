import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Sheet } from "./excel";
@Injectable({
    providedIn:'root'
})

export class Services {

    constructor(private http: HttpClient){}

    get(){
        return this.http.get<Sheet[]>("https://my-json-server.typicode.com/parvezalamp2/jsonserver/sheets")
    }

    create(payload: Sheet): Observable<Sheet>{
        return this.http.post<Sheet>("https://my-json-server.typicode.com/parvezalamp2/jsonserver/db", payload);
        }

    getById(id:number){
        return this.http.get<Sheet>(`https://my-json-server.typicode.com/parvezalamp2/jsonserver/db/${id}`);
    }

    update(payload:Sheet){
        return this.http.put<Sheet>(`https://my-json-server.typicode.com/parvezalamp2/jsonserver/db/${payload.id}`, payload);
    } 
    
    delete(id:number){
        return this.http.delete<Sheet>(`https://my-json-server.typicode.com/parvezalamp2/jsonserver/db/${id}`);
    }
}
