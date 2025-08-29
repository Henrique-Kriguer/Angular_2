import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authgoogle } from './authgoogle';
import { Profile } from './landingpage/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginservice: Authgoogle = inject(Authgoogle);
  const router: Router = inject(Router);
  const logedProfile: Profile = loginservice.getLoggedProfile();

  if(logedProfile){
  return true;
  }
  router.navigate([''])
  return false;
};
