import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import formurlencoded from 'form-urlencoded';

interface mData{
  obj:Object;
}

@Injectable({
  providedIn: 'root'
})

export class DataUpdateService {

  constructor(private http: HttpClient) { }

  myData:string;
  data : Object;

  _url='http://54.203.145.68:8000/polls/login_post/';
  headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  
  loginData(): Observable<any>{
      
    // let options = {
    //   headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    //     };
    
    //     let body = `username=khushaldikha3&password=1234`; 
    // return this.http.post<any>(this._url,body,options);


    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };
      var body = {
        username:"khushaldikha3",
        password:"12345"
        
     }
     console.log("sending");   
     return this.http.post<any>(this._url,formurlencoded(body),options);
  }

  getMonData(): Observable<any>{
     //this.myData="{\"username\": \"khushaldikha3\", \"timetable\": [{\"type\": \"practical\", \"subject\": \"test\", \"slot_pre_id\": 29846, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"09:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29903, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"10:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29849, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"11:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29884, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"12:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29852, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"13:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29881, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"15:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29871, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"16:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29873, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"17:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29874, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"18:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29862, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"19:00:00\"}], \"day\": \"mon\"}";
    
    return this.http.get<mData>('http://54.203.145.68:8000/polls/teacher/khushaldikha3/mon/')
    
    //console.log("ddata aaya : "+this.data);
  
    //return this.myData;
  }


  getTueData(){
   // this.myData="{\"username\": \"khushaldikha3\", \"timetable\": [{\"type\": \"practical\", \"subject\": \"test\", \"slot_pre_id\": 29846, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"09:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29903, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"10:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29849, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"11:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29884, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"12:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29852, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"13:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29881, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"15:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29871, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"16:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29873, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"17:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29874, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"18:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29862, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"19:00:00\"}], \"day\": \"tue\"}";
    //console.log(this.myData);
    return this.http.get<mData>('http://54.203.145.68:8000/polls/teacher/khushaldikha3/tue/')

    //return this.myData;
  }



  getWedData(){
    //this.myData="{\"username\": \"khushaldikha3\", \"timetable\": [{\"type\": \"practical\", \"subject\": \"test\", \"slot_pre_id\": 29846, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"09:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29903, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"10:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29849, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"11:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29884, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"12:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29852, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"13:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29881, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"15:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29871, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"16:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29873, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"17:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29874, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"18:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29862, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"19:00:00\"}], \"day\": \"wed\"}";
    //console.log(this.myData);
    return this.http.get<mData>('http://54.203.145.68:8000/polls/teacher/khushaldikha3/wed/')

    //return this.myData;
  }


  getThuData(){
    //this.myData="{\"username\": \"khushaldikha3\", \"timetable\": [{\"type\": \"practical\", \"subject\": \"test\", \"slot_pre_id\": 29846, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"09:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29903, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"10:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29849, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"11:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29884, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"12:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29852, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"13:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29881, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"15:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29871, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"16:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29873, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"17:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29874, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"18:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29862, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"19:00:00\"}], \"day\": \"thu\"}";
    //console.log(this.myData);
    return this.http.get<mData>('http://54.203.145.68:8000/polls/teacher/khushaldikha3/thu/')
    //return this.myData;
  }


  getFriData(){
    //this.myData="{\"username\": \"khushaldikha3\", \"timetable\": [{\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29903, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"10:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29849, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"11:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29884, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"12:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29852, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"13:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29881, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"15:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29871, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"16:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29873, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"17:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29874, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"18:00:00\"}, {\"type\": \"lecture\", \"subject\": \"test\", \"slot_pre_id\": 29862, \"grp\": \"0\", \"batch\": \"B1\", \"time\": \"19:00:00\"}], \"day\": \"fri\"}";
    //console.log(this.myData);
    return this.http.get<mData>('http://54.203.145.68:8000/polls/teacher/khushaldikha3/fri/')
    //return this.myData;
  }


}
