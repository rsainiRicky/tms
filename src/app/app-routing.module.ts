import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tickets',
    loadChildren: 'app/modules/tickets/tickets.module#TicketsModule'
  },
  {
    path: 'reports',
    loadChildren: 'app/modules/reports/reports.module#ReportsModule'
  },
  {
    path:'admin',
    loadChildren: 'app/modules/admin/admin.module/#AdminModule'
  },
  {
    path:'assets',
    loadChildren: 'app/modules/assets/assets.module/#AssetsModule'
  },
  {
    path:'knowledgebase',
    loadChildren: 'app/modules/kms/kms.module/#KmsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
