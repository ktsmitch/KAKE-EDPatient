import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


import { Clinical } from './app/clinical';


@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private clinicUrl = 'http://localhost:5000/api/clinical';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) { }


  getClinic(id: number): Observable<Clinical> {
    const url = `${this.clinicUrl}/getClinic/${id}`;
    return this.http.get<Clinical>(url).pipe(
     catchError(this.handleError<Clinical>('getClinical id=${id}'))
    );
    
  }

  getAllClinic(): Observable<Clinical[]> {
    return this.http.get<Clinical[]>('http://localhost:5000/api/clinical/getAll')
      .pipe(
      catchError(this.handleError<Clinical[]>('getAllClinical', []))
      );
  }

  /* GET conditions whose name contains search term */
searchClinical(term: string): Observable<Clinical[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Clinical[]>(`${this.clinicUrl}/search/${term}`).pipe(
   catchError(this.handleError<Clinical[]>('searchClinical', []))
  );
}

saveClinical(clinical: Clinical): Observable<Clinical>{
  return this.http.post<Clinical>('http://localhost:5000/api/clinical/create', clinical, this.httpOptions)
  .pipe(
  catchError(this.handleError<Clinical>('saveClinical'))
  );
}

deleteClinical(id: number): Observable<Clinical> {
  return this.http.delete<Clinical>(`${this.clinicUrl}/delete/${id}`)
  .pipe(
  catchError(this.handleError<Clinical>('deleteClinical id=${id}'))
  );
}

updateClinic(clinical: Clinical): Observable<Clinical> {
  return this.http.put<Clinical>('http://localhost:5000/api/clinical/edit/', clinical, this.httpOptions)
  .pipe(
  catchError(this.handleError<Clinical>('editClinical'))
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
