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
    createServerEvent = 'No Server was created';
    serverName = '';
    constructor() {
        setTimeout(() => {
            this.disableAddServer = true;
        }, 2000);
    }

    ngOnInit(): void {
    }

    onCreateServer() {
        this.createServerEvent = 'Server was created successfully';
    }

    onUpdateServername(event : Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
