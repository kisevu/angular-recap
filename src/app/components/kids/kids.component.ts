import { Component, input} from '@angular/core';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss'
})
export class KidsComponent {
  message = input('Default message'); //acceptance
}
