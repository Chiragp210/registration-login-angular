import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl , FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule,CommonModule, MatButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styles: ``
})


export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.apiService.login(credentials).subscribe(
        (response: any) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            console.log('Login successful!');
            alert('Login successful!')
            // Redirect to profile or other page after successful login
            this.router.navigate(['/home']); // Replace with your desired route
          } else {
            console.error('Login failed:', response.message || 'Invalid credentials');
            // Display an error message to the user (e.g., using a toast notification)
            alert('Login failed! ' + (response.message || 'Invalid credentials'));
          }
        },
        (error) => {
          console.error('Login error:', error);
          // Handle general login errors
          alert('Login error! Please try again later.');
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }
  
}