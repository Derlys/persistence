import { Routes } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { LayaoutComponent } from './ui/layaout/layaout.component';

export const routes: Routes = [
    {path:'', pathMatch: 'full', redirectTo: 'home'},
    
    {path: '', component: LayaoutComponent, children:[

        {path: 'header', component: HeaderComponent},
    ]},

    
    

    
];
