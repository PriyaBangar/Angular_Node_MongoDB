import{ Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';

export const appRoutes : Routes = [
    {
        path: 'signup',component: SignUpComponent,
        children:[{path:'',component: SignUpComponent}]
    },
    {
        path:'', redirectTo: '/signup', pathMatch: 'full'
    }
];