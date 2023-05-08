import { Component , Input} from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/service/company.service';

let companys: Company[] = [];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() company: Company = { id: '', Name: '', Nit: '', Adress: '', date: '', }; 
  longText = this.companyService.companys.length;
  constructor(public companyService: CompanyService) {}
}
