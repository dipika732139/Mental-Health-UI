import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';

import { BlogsComponent } from './Components/blogs/blogs.component';
import { MusicComponent } from './Components/music/music.component';
import { VideosComponent } from './Components/videos/videos.component';
import { MemesComponent } from './Components/memes/memes.component';
import { SelfassessmentComponent } from './Components/selfassessment/selfassessment.component';
import { OppurtunitiesComponent } from './Components/oppurtunities/oppurtunities.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactusComponent } from './HelperPages/contactus/contactus.component';
import { AboutComponent } from './HelperPages/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { StressmgmtComponent } from './Components/stressmgmt/stressmgmt.component';
import { PagenotfoundComponent } from './ErrorHandlers/pagenotfound/pagenotfound.component';
import {LoginSignupComponent} from './Components/login-signup/login-signup.component'
import {ProfileComponent} from './Components/profile/profile.component'
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginSignupComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'blogs', component: BlogsComponent, canActivate: [AuthGuard]},
  { path: 'memes', component: MemesComponent, canActivate: [AuthGuard]},
  { path: 'music', component: MusicComponent, canActivate: [AuthGuard]},
  { path: 'videos', component: VideosComponent, canActivate: [AuthGuard]},
  { path: 'oppurtunities', component: OppurtunitiesComponent, canActivate: [AuthGuard]},
  { path: 'selfassessment', component: SelfassessmentComponent, canActivate: [AuthGuard]},
  { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard]},
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: AboutComponent},
  {path : 'stressmgmt', component : StressmgmtComponent, canActivate: [AuthGuard]},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }