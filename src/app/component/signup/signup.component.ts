import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styles: ``
})


export class SignupComponent {
  hide = true;
  registrationForm: FormGroup;


  constructor(private fb: FormBuilder, private apiService: ApiService, private routes: Router) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      city: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onRegister() {
    try {
      if (this.registrationForm.valid) {
        const formData = this.registrationForm.value;
        const response = await this.apiService.register(formData).toPromise();
        console.log('Registration successful!', response);
        alert('Registration successful!'+ response)
        // Handle success, like showing a success message or redirecting
        this.registrationForm.reset();
        this.routes.navigate(['/']);
      } else {
        console.log('Form is invalid!');
      }
    } catch (error) {
      console.error('Registration failed!', error);
      alert('Registration failed!' + error);
      // Handle error, like showing an error message to the user
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
