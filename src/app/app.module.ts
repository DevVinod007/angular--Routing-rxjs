import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthgaurdService } from './services/gaurds/Auth-gaurd.service';
import { DeactivateGaurdService } from './services/gaurds/deactivate-gaurd.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResolveService } from './services/resolve/user-resolve.service';
import { UserService } from './services/user.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    ShortenPipe,
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactFormComponent,
    FilterPipesComponent,
    FilterPipe,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthgaurdService,DeactivateGaurdService, UserResolveService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
