import { Component, inject } from '@angular/core';
import { ErrorModalService } from '../../services/error-modal.service';
import { modalPanel } from '../../animations/modal-panel';
import { modalBackdrop } from '../../animations/modal-backdrop';

@Component({
  selector: 'error-modal',
  standalone: true,
  animations: [modalPanel, modalBackdrop],
  templateUrl: './error-modal.component.html',
})
export class ErrorModal {
  // Inject the ErrorModalService
  readonly errorModalService = inject(ErrorModalService);

  // Reloads the window
  reload() {
    window.location.reload();
  }
}
