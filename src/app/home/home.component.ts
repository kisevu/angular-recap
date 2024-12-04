import { Component,signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = signal('Kevin Ameda Kisevu');
  message = signal('Ola! Gracious');


  keyUpHandler(event: KeyboardEvent){
    console.log(`User pressed the ${event.key} key`);
  }

}
