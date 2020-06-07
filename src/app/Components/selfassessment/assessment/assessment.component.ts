import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';
import {GlobalService} from '../../../Services/global.service'
import {MentalHealthTestService} from '../../../Services/mental-health-test.service'
import {QuestionRequest} from "../../../Models/Test/question-request"
import { Option } from 'src/app/Models/Test/option';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor(private globalService: GlobalService, private testService:MentalHealthTestService) { }
  @Output() close = new EventEmitter<boolean>();
  @Input() testType: string;
  @Input() displayTitle: string;
  public displaymain: boolean= true;
  public displayQuestion: boolean=false;
  public displayResult: boolean=false;
  public hasQuestion : boolean=true
  public questionNumber:number 
  public question: string ;
  public options:Option[] 
  ngOnInit(): void {
    this.ShowMain()
  }
  OnClose(){
    this.close.emit(true);
  }
  StartTest(){
    this.globalService.setTestType(this.testType)
    this.globalService.setTestId(Guid.newGuid())
    this.questionNumber=1
    this.ShowQuestion()
    this.GetQuestion()
  }
  SubmitAndNextQuestion(){
    this.sumitAnswer()
    this.GetQuestion()
  }
  sumitAnswer(){
    //code to post answer
  }
  GetQuestion(){
    console.log(this.questionNumber)
    var request = new QuestionRequest(this.globalService.getTestType(),this.questionNumber)
    this.testService.GetQuestion(request).subscribe(
      response=>{
        if(response.question !=null){
          this.question=response.question
          this.options=response.options
        }
        else{
          this.hasQuestion=false;
        }
      }
    );
    this.questionNumber++;
  }
  EndTest(){
    this.ShowResult()
  }

  ShowMain(){
    this.displaymain=true
    this.displayResult=false
    this.displayQuestion=false
  }
  ShowQuestion(){
    this.displaymain=false
    this.displayResult=false
    this.displayQuestion=true
  }
  ShowResult(){
    this.displaymain=false
    this.displayResult=true
    this.displayQuestion=false
  }
}


class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}