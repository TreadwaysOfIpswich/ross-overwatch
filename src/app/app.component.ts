import { Component } from '@angular/core';

interface OverwatchCharacter {
  name: 'dva' | 'soldier76' | 'winston' | 'reaper' | 'lucio' | 'mercy';
  reasons: string[];
  preference: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: OverwatchCharacter[] = [
    {
      name: 'dva',
      preference: 1,
      reasons: [
        'I like to play D.Va, she is my main, because I am good at playing as her.',
        'She is a stellar tank, due to her defence matrix.',
        'D.Va\'s ultimate is good at clearing the objective',
        'Her mechless form is also quite effective'
      ],
    },
  ];
}
