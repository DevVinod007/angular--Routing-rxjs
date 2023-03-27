import { EventEmitter } from "@angular/core"
import { Subject } from "rxjs";

export class UserService {

    // userAddedEvent = new EventEmitter<boolean>();
    userAddedEvent = new Subject<boolean>();

    getUser(id:string){
        if(id === '1'){
            return {
                id:'1',
                name:'Leela'
            }
        }else{
            return {
                id:'2',
                name:'Krishna'
            }
        }
    }

    addUser() {
        // this.userAddedEvent.emit(true)
        this.userAddedEvent.next(true)

    }
}