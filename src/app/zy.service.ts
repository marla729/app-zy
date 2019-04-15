import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZyService {
  public submitObservable: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  submit(result) {
    this.submitObservable.emit(result);
  }
}
