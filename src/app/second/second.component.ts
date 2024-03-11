import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule,NgIf,FormsModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  jobs: string[] = [];

  newJob: string = '';

  addJob(value: string) {
    if (value !== "") {
      this.jobs.push(value);
      this.newJob = '';
    }
  }

  removeJob(job: string) {
    for (let i = 0; i < this.jobs.length; i++) {
      if (job === this.jobs[i]) {
        this.jobs.splice(i, 1);
        break; 
      }
    }
  }
}
