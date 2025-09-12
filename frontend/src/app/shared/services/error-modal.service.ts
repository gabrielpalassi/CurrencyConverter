import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ErrorModalService {
  // Properties
  private visibilitySignal = signal(false);
  private contentSignal = signal("");
  visibility = computed(() => this.visibilitySignal());
  content = computed(() => this.contentSignal());

  // Opens the error modal with the given content
  open(content: string) {
    this.contentSignal.set(content);
    this.visibilitySignal.set(true);
  }

  // Closes the error modal
  close() {
    this.visibilitySignal.set(false);
  }
}
