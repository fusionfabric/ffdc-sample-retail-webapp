import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ffdc-donations-banner',
  templateUrl: 'donations-banner.component.html'
})
export class DonationsBannerComponent {
  donationsBanner = {
    enabled: true,
    content: {
      id: 123,
      title: 'Donate to Red Cross',
      dismissButtonText: 'Dismiss',
      actionButtonText: 'Donate again',
      announcement: 'Consider donating again to the same organisation again!',
      icon: 'alarm_on'
    }
  };

  @Output() action = new EventEmitter<any>();
  @Output() dismiss = new EventEmitter<any>();

  onAction() {
    this.action.emit();
  }

  onDismiss() {
    this.dismiss.emit();
  }

  constructor() {}
}
