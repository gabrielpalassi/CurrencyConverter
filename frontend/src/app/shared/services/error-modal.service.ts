import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorModalService {
  private visibilitySource = signal(false);
  private contentSource = signal('');
  visibility = computed(() => this.visibilitySource());
  content = computed(() => this.contentSource());

  // Opens the error modal with the given content
  open(content: string) {
    this.contentSource.set(content);
    this.visibilitySource.set(true);
  }

  // Closes the error modal
  close() {
    this.visibilitySource.set(false);
  }
}
