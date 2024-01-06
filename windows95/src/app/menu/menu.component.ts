import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
	timeString: string = '';
	//displayLimit: number = 1;

	constructor(
		public communicationService: CommunicationService
	) {
		this.updateClock();
		setInterval(() => {
			this.updateClock();
		}, 1000);
	}

	ngOnInit(): void {
		const iconsDesktop = this.communicationService.iconsDesktop;
	}

	updateClock() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		
		let formatHourClock: string;
		if (hours >= 12)
			formatHourClock = 'PM';
		else
			formatHourClock = 'AM';

		const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // padStart() to format numbers, filling the string/numbers with characters on the left
		const formattedMinutes = minutes.toString().padStart(2, '0');

		this.timeString = `${formattedHours}:${formattedMinutes} ${formatHourClock}`;
	}
}
