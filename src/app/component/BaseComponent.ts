import { ActivatedRoute } from "@angular/router";

export class BaseComponent {
    constructor(
        protected route:ActivatedRoute,
      ) {
      }
    
    public get currentUrl(): string {
    return this.route.snapshot.url.join('/')
    }
}