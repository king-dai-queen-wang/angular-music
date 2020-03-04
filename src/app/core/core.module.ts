import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ServicesModule} from '../services/services.module';
import {PagesModule} from '../pages/pages.module';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
  ]
})
export class CoreModule {
  /*
  * 为了CoreModule只能被AppModule引入，当appModule引入的时候这一段constructor被执行，这时CoreModule不存在
  * 则if跳过，若其他模块又引入一次，则if中的parentModel有了，就会执行
  * @skipSelf装饰器是指查找CoreModule的时候不查找自己，即跳过自身，即可避免无限循环的问题
  * @Optional装饰器指 CoreModule 没找到的时候则parentModule = null ，则不会报错
  * */
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被App Module 注入');
    }
  }
}
