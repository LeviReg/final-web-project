import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.css']
})
export class PopupInfoComponent implements OnInit {
ngOnInit() {
    $('.ui.modal')
  .modal('show')
;
  }

}
