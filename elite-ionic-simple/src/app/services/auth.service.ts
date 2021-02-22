import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: Storage) {
        console.log('Hello AuthProvider Provider');
    }

    checkKey(key) {


        let body = {
            key: key
        };

        return this.http.post('http://localhost:8080/api/check', body).pipe(map(res => res));

    }

    reauthenticate(){

        return  new Promise((resolve, reject) => {

            this.storage.get('eliteLicenseKey').then((key) => {

                if(key !== null){

                    this.checkKey(key).subscribe((res) => {

                        if(res){
                            resolve(true);
                        } else {
                            reject(true);
                        }

                    });

                } else {
                    reject(true);
                }

            })

        });

    }

}
