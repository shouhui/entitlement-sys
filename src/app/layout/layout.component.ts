import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.less',
  standalone: false
})
export class LayoutComponent {
  protected readonly date = new Date();
}
