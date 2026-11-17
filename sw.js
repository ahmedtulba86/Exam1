self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('push',function(e){
  var d={};try{d=e.data.json();}catch(x){d={title:'عصير الكتب',body:e.data?e.data.text():''};}
  e.waitUntil(self.registration.showNotification(d.title||'عصير الكتب',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',dir:'rtl',lang:'ar',data:{url:d.url||'./portal.html'}}));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();var u=(e.notification.data&&e.notification.data.url)||'./portal.html';
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){for(var i=0;i<l.length;i++){if('focus' in l[i])return l[i].focus();}return self.clients.openWindow(u);}));
});
