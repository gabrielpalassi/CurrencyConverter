import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorModalService {
  private visibilitySource = new BehaviorSubject<boolean>(false);
  private contentSource = new BehaviorSubject<string>('');
  visibility$ = this.visibilitySource.asObservable();
  content$ = this.contentSource.asObservable();

  // Opens the error modal with the given content
  open(content: string) {
    this.contentSource.next(content);
    this.visibilitySource.next(true);
  }

  // Closes the error modal
  close() {
    this.visibilitySource.next(false);
  }
}
