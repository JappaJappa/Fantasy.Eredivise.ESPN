import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/app-configuration/app-configuration.service';

@Component({
  selector: 'app-home',
  imports: [],
  template: `<p> works!</p>`,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { 
  private readonly _userService = inject(UserService);
  users: User[] = [];

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
