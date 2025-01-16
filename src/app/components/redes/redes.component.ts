import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  @Input() image: string =  "";
  @Input() linkUrl: string =  "";

}
