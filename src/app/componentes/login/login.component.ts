import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
// import {AngularFireModule} from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  recordsRef: AngularFireList<any>;
  private dbPath = '/users';

  constructor(private db: AngularFireDatabase) {
    this.recordsRef = db.list<any>(this.dbPath);
  }

  usuario = {
    email: '',
    password: ''
  }

  


  Ingresar() {
    this.recordsRef.push(this.usuario);
  }

  createRecord(record: any): void {
    this.recordsRef.push(record);
  }
  
  updateRecord(key: string, value: any): Promise<void> {
    return this.recordsRef.update(key, value);
  }
  
  deleteRecord(key: string): Promise<void> {
    return this.recordsRef.remove(key);
  }
  
  getRecordsList(): AngularFireList<any> {
    return this.recordsRef;
  }
}
