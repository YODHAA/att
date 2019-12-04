import { Component } from '@angular/core';
import { DataUpdateService } from './data-update.service';
import { User } from './user';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  _router: any;

  constructor(private data: DataUpdateService){
  
  }

  updateModel=new User("","");
 

  loginAPI() {
    console.log("hi");
  
    this.data.loginData().subscribe(
      data => { 
        console.log("success ",data);
        console.log("success2 ",data.status);
          
        if (data.status === '1') {
          console.log("Success ");
          // navigate to not found page
          this._router.navigate(['/home']);
          return false;
        }
        else
        {
          console.log("failed ",user);
          // navigate to not found page
           this._router.navigate(['/404']);
           return false;
        }

        
      },
      error =>{ console.log("error ",error); }
  
    );
  
  
  }

}

