import { Component, Input } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owner-circle.component.html',
  styleUrl: './owner-circle.component.css'
})
export class OwnerCircleComponent {
  @Input() owners: FileOwner[] = [];

  get displayedOwners(): FileOwner[] {
    return this.owners.slice(0, 3);
  }

  get remainingOwners(): number {
    return Math.max(0, this.owners.length - 3);
}
}
