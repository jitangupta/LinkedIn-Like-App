import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      searchTerm: ['', Validators.required],
    });
  }

  redirect() {
    const searchTerm = this.form.controls["searchTerm"] as FormControl;
    this.router.navigate(['search'], {
      queryParams: { term: searchTerm.value },
    });
  }
}
