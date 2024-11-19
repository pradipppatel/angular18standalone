import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../service/master.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  let router = inject(Router);
  let service = inject(MasterService);

  if (service.IsLoggedIn()){
    return true;
  }
  else{
    alert('Unauthorized access.');
    router.navigateByUrl('/login');
    return false;
  }

  // if (route.url.length > 0){
  

  //   let menu = route.url[0].path;
  
  //   if (menu === 'about'){
  //      alert('You don\'t have access');
  //     // router.navigate(['about']);
  //     router.navigateByUrl('/customer');
  //     return false;
  //   }
  // }

  // return true;

  
};
