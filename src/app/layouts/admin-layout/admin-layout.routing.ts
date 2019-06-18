import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LineaListComponent } from '../../linea/linea-list/linea-list.component';
import { LineaSimulacionComponent } from '../../linea/linea-simulacion/linea-simulacion.component';
import { LineaCreateComponent } from '../../linea/linea-create/linea-create.component';
import { LineaEditComponent } from '../../linea/linea-edit/linea-edit.component';
import { InicioComponent } from '../../inicio/inicio.component';
import { LineaSimulacionResultsComponent } from '../../linea/linea-simulacion-results/linea-simulacion-results.component';
import { LineaParadaComponent } from '../../linea/linea-parada/linea-parada.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    /** My components*/
    { path: 'linealist', component: LineaListComponent },
    { path: 'lineasimulacion/:id', component: LineaSimulacionComponent },
    { path: 'lineacreate', component: LineaCreateComponent },
    { path: 'linea/:id/edit', component: LineaEditComponent },
    { path: 'home', component: InicioComponent },
    { path: 'lineasimulacionresults', component: LineaSimulacionResultsComponent },
    { path: 'lineaparadalist', component: LineaParadaComponent }


];
