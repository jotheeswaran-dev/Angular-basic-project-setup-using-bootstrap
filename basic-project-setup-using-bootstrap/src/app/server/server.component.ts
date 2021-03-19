// import decorators
import { Component } from '@angular/core';

// decorators
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})

// class defined - typescript 
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    // method defined in type script to return the status
    getServerStatus() {
        return this.serverStatus;
    }
}
