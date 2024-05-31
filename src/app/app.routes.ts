import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'register',
        component: SignupComponent
    },
    {
        path:'home',
        component: ProfileComponent,
    }


];


