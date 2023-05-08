import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/service/company.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
let companys: Company[] = [];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() company: Company = { id: '', Name: '', Nit: '', Adress: '', date: '', }; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns = ['id', 'Name', 'Nit', 'Adress', 'date', 'acciones'];
  dataSource = new MatTableDataSource(companys);
  data = this.dataSource;

  constructor(
    private _Activatedroute: ActivatedRoute,
    public companyService: CompanyService,
    private _dialog: MatDialog,
    private router: Router
  ) {}
  
  navigateToDetails(id:string) {
    //const data = this.task;
    //const id = data[0];
    alert(id)
     // Operador de encadenamiento opcional
    if (id ) {
      this.router.navigate([`/form/${id}`]); // Aserción de no nulidad
    } else {
      console.error('El objeto data es nulo o no tiene la propiedad id');
    }

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() { 
    companys = this.companyService.getCompany();
    console.log(companys)
    this.dataSource = new MatTableDataSource<Company>(companys)
  }
  addTask(company: Company) {
   
    console.log('test',this.companyService);
    this.companyService.addCompany(company, );
  }
  deleteTask(company: Company) {
    if(confirm('Esta seguro que desea eliminar el dato')) {
      
      this.companyService.deleteCompany(company);
      console.log(this.companyService.deleteCompany);
    }
  }
}
