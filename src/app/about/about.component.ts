import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutContent = [
    "I am passionate Full-stack developer with experience in building responsive websites with a knack for problem solving. I thrive in fast-paced environments and enjoy working on projects that push me to grow and learn continuously.",
    "I am a recent Computer Science gradute from ASU, Go Sundevils! I have built cloud-native apps using AWS, worked on LLM bots, researched at ISRO and built intuitive UIs.",
    "Apart from that, I like to spend most of my time with competitive programming, problem-solving and experimenting with ML models."
  ]
}
