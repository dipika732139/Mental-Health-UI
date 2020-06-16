import { Component, OnInit } from '@angular/core';
import { GlobalService} from './../../Services/global.service'
import {LoginSignupService} from './../../Services/login-signup.service'
import {LoginRequest} from './../../Models/Registration/login-request'
import {SignUpRequest} from './../../Models/Registration/sign-up-request'
import {Router}  from '@angular/router'
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private globalService : GlobalService, private loginSignUpService : LoginSignupService, private router:Router) { }
  isBannerDisplayed : boolean
  bannerMessage : string
  isLoggedIn : boolean
  displayLogin : boolean
  //for login
  userId : string 
  password : string
  //for signUp
  emailId : string
  name:string
  age : number
  gender : string
  phoneNumber : number
  country : string
  pincode : number
  connectWithOthers : boolean
  ngOnInit(): void {
    this.isLoggedIn=this.globalService.isLoggedIn()
    this.displayLogin = true
    this.cleanPlaceHolders()
  }
  toggleDisplayLogin(){
    this.displayLogin=!this.displayLogin
    this.cleanPlaceHolders()
  }
  login(){
    this.loginSignUpService.Login(new LoginRequest(this.userId,this.password)).subscribe(
      response=>{
        if(response.isLoggedInSuccessfully){
          this.globalService.logIn(this.userId)
          this.isLoggedIn=this.globalService.isLoggedIn()
          this.cleanPlaceHolders()
        }
        else
          this.displayBanner("Login failed")
        setTimeout(() => {  this.cleanPlaceHolders() }, 2000);  
      },
      err=>{
        this.displayBanner(err)
        setTimeout(() => {  this.cleanPlaceHolders() }, 2000);        
      }
    )
  }
  displayBanner(msg : string){
    this.bannerMessage=msg
    this.isBannerDisplayed=true    
  }
  cleanPlaceHolders(){
    this.password=""
    this.userId=""
    this.emailId=""
    this.name=""
    this.age=0
    this.gender=""
    this.phoneNumber=0
    this.country=""
    this.pincode=0
    this.connectWithOthers=false
    this.bannerMessage=""
    this.isBannerDisplayed=false
  }
  signUp(){
    this.loginSignUpService.SignUp(new SignUpRequest(this.emailId,this.name,this.age,this.gender,this.phoneNumber,this.country,this.pincode,this.password,this.connectWithOthers))
        .subscribe(
          response=>{
            this.globalService.logIn(response.userID)
            this.isLoggedIn=this.globalService.isLoggedIn()
            this.displayBanner('Your userID is  '+response.userID)
            setTimeout(() => {  this.cleanPlaceHolders() }, 3000);  
            
          },
          err=>{
            this.displayBanner(err)
            setTimeout(() => {  this.isBannerDisplayed=false }, 3000);  
          }
        )
  }
  logOut(){
    this.cleanPlaceHolders()
    this.globalService.logOut()
    this.isLoggedIn=this.globalService.isLoggedIn()
    this.displayLogin = true
  }
}
