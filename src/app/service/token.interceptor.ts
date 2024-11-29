import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let _token = '';
  let _jwt = req.clone({
    setHeaders:{
      Authorization: 'bearer ' + _token,
    }
  });

  return next(_jwt);
};
