import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam';

  constructor() {
    this.setFirstKeyStorage();
  }

  setFirstKeyStorage(): void {
    if (!localStorage.getItem('key')) {
      localStorage.setItem('key', '0');
    }
  }
}
