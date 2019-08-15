import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Clinical } from './app/clinical';


@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private clinicUrl = 'api/clinical';  // URL to web api
 
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) { }


  // getClinic(id: number): Observable<Clinical> {
  //   return of(CLINICNFO.find(clinical => clinical.id === id));
  // }

  getClinic(id: number): Observable<Clinical> {
    const url = `${this.clinicUrl}/${id}`;
    return this.http.get<Clinical>(url).pipe(
     catchError(this.handleError<Clinical>('getClinical id=${id}'))
    );
    
  }

  getAllClinic(): Observable<Clinical[]> {
    return this.http.get<Clinical[]>(this.clinicUrl)
     .pipe(
      catchError(this.handleError<Clinical[]>('getAllClinical', []))
    );
  }

  /* GET heroes whose name contains search term */
searchClinical(term: string): Observable<Clinical[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Clinical[]>(`${this.clinicUrl}/?name=${term}`).pipe(
   catchError(this.handleError<Clinical[]>('searchClinical', []))
  );
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
   // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
