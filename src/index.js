(function() {
  var h = document.createElement('link');
  h.href = 'http://yshopimg.oss-cn-shanghai.aliyuncs.com/css/menu.css';
  h.setAttribute('rel','stylesheet');
  h.setAttribute('type','text/css');

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(h, s);
})();

export function getSystemInfo() {
}
