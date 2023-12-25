import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CommunicationService {

	openWindow(index: number): void {
		const icon = this.iconsDesktop[index];
		icon.isWindowOpen = 'yes'; 
	}

	minimizeWindow(window: any): void {
		window.isWindowOpen = 'maybe';
	}
	
	closeWindow(window: any): void {
        window.isWindowOpen = 'no';
    }

	openAgainWindow(window: any): void {
		window.isWindowOpen = 'yes';
		//if (window.calcBarsOpened > this.displayLimit)
		//window.isWindowOpen = false;
	}

	// Desktop Icons
	iconsDesktop: any[] = [
		{
			name: 'Internet',
			path: '../../assets/icons_new/icon_internet.png',
			isWindowOpen: 'no', // yes, no or maybe
		},
		{
			name: 'My Computer',
			path: '../../assets/icons_new/icon_computer.png',
			isWindowOpen: 'no',
		},
		{
			name: 'My Documents',
			path: '../../assets/icons_new/icon_folder.png',
			isWindowOpen: 'no',
		},
	];

	//Menu Icons
	programsOfMenu: any[] = [
		{ name: 'Programs', icon: '../../assets/icons_new/icon_programs.png' },
		{ name: 'Documents', icon: '../../assets/icons_new/icon_documents.png' },
		{ name: 'Settings', icon: '../../assets/icons_new/icon_settings.png' },
		{ name: 'Find', icon: '../../assets/icons_new/icon_find.png' },
		{ name: 'Help', icon: '../../assets/icons_new/icon_programs.png' },
		{ name: 'Run', icon: '../../assets/icons_new/icons_help.png' },
	];

	toolsPrograms: any [] = [
		{ name: 'Calculator', icon: '../../assets/icons_new/icon_calculator.png' },
		{ name: 'Notepad', icon: '../../assets/icons_new/icon_notepad.png' },
		{ name: 'Paint', icon: '../../assets/icons_new/icon_paint.png' },
		{ name: 'Internet Explorer', icon: '../../assets/icons_new/icon_internet.png' },
	]

	constructor() { }
}
