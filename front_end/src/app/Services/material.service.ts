import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class MaterialService{

    constructor(private http: HttpClient,){}

    AddMaterial(form:FormGroup){
        this.http.post('http://localhost:8080/material/post',form.value).subscribe();
    }

    GetAllMaterials(){
       return this.http.get<any>('http://localhost:8080/material/all-materials');
    }

    searchForMaterial(key:string){
        return this.http.get<any>(`http://localhost:8080/material/search/${key}`);
    }

    deleteMaterial(id:number){
        this.http.delete(`http://localhost:8080/material/delete/${id}`).subscribe();
    }
    
}