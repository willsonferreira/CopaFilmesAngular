import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  @Input() titulo;
  @Input() descricao;

  constructor() { }

  ngOnInit(): void {
  }

}
