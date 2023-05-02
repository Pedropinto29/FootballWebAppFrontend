import { Component } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = new User()  
  constructor (private userService : UserService){}
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      data => {
        this.user = data
        console.log(this.user)
      }
    )
  }

  annualPlace() {
    console.log(this.user.userId)
    this.user.annualPlace = "Gate E"
    this.userService.annualPlace(this.user.userId, this.user).subscribe(
      data => {
        console.log("Bought Annual Place")
      }
    )
  }
}
