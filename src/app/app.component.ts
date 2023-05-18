import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  showWarning: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subscription: ['advanced'],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    if (this.myForm.invalid) {
      this.showWarning = true;
      return;
    }

    console.log(this.myForm.value);
    // You can also perform further actions with the form data.
  }
}
