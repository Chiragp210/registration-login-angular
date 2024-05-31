import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styles: ``,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit{
  profile: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProfile().subscribe(
      (response: any) => {
        this.profile = response.user;
        console.log('Profile data:', this.profile);
      },
      (error) => {
        console.error('Error fetching profile:', error);
        // Optionally, handle the error (e.g., display an error message)
      }
      
    );
  }
}
