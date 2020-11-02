import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IUser, UsersService } from '../users.service';

export class UsersDataSource implements DataSource<IUser> {

    private usersSubject = new BehaviorSubject<IUser[]>([]);

    constructor(private usersService: UsersService) {}

    connect(collectionViewer: CollectionViewer): Observable<IUser[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
    }

    getUsers() {
        this.usersService.getUsers()
        .pipe(catchError(() => of([])))
        .subscribe(users => this.usersSubject.next(users));
    }
}
