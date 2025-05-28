import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const newsApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.API_KEY;
  req = req.clone({
    setParams: {
      apikey: apiKey,
      language: 'en',
      removeduplicate: '1'
    }
  });
  return next(req);
};
