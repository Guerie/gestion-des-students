import { Student } from './student';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

export class StudentCollection {
    private students: Map<number, Student>;
    private apiService: ApiService;
    private toastrService: ToastrService;
    public constructor(toastrService: ToastrService, api?: ApiService) {
        this.students = new Map<number, Student>();
        //Keep
        this.toastrService = toastrService;
        
        //Call the private method
        this.remoteStudents();
        if (api) {
            this.apiService = api;
        }
    }
    /**
     * Returns the student collection
     * @return Map<number, Student>
     */
    public getCollection(): Map<number, Student>{
        return this.students;
    }
    /**
     * Add a student in that collection
     * @param student 
     */
    
    public add(student: Student): void {
        this.students.set(student.getId(), student);
        //TODO: don't forget to update the DB
        //TODO: don't forget to get the ID of the freshly created DB Student
    }
    /**
     * Returns the Student identified by an Id
     * @param id Id of the student to return
     * @return Student
     */
    public get(id: number): Student {
        return this.students.get(id);
    }
    /**
     * Remove a student identified by an id from collection
     * @param id The Id of the Student to remove locally
     */
    public remove(id: number): void {
        //TODO: call the delete route of the api
        this.apiService.delete(id).subscribe((response: any)=> {
            this.students.delete(id);},
            (error: any) => {
                //Here comes the toast
                if (error.status == 403) {
                    this.students.delete(id);
                    //Some warning error
                    this.toastrService.warning('This student was gone before !');
                } else {
                    // Some big error
                    this.toastrService.error('Unable to delete this student', 'Error');
                }
        });
        
    }
    /**
     * Update the local Student
     * @param student 
     */
    public update(student: Student): void {
        this.add(student);
        // TODO: call the update route of the api
    }
    private remoteStudents(): void {
        //TODO: call the api
    }
}
