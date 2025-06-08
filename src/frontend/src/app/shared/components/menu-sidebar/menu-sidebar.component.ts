import {
  Component,
  HostListener,
  Input,
  OnInit,
  WritableSignal,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShowMenuStateService } from '@core/utils/showMenuState.service';
import { slideInOut } from './animations/slide-in-out.animation';
import { Subscription } from 'rxjs';

interface menuItems {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-menu-sidebar',
  imports: [RouterModule],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.css',
  animations: [slideInOut],
})
export class MenuSidebarComponent implements OnInit {
  @Input()
  menuItems: menuItems[];

  private sub = new Subscription();

  isOpen: WritableSignal<boolean>;

  isMobile: boolean = false;

  menuStaticItems: menuItems[];

  constructor(
    private showMenuState: ShowMenuStateService,
    private router: Router
  ) {
    this.isOpen = this.showMenuState.isOpen;
  }

  ngOnInit() {
    this.verifySizeScreen();
    this.menuStaticItems = [
      { label: 'Home', icon: 'assets/icons/home.svg', route: '/home' },
      { label: 'Perfil', icon: 'assets/icons/person.svg', route: '/user' },
    ];
    this.sub.add(
      this.router.events.subscribe(() => {
        this.showMenuState.closeMenu();
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verifySizeScreen();
  }

  verifySizeScreen() {
    this.isMobile = window.innerWidth <= 600;
  }
}
