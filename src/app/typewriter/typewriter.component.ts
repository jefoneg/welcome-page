import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  textToAnimate = 'We are a digital agency that helps brands to achieve their business outcomes.';
  animatedText = '';

  constructor() { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    const loopAnimation = () => {
      for (let i = 0; i < this.textToAnimate.length; i++) {
        setTimeout(() => {
          this.animatedText += this.textToAnimate[i];
        }, 100 * i); // Adjust the timeout as needed
      }
  
      // Clear the animation and start over after completing the loop
      setTimeout(() => {
        this.animatedText = '';
        loopAnimation();
      }, 100 * this.textToAnimate.length);
    };
  
    // Start the initial animation loop
    loopAnimation();
  }
}
