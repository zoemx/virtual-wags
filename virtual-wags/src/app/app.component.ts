import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    let frame = 0;
    const totalFrames = 4; // Adjust this to match your sprite sheet
    const frameWidth = 32; // Width of each sprite frame in pixels
    const el = document.querySelector('#creature') as HTMLElement;

    if (el) {
      setInterval(() => {
        frame = (frame + 1) % totalFrames;
        el.style.backgroundPosition = `${-frame * frameWidth}px 0`;
      }, 200); // Frame switch every 200ms
    }
  }
}