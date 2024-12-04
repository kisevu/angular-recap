import { Component, signal } from '@angular/core';
import { KidsComponent } from "../components/kids/kids.component";

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [KidsComponent],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss'
})
export class FamilyComponent {

  message = signal(`Dear God, bless my children and let them be your vessel of truth.
    Let their hearts not think nor do evil. Let them be guided through your power.and
    Nourish them through the gifts of the Holy Spirit. Let them be disease free, give them wisdom.
    Thank you for the blessings you have accorded me of having them, use me to pass correct leadership and
    instill blessings upon them. Let them be sharp and be leaders. As you have blessed them through me and
    revived an entire generation of Ameda, I am praying that the same spirit be dwelled upon us. May we never lack, may we
    have enough even to bless those around us. Let that home be revived through us and we will continue glorifying and testifying
    your goodness. Thank you Jesus, Amen.`);

}
