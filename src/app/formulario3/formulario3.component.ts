import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);

}
