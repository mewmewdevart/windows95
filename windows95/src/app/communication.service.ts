import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommunicationService {
  // Method to open a window based on index
  openWindow(index: number): void {
	const icon = this.iconsDesktop[index];
	icon.isWindowOpen = 'yes';
  }

  // Method to minimize a window
  minimizeWindow(window: any): void {
	window.isWindowOpen = 'maybe';
  }

  // Method to close a window
  closeWindow(window: any): void {
	window.isWindowOpen = 'no';
  }

  // Method to open a window again
  openAgainWindow(window: any): void {
	window.isWindowOpen = 'yes';
	// Commented out condition, as it's currently commented and unclear
	// if (window.calcBarsOpened > this.displayLimit)
	//   window.isWindowOpen = false;
  }

  // Desktop Icons
  iconsDesktop: any[] = [
	{
		name: 'Internet',
		path: '../../assets/icons_new/icon_internet.png',
		isWindowOpen: 'no', // Possible values: 'yes', 'no', or 'maybe'
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

  // Menu Icons
  programsOfMenu: any[] = [
	{
		name: 'Programs',
		icon: '../../assets/icons_new/icon_programs.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Documents',
		icon: '../../assets/icons_new/icon_documents.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Settings',
		icon: '../../assets/icons_new/icon_settings.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Find',
		icon: '../../assets/icons_new/icon_find.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Help',
		icon: '../../assets/icons_new/icon_programs.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Run',
		icon: '../../assets/icons_new/icons_help.png',
		isWindowOpen: 'no',
	},
  ];

  // Tools Programs
  toolsPrograms: any[] = [
	{
		name: 'Calculator',
		icon: '../../assets/icons_new/icon_calculator.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Notepad',
		icon: '../../assets/icons_new/icon_notepad.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Paint',
		icon: '../../assets/icons_new/icon_paint.png',
		isWindowOpen: 'no',
	},
	{
		name: 'Internet Explorer',
		icon: '../../assets/icons_new/icon_internet.png',
		isWindowOpen: 'no',
	},
  ];
  constructor() { }
}