//特殊说明，required一定要用angularJS自带的
var validations = [
  ['required','blur',/^.+$/,'必填信息'],
  ['positiveInteger','watch',/^[0-9]+$/,'请输入一个正整数!'],
  ['nullOrPositiveInteger','blur',/^([0-9]+)*$/,'请输入一个正整数!'],
  ['ip','blur',/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/,'请输入正确的IP地址！'],
  ['nullOrIp','blur',/^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3})*$/,'请输入正确的IP地址！'],
  ['url','blur',/^((https|http|ftp|rtsp|mms)?:\/\/)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/,'请输入正确的URL地址！']
];