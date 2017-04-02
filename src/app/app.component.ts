import { Component } from '@angular/core';

interface OverwatchCharacter {
  name: 'Dva' | 'Soldier76' | 'Winston' | 'Reaper' | 'Lucio' | 'Mercy';
  reasons: string[];
  preference: number;
  image?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: OverwatchCharacter[] = [
    {
      name: 'Dva',
      preference: 1,
      reasons: [
        'I like to play D.Va, she is my main, because I am good at playing as her.',
        'She is a stellar tank, due to her defence matrix.',
        'D.Va\'s ultimate is good at clearing the objective',
        'Her mechless form is also quite effective'
      ],
      image: 'https://blzgdapipro-a.akamaihd.net/hero/dva/hero-select-portrait.png',
    },
    {
      name: 'Soldier76',
      preference: 2,
      reasons: [
        'I also like to play Soldier 76, he is my main attack character.',
        'He is simple to play, but hard to master.',
        'He is an all-around character, his heal makes him a team player.',
        'His ultimate is very effective at clearing the objective'

      ],
      image:'https://blzgdapipro-a.akamaihd.net/hero/soldier-76/hero-select-portrait.png',
    },
    {
      name: 'Winston',
      preference: 3,
      reasons: [
        'I like to play Winston, he is a very effective tank due to his shield.',
        'He is also a very moblie character,due to his jump, he can bypass defences and jump to the point',
        'He is not my main tank, as I prefer D.Va',
      ],
      image:'https://blzgdapipro-a.akamaihd.net/hero/winston/hero-select-portrait.png',
   },
    {
      name: 'Reaper',
      preference: 4,
      reasons: [
        'Reaper is an effective character up close, able to kill tanks extremely quick',
        'His teleport allows him to traverse vast distances in split second',
        'This allows him to be in the right place at the right time to win a match',
        'His wraith form makes him able to escape from sticky stiuations taking little damage',
      ],
      image:'https://blzgdapipro-a.akamaihd.net/hero/reaper/hero-select-portrait.png', 
  },
    {
      name: 'Lucio',
      preference: 5,
      reasons: [
        'Lucio is a good healer, due to his abillity to heal his whole team at once',
        'Lucio does not skimp on offencive capabillities',
        'His push can clear the objective if used well',
        'His ultimate abillity is a game winner giving his team the massive health boost to win',
      ],
      image:'https://blzgdapipro-a.akamaihd.net/hero/lucio/hero-select-portrait.png',
    },
    {
      name: 'Mercy',
      preference: 6,
      reasons: [
        'Mercy is a good healer, to her concentraited heals on one character',
        'She is also very good being an offencive character due to her damage boost',
        'Her gun is also very similar to D.Va\'s out of mech side arm',
        'Her abillity to fly to her teammates allows her to travel across map easily',
        'Her ultimate can make or break a match',
      ],
      image:'https://blzgdapipro-a.akamaihd.net/hero/mercy/hero-select-portrait.png',


    },
  ];
}
