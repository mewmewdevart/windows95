import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommunicationService } from '../communication.service';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass']
})
export class IconComponent implements OnInit {
	private clickCount: { [index: number]: number } = {};

	constructor(public communicationService: CommunicationService, private cdr: ChangeDetectorRef) { }

	// Handles the drop event when an icon is dragged and dropped
	onDrop(event: CdkDragDrop<any[]>): void {
		moveItemInArray(this.communicationService.iconsDesktop, event.previousIndex, event.currentIndex);
	}

	ngOnInit(): void {
		// Initialize the iconsDesktop array from the communicationService
		const iconsDesktop = this.communicationService.iconsDesktop;
	}

	// Handles the click event on an icon
	handleIconClick(index: number): void {
		if (!this.clickCount[index]) {
			// First click
			this.clickCount[index] = 1;
		} else {
			// Second click
			const icon = this.communicationService.iconsDesktop[index];
			icon.isWindowOpen = 'yes';
			this.clickCount[index] = 0;
			// Manually trigger change detection to update the view
			this.cdr.detectChanges();
		}
	}
}