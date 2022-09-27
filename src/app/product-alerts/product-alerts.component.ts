import { 
  Component, 
  OnInit, 
<<<<<<< HEAD
  Input, 
  Output, 
  EventEmitter 
=======
  Input,
  Output,
  EventEmitter
>>>>>>> 35e4e092afd0217305698c8cb22c0b7b910ec7af
} from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

}
=======
  @Input() product!:Product;
  @Output() notify = new EventEmitter();

}
>>>>>>> 35e4e092afd0217305698c8cb22c0b7b910ec7af
