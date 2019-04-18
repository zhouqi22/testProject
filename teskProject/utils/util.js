/**
   *   对Date的扩展，将 Date 转化为指定格式的String
   *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   *   例子：
   *   (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
   *   (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
   *   utillib.fmtDate(new Date(time),'yyyy-MM-dd hh:mm');
   */

const fmtDate = (date, fmt) => {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}
//解析url中的参数
const getParamsFromUrl = (url) => {
  var name, value;
  var str = url; //取得整个地址栏
  var num = str.indexOf("?")
  if (num < 0) {
    return null;
  }
  str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

  var arr = str.split("&"); //各个参数放到数组里
  console.log(arr)
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    num = arr[i].indexOf("=");
    if (num > 0) {
      name = arr[i].substring(0, num);
      value = arr[i].substr(num + 1);
      result[name] = value;
    }
  }
  return result;
}
/**
   * 根据params 拼接get参数
   * return  string
   */
const getGETParamsJoin = (params) => {
  var temp = '';
  for (var name in params) {
    temp += name + "=" + params[name] + "&";
  }
  temp = temp.replace(/&$/, '')
  return temp;
}
// 六个工具类:用于判断是否是对象类型，是否是数组，是否是字符串，是否是number，是否是方法，获取对象长度.
 const isObj = (object) => {
  return object && typeof (object) == 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object object]";
}
const isArray = (object) => {
  return object && typeof (object) == 'object' && object.constructor == Array;
}
const isString = (str) => {
  return str && (typeof str == 'string') && str.constructor == String;
}
const isNumber = (obj) => {
  return obj && (typeof obj == 'number') && obj.constructor == Number;
}
const isFunction = (obj) => {
  return obj && (typeof obj == 'function') && obj.constructor == Function;
}

module.exports = {
  fmtDate: fmtDate,
  isFunction: isFunction,
  isNumber: isNumber,
  isString: isString,
  isArray: isArray,
  isObj: isObj,
  getParamsFromUrl: getParamsFromUrl,
  getGETParamsJoin: getGETParamsJoin
}
