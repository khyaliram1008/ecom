import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildernComponent } from './childern/childern.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:'childern',component:ChildernComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
