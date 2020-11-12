import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.component.html',
  styleUrls: ['./register-step3.component.css']
})
export class RegisterStep3Component {

  constructor(public authService: AuthService, private router: Router) { }

  @Input() regForm: FormGroup;
  @Input() persDetails;
  @Input() petsDetails;
  formSubmitted: boolean = false;


  submit(){
    this.authService.createUser(this.regForm.get('personalDetails').get('firstname').value,
    this.regForm.get('personalDetails').get('lastname').value,
    this.regForm.get('personalDetails').get('username').value,
    this.regForm.get('personalDetails').get('password').value)
  }
  // submit(): void{
  //   /*console.log('submitted');
  //   console.log(this.regForm.value);*/
  //   this.formSubmitted = true;
  //   let _this=this;

  //   this.service.createUser(this.regForm).subscribe({
  //     next:x=>{
  //       console.log(x);
  //       _this.router.navigateByUrl('/afterlogin');
  //     },
  //     error:error=>{
  //       _this.regForm.hasError(error);   
  //     }   
  //   });
  // }
}
