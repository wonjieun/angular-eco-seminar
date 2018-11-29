import { Injectable } from '@angular/core';

// @Injectable decorator: 해당 클래스가 다른 클래스에 주입 (Injection) 가능
// 주입은 생성자를 이용하고 주입과정은 Angular가 담당
@Injectable({
  providedIn: 'root'
})
export class HttpSupportService {

  constructor() { }
}
