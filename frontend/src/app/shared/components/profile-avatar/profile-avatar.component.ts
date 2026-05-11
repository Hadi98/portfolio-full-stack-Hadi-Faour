import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.css'
})
export class ProfileAvatarComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() animated = true;
  @Input() showGlow = true;
}
