import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShadowRootHandlerService {
  accessShadowRoot(
    targetNode: HTMLElement,
    componentName: string,
    callback: () => void,
  ): void {
    // Query the custom element
    const element = targetNode.querySelector(componentName) as HTMLElement;

    if (element) {
      // Create a MutationObserver to monitor changes
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList' || mutation.type === 'attributes') {
            callback();
          }
        }
      });

      // Observe the element for changes
      observer.observe(element, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      // Apply callback when the component is initialized
      callback();
      // observer.disconnect();
    } else {
    }
  }
}
