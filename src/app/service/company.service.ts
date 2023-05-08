import { Injectable } from '@angular/core';
import {Company} from '../models/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companys: Company[];
  constructor() { this.companys = []; }

  getCompany() {
    if (localStorage.getItem('companys') !== null) {
      this.companys = JSON.parse(localStorage.getItem('companys')!);
      
    }
    return this.companys;
  }
  addCompany(company:Company) {
    let companys: Company[] = [];
    const storedCompany = localStorage.getItem('companys');
    if (storedCompany !== null) {
      const parsedTasks = JSON.parse(storedCompany);
      if (Array.isArray(parsedTasks)) {
        companys = parsedTasks;
      }
    }
    companys.push(company);
    localStorage.setItem('companys', JSON.stringify(companys));
  }
  updateCompany(company:Company) {
    if(this.getCompany()){
      const data = this.getCompany();
       // Actualizar los datos que deseas modificar
  const updatedTasks = data.map(newCompany => {
    if (newCompany.id === company.id) {     
      // Actualizar los valores de la tarea
      newCompany.Name = company.Name;
      newCompany.Nit = company.Nit;
      newCompany.Adress = company.Adress;
      newCompany.date = company.date;
        
    } 
  ;
    return newCompany;  
  });
  localStorage.setItem('companys', JSON.stringify(updatedTasks));     
    } else {
    console.log('aqui no llegan');
    }
  }
  deleteCompany(company:Company) {
    for (let i = 0; i < this.companys.length; i++) {
      if (company !== this.companys[i]) {
        this.companys.splice(i, 1);
        localStorage.setItem('companys', JSON.stringify(this.companys));
        location.reload();
      }
    }
  }
}
