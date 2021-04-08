import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';


const routes: Routes = [

  {path:'uno',component:UnoComponent},
  {path:'dos',component:DosComponent},
  {path:'dos/:nombre',component:DosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
