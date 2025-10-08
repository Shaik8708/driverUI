import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  OnInit,
} from '@angular/core';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  @ViewChildren('otpInput')
  otpInputs!: QueryList<ElementRef>;

  otpValues: string[] = ['', '', '', '', ''];

  ngOnInit(): void {}

  onKeyUpEvent(index: number, event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.otpValues[index - 1] = value;

    if (value.length && index < 5) {
      // Move focus to the next input
      this.otpInputs.toArray()[index].nativeElement.focus();
    }
  }

  onFocusEvent(index: number) {
    this.otpValues[index - 1] = '';
  }

  verifyOtp() {
    const otp = this.otpValues.join('');
    // Add OTP verification logic here
    console.log('Entered OTP:', otp);
  }
}
