import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 //showing sections booleans
 public div1: boolean= true;
 public music :boolean=false;

 //showing sections transitions booleans
 public transition5show: boolean= false;

#region 
     showMusicTransition(): void {
     this.div1=false;
     this.transition5show=true; 
   }
   showMusic(): void {
     this.transition5show=false;
     this.music=true;
   }

}
