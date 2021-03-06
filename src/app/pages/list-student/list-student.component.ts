import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../share/services/api.service';
import { Student } from './../../share/models/student';
import { StudentCollection } from './../../share/models/student-collection';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  public studentCollection: StudentCollection;
  public constructor(
    private api: ApiService, 
    private toastrService: ToastrService, 
    private router: Router) //Inject the Router in that object
    {
    this.studentCollection = new StudentCollection(this.toastrService, api);

    this.api.getAllStudents().subscribe((studentPoorList: any)=> {
      const students: Array<any> = studentPoorList.eleves;
      // Y a-t-il des students dans la base de données?:
      if (!students.hasOwnProperty('httpStatus')){
        
        students.forEach((student: any) => {
          let aStudent: Student = (new Student())
          .setId(student.id)
          .setNom(student.nom)
          .setPrenom(student.prenom)
          .setAdresse(student.adresse);
        //Ranger les students dans le casier:
          this.studentCollection.add(aStudent);
        });
      }      
    });
  }
  public ngOnInit(){}
  public go(): void {
    this.router.navigate(['add']);
      }
  /**
   * Remove the selected student
   */
  public removeStudent(student: Student): void {
    console.log('Have to delete a student : ' + student.getId());
    this.studentCollection.remove(student.getId());
  }
}
