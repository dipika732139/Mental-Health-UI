import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() recommendations:string[]
@Input() score:number
@Input() description : string
@Input() summary:string
  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
