import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  if (route.url.length > 0){
    let router = inject(Router);

    let menu = route.url[0].path;
  
    if (menu === 'about'){
       alert('You don\'t have access');
      // router.navigate(['about']);
      router.navigateByUrl('/customer');
      return false;
    }
  }

  return true;
};
