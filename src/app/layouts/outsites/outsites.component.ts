import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outsites',
  imports: [RouterOutlet],
  templateUrl: './outsites.component.html',
  styleUrl: './outsites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutsitesComponent { }
