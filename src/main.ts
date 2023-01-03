import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhkXVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH5RdERjW3xeeHVQQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9Ad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0VhW35ecndVTmVbVg==;ORg4AjUWIQA/Gnt2VVhkQlFacl5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjW31fcHZWRmlZUUU=;ODU5OTE2QDMyMzAyZTM0MmUzMG1NYk5oUzBja3pNMXk3cDA1THpPUDdHRzN2THF4UnBlVm9oeGJyU0RiU0k9;ODU5OTE3QDMyMzAyZTM0MmUzMGlGMWljK25FMFdKZng2aVUwYTFlUkhTVVh3dTdOelBRMjRDeU1aNFhuV1k9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtDVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWX1ccXRXRWFdVE1z;ODU5OTE5QDMyMzAyZTM0MmUzMGJIWmFEVFFjS0xUMHZaRDNmcGdncm5KRDlKbTN6WW5vOHR6dzR1ak00RDg9;ODU5OTIwQDMyMzAyZTM0MmUzMGlFamtwa1pVaGxJREZZMVl2OFdOd1owT3lvOUc2LzhLRjgyYVp6N1hYcXc9;Mgo+DSMBMAY9C3t2VVhkQlFacl5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjW31fcHZWR2RcVkE=;ODU5OTIyQDMyMzAyZTM0MmUzMExWbXh2YktuN29wUGY1d0VidVNJQXJCZ2FuSUo3a1BZWFFXN0RmYzE0RW89;ODU5OTIzQDMyMzAyZTM0MmUzMEtYSVJ4ZFpQSTZLU1BzbUVPbHFrakFJN1Q5Q01Ld0hLa05Pcis0Y1lwQUk9;ODU5OTI0QDMyMzAyZTM0MmUzMGJIWmFEVFFjS0xUMHZaRDNmcGdncm5KRDlKbTN6WW5vOHR6dzR1ak00RDg9');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
