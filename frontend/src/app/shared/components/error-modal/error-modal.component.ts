import { Component, inject } from '@angular/core';
import { ErrorModalService } from '@/app/shared/services/error-modal.service';
import { modalPanel } from '@/app/shared/animations/modal-panel';
import { modalBackdrop } from '@/app/shared/animations/modal-backdrop';

@Component({
  selector: 'error-modal',
  standalone: true,
  animations: [modalPanel, modalBackdrop],
  templateUrl: 'error-modal.component.html',
})
export class ErrorModal {
  // Inject the ErrorModalService
  readonly errorModalService = inject(ErrorModalService);

  // Reloads the window
  reload() {
    window.location.reload();
  }
}
