import {Component,OnInit} from 'angular2/core';
import {SocketService} from './socket.service';
import {Connection} from './connect.component';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Headers, RequestOptions} from 'angular2/http';

@Component({
  selector: 'my-app',
  template:`
      <h1>Truc</h1>
      <connect></connect>
    <input type="text" [(ngModel)]="check" name="name" placeholder="your name"/>
    <input type="submit" (click)="sendToCheck(check)" />
    `,
    providers: [HTTP_PROVIDERS, SocketService]
})


export class AppComponent implements OnInit {
  constructor(private _socketService: SocketService, private http: Http){}

  check: string;

  sendToCheck = function(e){
    //envoyer en socket
    this._socketService.sock.send(JSON.stringify({msg : e}));
  }
  ngOnInit() {
    this._socketService.connect();

    console.log('ngOnInit');
    // this.getTest();
  }

 getTest() {
   /*this.http.get('http://127.0.0.1:9998/api/')
     .map((res: Response) => res.json())
      .subscribe(
      data => { console.log(data); },
        err => console.error(err),
        () => console.log('done')
      );*/
 let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   this.http.post('http://127.0.0.1:9998/api/', JSON.stringify({ name: "lol" }), options)
     .map((res: Response) => res.json())
      .subscribe(
      data => { console.log(data); },
        err => console.error(err),
        () => console.log('done')
      );
  }

}
