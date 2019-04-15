import { Component, OnInit, NgModule, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  @Input('data') dataInside: string;
  constructor(private fb: FormBuilder) { 
  }
tryvalid: boolean;
  ngOnInit() {
  }
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit(){
if (this.profileForm.controls.firstName.status === 'INVALID'){
  this.tryvalid = true;
} else {this.tryvalid = false};
console.log(this.profileForm);
    console.log(this.dataInside);
  }
}

