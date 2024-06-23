/**
 * 比如，<a href"http://www.itcast.cn/" id"link">传智教育</a>
 * const aLink= document.getElementById('link')
 * 注意:getElementByid方法返回值的类型是HTMLElement，该类型只包含所有标签公共的属性或方法，
 * 不包含a标签特有的 href 等属性。因此，这个类型太宽泛(不具体)，
 * 无法操作href等a标签特有的属性或方法。解决方式:这种情况下就需要使用类型断言指定更加具体的类型、
 * 
 * 
 * 3.11类型断言
 * 使用类型断言:
 * const aLink: HTMLAnchorElementconst aLink= document.getElementById('link')as HTMLAnchorElement
 * 解释:
 * 1.使用 as 关键字实现类型断言
 * 2. 关键字 as 后面的类型是一个更加具体的类型(HTMLAnchorElement是 HTMLElement 的子类型)。
 * 3.通过类型断言，aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法了。另一种语法，使用<>语法，这种语法形式不常用知道即可:
 * const aLink = <HTMLAnchorElement>document.getElementById('link')
 * 技巧:在浏览器控制台，通过console.dir()打印 DOM 元素，在属性列表的最后面，即可看到该元素的类型。
 */

const aLink1 = document.getElementById("link") as HTMLAnchorElement;
const aLink2 =<HTMLAnchorElement> document.getElementById("link");
aLink1.href