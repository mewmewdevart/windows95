import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
	selector: 'app-window',
	templateUrl: './window.component.html',
	styleUrls: ['./window.component.sass']
})
export class WindowComponent {
	constructor(public communicationService: CommunicationService) { }

	ngOnInit(): void {
	  const iconsDesktop = this.communicationService.iconsDesktop;
	}
}
