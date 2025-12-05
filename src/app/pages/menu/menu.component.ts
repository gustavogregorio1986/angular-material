// app.module.ts
import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

     @ViewChild('sidenav') sidenav!: MatSidenav;

     isMobile = false;
     
     constructor(private bp: BreakpointObserver) {
          this.bp
      .observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      )
      .subscribe(isHandset => {
        this.isMobile = isHandset;
        if (!isHandset) {
          this.sidenav?.open();
        }
      });
     }

      toggleSidenav() {
    if (this.isMobile) this.sidenav.toggle();
  }

}
