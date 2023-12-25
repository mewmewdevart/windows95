import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass']
})
export class IconComponent {
	constructor(public communicationService: CommunicationService) { }

	ngOnInit(): void {
		const iconsDesktop = this.communicationService.iconsDesktop;
	}

	openWindow(index: number): void {
		const icon = this.communicationService.iconsDesktop[index];
		icon.isWindowOpen = 'yes'; 
	}
}
