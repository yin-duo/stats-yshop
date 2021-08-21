(function() {
  var h = document.createElement('link');
  h.href = 'https://yshopimg.oss-cn-shanghai.aliyuncs.com/css/menu.css';
  h.setAttribute('rel','stylesheet');
  h.setAttribute('type','text/css');

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(h, s);
})();

export function getSystemInfo() {
  console.log('当前站点 ' + document.domain + ' 使用 Yshop商城后台管理系统 框架技术')
  console.log('上海银舵网络科技有限公司版权所有 www.yin-duo.com')
  console.log('Yshop - StatsCS')
}
