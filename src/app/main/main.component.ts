import { Component } from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  userName: string = '';
  inputText : string = '';
  greetingVisible: boolean = false;

  onSubmit() {
    this.greetingVisible = true;
    this.userName = this.inputText
  }
}
