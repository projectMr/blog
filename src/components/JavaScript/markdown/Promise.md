#Promise学习笔记
8/28/2017 9:41:02 AM   
###为什么我要把Promise单独拿出来，原因在于我对这个‘量词’，一直是似懂非懂的，最近还有些自己的时间，所以准备把这个Promise学习一下。  

----------
Promise有三种状态分别是Pending(进行中)、Fulfilled（已成功）、Rejected（已失败），三种状态之间的转换如下，并且不可反方向转换。
<pre style='background:#404040;border-radius:10px;color:#fff'>
	Pending(进行中)==>Fulfilled（已成功）;
	Pending(进行中)==>Rejected（已失败）;
</pre>
###基本用法   
-Promise是一个对象的构造函数，我们使用的时候，需要先对其进行实例化，然后在进行使用。<br/>
<pre style='background:#404040;border-radius:10px;color:#fff'>
 例子1：
	var promise = new Promise(function(resolve, reject) {
	  // ... some code（ps:写自己将要封装的逻辑。）
	
	  if (/* 异步操作成功 */){
	    resolve(value);
	  } else {
	    reject(error);
	  }
	});
	  //if条件句这里很容易明白，一个成功的回调，一个失败的回调。
</pre>
-因为promise本身是一个构造函数，里面有两个参数一个是Fulfilled，一个是Rejected，我们在实例化的时候，在成功的逻辑里面会写resolve（ps:也就是成功的回调函数）,失败的时候会写Rejected（ps:也就是失败的回调函数）,大概的主题图就是这样。但是如果这样呢？<br/>
<pre style='background:#404040;border-radius:10px;color:#fff'>
 例子2：
	var promise = new Promise(function(resolve, reject) {
	  // ... some code（ps:写自己将要封装的逻辑。）
	
	  if (/* 异步操作成功 */){
	    resolve(value);
	    <font color='red'>console.log("这里会执行吗？");</font>
	  } else {
	    reject(error);
	  }
	});
</pre><br/>
如果是上面的情况是不是就有点尴尬了，所以我们不妨，在resolve()、reject()两个函数前面添加return，这样就保险了很多。<br/>
-关于回调地域<br/>
<pre style='background:#404040;border-radius:10px;color:#fff'>
 1.what回调地域？
 答：同学们可能遇到这样的场景，我们在拿到一个初始值A的情况下，才可以去操作B,然后操作C、D...层层嵌套，这就是我查询资料后理解额的回调地域。
 2.如何解决回调地域？
 答：promise,没错就是promise，回调地域就是一个异步的问题,然而promise就是一个很好解决异步的函数。
</pre><br/>
<pre style='background:#404040;border-radius:10px;color:#fff'>
 例子3:
	var p1 = new Promise(function (resolve, reject) {
	  // ...
	});
	
	var p2 = new Promise(function (resolve, reject) {
	  // ...
	  <font color='red'>resolve(p1);</font>
	})
</pre><br/>
下面我们来解释下例子3中的代码，p1是一个新创建的promise对象，p2也是一个新创建的promise对象，然后我们看红色的部分resolve(p1),这个地方是不是有一点不一样呢？是的，我们p1放进了p2的resolve()函数里面了，这样的话，p2的结果就会受到p1结果的影响。如果这样的话，我们是不是可以利用这个解决回调地域这个问题呢？<br/>
<pre style='background:#404040;border-radius:10px;color:#fff'>
 例子4：
	假设下我们有三层嵌套A-->B-->C,A的外层是B,B的外层是C。
	var A = new Promise(function (resolve, reject) {
	  // A的逻辑
	});
	
	var B = new Promise(function (resolve, reject) {
	  // 引入A，写关于B的逻辑
	  resolve(value);
	});
	var C = new Promise(function (resolve, reject) {
	  // 引入B写关于C的逻辑
	  resolve(value);
	})
</pre><br/>
这样的话是不是就避免了，代码丑陋的层层嵌套。<br/>
-Promise.all()<br/>
<pre style='background:#404040;border-radius:10px;color:#fff'>
	Promise.all(['a','b','c']...)参数为一个数组,数组中的每一个项，都是一个Promise对象(必须);
	注意：
	1.数组中的每一个项，都是resolve()才可以调用Promise.all()的成功回调函数,其中有一个是Rejected(),就不会调用Promise.all()的成功回调函数。
</pre><br/>

----------
###感谢阮一峰老师的博文，上面仅仅是看过阮老师文章后，自己的理解，如果想要了解的更多，请访问<http://es6.ruanyifeng.com/#docs/promise>