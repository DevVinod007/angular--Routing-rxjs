import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CategoriesComponent } from "./categories/categories.component"
import { EditUserComponent } from "./edit-user/edit-user.component"
import { HomeComponent } from "./home/home.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { ReactFormComponent } from "./react-form/react-form.component"
import { AuthgaurdService } from "./services/gaurds/Auth-gaurd.service"
import { DeactivateGaurdService } from "./services/gaurds/deactivate-gaurd.service"
import { UserResolveService } from "./services/resolve/user-resolve.service"
import { TemplateFormComponent } from "./template-form/template-form.component"
import { UserComponent } from "./user/user.component"
import { UsersComponent } from "./users/users.component"
import { FilterPipesComponent } from "./filter-pipes/filter-pipes.component"
import { PostsComponent } from "./posts/posts.component"

const appRoutes:Routes = [ 
  {path:'',component:HomeComponent,data:{page:1,search:'vinod'}},
  // {path:'users/1/vinod',component:UsersComponent},
  {
  path:'users',
  component:UsersComponent,
  canActivate:[AuthgaurdService],
  canActivateChild : [AuthgaurdService],
  children:[
    {path:':id/:name',component:UserComponent},
    {path:':id/:name/edit',component:EditUserComponent,
    canDeactivate:[DeactivateGaurdService],
     resolve : {user: UserResolveService}}
  ],
  },
  // {path:'users/:id/:name',component:UserComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'template',component:TemplateFormComponent},
  {path:'filterpipes',component:FilterPipesComponent},
  {path:'reactForm',component:ReactFormComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'posts',component:PostsComponent},
  {path:'**',redirectTo:'not-found'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule{



}