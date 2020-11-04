import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IUsersRoles, UsersService } from '../users.service';

export class UsersRolesDataSource implements DataSource<IUsersRoles> {

    private usersRolesSubject = new BehaviorSubject<IUsersRoles[]>([]);

    constructor(private userId: number, private usersService: UsersService) {}

    connect(collectionViewer: CollectionViewer): Observable<IUsersRoles[]> {
        return this.usersRolesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersRolesSubject.complete();
    }

    getUsersRoles() {
        this.usersService.getUsersRoles(this.userId)
        .pipe(catchError(() => of([])))
        .subscribe(usersRoles => this.usersRolesSubject.next(usersRoles));
    }
}
