import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
   
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
   
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
    this.formSubmitAttempt = true;
  }
  
}
