import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
     <div class="header">
      <ul class="ul">
        <li><a class="ex2">Profile App</a></li>
        @if(!isLoggedIn()){
          <li><a routerLink="/" class="btn-primary ex1" role="button">Login</a></li>
          <li><a routerLink="/register" class="btn-primary ex1" role="button">Register/Sign</a></li>
        }
        @if (isLoggedIn()) {
        <li ><a class="btn-primary ex1" role="button" (click)="logout()">Logout</a></li>
        }
      </ul>
    </div>
  `,
  styles: `
  .header{
    padding: 20px 10px 10px 20px;
    text-align: center;
    background-color: rgb(240, 240, 240); 

  }
  .ul{
  display: flex;
  list-style-type: none;
  padding: 10px;
  }
  .ex2 {
    padding: 0 10px;
      text-decoration: none;
      font-size: 130%;
      color: black;
      display: inline-block; 
    }
  .ex1{
    padding: 0 10px;
    text-decoration: none;
    font-size: 130%;
    color:black;
    display: inline-block;
  }
  @media screen and (min-width: 768px) {
  .ex2,
  .ex1 {
    font-size: 130%; /* Increase font size for larger screens */
  }
}
  a.ex1:hover, a.ex1:active{
    font-size: 150%;
    color: green;
  }

  `
})
export class HeaderComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    this.router.navigateByUrl('/');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
