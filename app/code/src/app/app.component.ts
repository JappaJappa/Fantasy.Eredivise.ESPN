import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './services/app-configuration/app-configuration.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('espn-fantasy');
  private readonly _userService = inject(UserService);
  users: User[] = [];

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
