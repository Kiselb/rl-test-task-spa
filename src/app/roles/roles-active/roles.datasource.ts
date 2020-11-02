import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IRole, RolesService } from '../roles.service';

export class RolesDataSource implements DataSource<IRole> {

    private rolesSubject = new BehaviorSubject<IRole[]>([]);

    constructor(private rolesService: RolesService) {}

    connect(collectionViewer: CollectionViewer): Observable<IRole[]> {
        return this.rolesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.rolesSubject.complete();
    }

    getRoles() {
        this.rolesService.getRoles()
        .pipe(catchError(() => of([])))
        .subscribe(users => this.rolesSubject.next(users));
    }
}
