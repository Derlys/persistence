import { ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LayaoutComponent } from './ui/layout/layout.component';
import { ContactameComponent } from './pages/contactame/contactame.component';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: '',
    title: 'Perseverance',
    component: LayaoutComponent,
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'contactame', component: ContactameComponent },
    ],
  },
];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

