import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private initialX = 0;
  private initialY = 0;
  private maxWidth = this.getMaxWidth();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private getMaxWidth(): number {
	const windowWidth = window.innerWidth;

	//maxWidth -  W3C 
	if (windowWidth >= 1920) {
		return 1920;
	  } else if (windowWidth >= 1366) {
		return 1366;
	  } else if (windowWidth >= 1280) {
		return 1280;
	  } else if (windowWidth >= 1024) {
		return 1024;
	  } else {
		return 768;
	  }
	}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
	this.isDragging = true;
	this.initialX = event.clientX - this.el.nativeElement.getBoundingClientRect().left;
	this.initialY = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
	this.renderer.addClass(this.el.nativeElement, 'dragging');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
	if (!this.isDragging)
	  return;

	const xOffset = event.clientX - this.initialX;
	let yOffset = event.clientY - this.initialY;

	const appMenu = document.querySelector('app-menu');
	if (appMenu) {
	  const menuHeight = appMenu.getBoundingClientRect().height;
	  const maxAllowedHeight = window.innerHeight - menuHeight - 100;
	  if (xOffset >= 0 && xOffset + this.el.nativeElement.offsetWidth <= this.maxWidth) {
		this.el.nativeElement.style.left = `${xOffset}px`;
	  }

	  if (yOffset >= 0 && yOffset + this.el.nativeElement.offsetHeight <= maxAllowedHeight) {
		this.el.nativeElement.style.top = `${yOffset}px`;
	  }
	}
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(): void {
	if (this.isDragging) {
	  this.isDragging = false;
	  this.renderer.removeClass(this.el.nativeElement, 'dragging');
	}
  }
}
