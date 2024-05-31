import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LoginComponent,SignupComponent,ProfileComponent,FooterComponent,HttpClientModule],
  templateUrl: './app.component.html',
  providers:[ApiService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'register-login';
}
