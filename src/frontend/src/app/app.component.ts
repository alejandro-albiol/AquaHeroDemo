import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NavigationError, Router, RouterOutlet } from '@angular/router';
import { LoadingService } from '@core/utils/loading.service';
import { NotificationService } from '@core/utils/notification.service';
import { environment } from '@environments/environment';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { NotificationComponent } from '@shared/components/notification/notification.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private loadingService = inject(LoadingService);
  private cdr = inject(ChangeDetectorRef);
  isLoading$ = this.loadingService.loading$;

  isDevelopment = environment.production === false;

  constructor(
    private router: Router,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.isLoading$.subscribe(() => {
      this.cdr.detectChanges();
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        if (event.error && event.error.ngNavigationCancelingError) return;
        this.notificationService.notify('Acción no válida en Demo', 'warning');
      }
    });
  }
}
