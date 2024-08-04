import { Component } from '@angular/core';
import { ErrorModalService } from '../../services/error-modal.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import modalPanel from '../../animations/modal-panel';
import modalBackdrop from '../../animations/modal-backdrop';

@Component({
  selector: 'error-modal',
  standalone: true,
  imports: [AsyncPipe],
  animations: [modalPanel, modalBackdrop],
  templateUrl: './error-modal.component.html',
})
export class ErrorModal {
  isVisible$!: Observable<boolean>;
  content$!: Observable<string>;

  // Injects the error modal service
  constructor(private readonly errorModalService: ErrorModalService) {}

  // Subscribes to the visibility and content observables
  ngOnInit(): void {
    this.isVisible$ = this.errorModalService.visibility$;
    this.content$ = this.errorModalService.content$;
  }

  // Closes the error modal
  close() {
    this.errorModalService.close();
  }

  // Reloads the window
  reload() {
    window.location.reload();
  }
}
