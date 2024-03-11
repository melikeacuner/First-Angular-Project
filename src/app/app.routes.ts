import { Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path:"Features", component : SecondComponent},
    {path:"Home", component: FirstComponent},
    {path:"", component: MainComponent }

];
