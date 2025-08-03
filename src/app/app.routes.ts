import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';

export const routes: Routes = [
    {
         path:'admin',
         component:Admin
    },
    {
         path:'control-flow-statement',
         component:ControlFlow
    },
    {
         path:'data-binding',
         component:DataBinding
    },
    {
         path:'signal',
         component:DataBinding
    }
];
