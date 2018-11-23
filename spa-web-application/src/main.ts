import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// AppModule을 읽어들여 모듈 안에 등록된 여러 컴포넌트들을
// Javascript 코드로 컴파일 하게 되는 것
// Root 모듈은 최상위 모듈로, main.ts에 의해 bootstrap됨 (?)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
