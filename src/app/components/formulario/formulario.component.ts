import { Component } from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../../service/company.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  isEdit: boolean = false;
  id = '';
  name = '';
  nit = '';
  adress = '';
  date: string | Date = '';
  company : Company | undefined = {id: '', Adress: '', Nit:'', Name: '', date: ''} ;

  constructor(public CompanyServie:CompanyService, private route: ActivatedRoute ) {
    if(this.route.snapshot.paramMap.get('id')) { 
      
      this.isEdit = true   
    
   } 
     this.id = this.route.snapshot.paramMap.get('id')!;
     this.CompanyServie.getCompany(); 
    
     this.company = this.CompanyServie.companys.find(t => t.id == this.id ) 
     this.name = this.company?.Name!
     this.nit = this.company?.Nit!
     this.adress = this.company?.Adress!
     this.date = new Date(this.company?.date!)
  }
  addCompany(newId:HTMLInputElement,newName:HTMLInputElement,newNit:HTMLInputElement,newAdress:HTMLInputElement,newDate:HTMLInputElement) {
    // console.log('se agrego',newId.value,newName.value,newNit.value,newAdress.value,newDate.value );
     this.CompanyServie.addCompany({
       id:newId.value,
       Name: newName.value,
       Nit: newNit.value,
       Adress: newAdress.value,
       date: newDate.value
       
     });
     newId.value='';
     newName.value='';
     newNit.value='';
     newAdress.value='';
     newDate.value='';
     alert('Registro completado');
     return false
   }
   updateCompany (newId:HTMLInputElement,newName:HTMLInputElement,newNit:HTMLInputElement,newAdress:HTMLInputElement,newDate:HTMLInputElement) {
    this.CompanyServie.updateCompany({
      id: newId.value,
      Name: newName.value ,
      Nit: newNit.value,
      Adress: newAdress.value,
      date: newDate.value
      
    });
    alert('datos actualizados completado');
  }
}
