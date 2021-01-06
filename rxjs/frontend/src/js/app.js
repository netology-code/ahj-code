// TODO: write code here

import { fromEvent, of, Observable } from 'rxjs';
import {
  debounceTime, pluck, switchMap, map, catchError, filter,
} from 'rxjs/operators';

function getRequest(url) {
  return new Observable((observer) => {
    const controller = new AbortController();

    fetch(url, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch(err => observer.error(err));

    return () => controller.abort();
  });
}

const api = 'http://localhost:7070/api';
const input = document.getElementById('email');
fromEvent(input, 'input')
  .pipe(
    debounceTime(100),
    pluck('target', 'value'),
    filter(value => !!value),
    switchMap(value => getRequest(`${api}/check-email?email=${value}`).pipe(
      map(data => data.available),
      catchError(() => of(false)),
    )),
  )
  .subscribe((value) => {
    input.classList.remove('valid');
    input.classList.remove('error');
    input.classList.add(value ? 'valid' : 'error');
  });
