const UA = window.navigator.userAgent
const UP = window.navigator.platform
export const isAndroid = !!UA.match(/android/ig)
export const isIos = !!UA.match(/iphone|ipod|itouch/ig)
export const isIpad = !!UA.match(/ipad/ig)
export const isItouch = !!UA.match(/itouch/ig)
export const isIos9 = !!UA.match(/OS 9/ig)
export const isMacOS = !!UA.match(/Mac OS/ig)
export const isAppleDevice = isIos || isIpad || isItouch || isMacOS;
export const isYx = !!UA.match(/MailMaster_Android/i)
export const isNewsapp = !!UA.match(/newsapp/i)
export const isWeixin = (/MicroMessenger/ig).test(UA)
export const isYixin = (/yixin/ig).test(UA)
export const isQQ = (/qq/ig).test(UA)

export const isIDevicePhone = (/iphone|ipod|itouch/gi).test(UP)
export const isIDeviceIpad = !isIDevicePhone && (/ipad/gi).test(UP)
export const isIDevice = isIDevicePhone || isIDeviceIpad
export const isandroid2X = !isIDevice && (/android\s?2\./gi).test(UA)
export const isIEMobile = !isIDevice && !isAndroid && (/MSIE/gi).test(UA)

// hammerjs 探测是否是mobile
export const isMobile = /mobile|tablet|ip(ad|hone|od)|android/i.test(UA)
// hammer.js 探测是否是触摸设备，但不知为何，在引入hammer.js的页面中返回true
export const SUPPORT_TOUCH = ('ontouchstart' in window)
