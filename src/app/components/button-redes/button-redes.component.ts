import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-redes',
  templateUrl: './button-redes.component.html',
  styleUrls: ['./button-redes.component.css']
})
export class ButtonRedesComponent {
  @Input() linkUrl : string = "";
  @Input() title : string = "";
  @Input() image : string = "";

}
