import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './home/add/add.component';
import { EditComponent } from './home/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { SheetComponent } from './home/sheet/sheet.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'add',
    component: AddComponent,
  },
  {
    path:'edit/:id',
    component: EditComponent,
  },
  {
    path:'view/:id',
    component: SheetComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
