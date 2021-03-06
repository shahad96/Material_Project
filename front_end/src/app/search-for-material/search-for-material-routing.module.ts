import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchForMaterialComponent } from './search-for-material.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';

const routes:Routes =[
    {path: "materials", component: SearchForMaterialComponent},
    {path: "materials/details", component: DetailsComponent},
    {path: "materials/update", component: UpdateComponent}
    ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class SearchForMaterialRoutingModule { }