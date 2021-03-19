// Created this ServersComponent using CLI command 'ng generate component <name>' or 'ng g c <name>'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    // property to be binded in html
    disableAddServer = false;

    constructor() {
        setTimeout(() => {
            this.disableAddServer = true;
        }, 2000);
    }

  ngOnInit(): void {
  }

}
