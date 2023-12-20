import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'kelly';
  public nameUpper: string = 'KELLY';
  public fullName: string = 'kElLy SuArEz';

  public customDate: Date = new Date();
}
