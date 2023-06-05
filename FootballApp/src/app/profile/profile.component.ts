import { Component } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = new User()  
  length = 0
  constructor (private userService : UserService){}
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      data => {
        this.user = data
        console.log(this.user)
      }
    )

    console.log(this.generatePlace())
  }

  generatePlace(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number1 = "012"
    const number2 = "0123456789"
    let result =''

    const gateLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    result += gateLetter
    const gateNumber1 = number1[Math.floor(Math.random() * number1.length)]
    result += gateNumber1
    const gateNumber2 = number2[Math.floor(Math.random() * number2.length)]
    result += gateNumber2
    return result
  }

  annualPlace() {
    console.log(this.user.userId)
    this.user.annualPlace = this.generatePlace()
    this.userService.annualPlace(this.user.userId, this.user).subscribe(
      data => {
        console.log("Bought Annual Place")
      }
    )
  }
}
