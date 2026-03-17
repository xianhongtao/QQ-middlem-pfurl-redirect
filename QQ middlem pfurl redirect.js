// ==UserScript==
// @name         QQ middlem pfurl redirect
// @match        *://c.pc.qq.com/middlem.html*
// ==/UserScript==

(function () {
  try {
    const u = new URL(location.href);
    const pfurl = u.searchParams.get('pfurl');
    if (!pfurl) return;

    // pfurl 通常是 encodeURIComponent 过的
    const target = decodeURIComponent(pfurl);

    // 基本校验：只允许跳 http/https，避免被注入奇怪协议
    if (!/^https?:\/\//i.test(target)) return;

    // 替换当前页面为目标地址
    location.replace(target);
  } catch (e) {}
})();
