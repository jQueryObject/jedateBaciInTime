# jedate时间回溯功能jedateBaciInTime

效果如下：
fdfdf
![](images/img.gif)

demo code:
```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jeDate日期时间回溯</title>
	<link rel="stylesheet" href="css/jedate.css" />
</head>
<body>
<input type="button" value="最后1年" class="lastYear"/>
<input type="button" value="最后6个月"  class="lastSixMonth"/>
<input type="button" value="最后90天"  class="lastNinetyDays"/>
<input type="button" value="最后60天"  class="lastSixtyDays"/>
<input type="button" value="最后30天"  class="lastThirtyDays"/>
<input type="button" value="最后7天"  class="lastSevenDays"/>

<input type="button" value="最后24小时"  class="lastTwentyfourHou"/>
<input type="button" value="最后12小时"  class="lastTwelveHou"/>
<input type="button" value="最后4小时"  class="lastFourHou"/>
<input type="button" value="最后1小时"  class="lastAnHou"/>
<input type="button" value="最后30分钟"  class="lastThirtyMin"/>
<input type="button" value="最后15分钟"  class="lastFifteenMin"/>

<input type="button" value="前天"  class="preYesterDaytime"/>
<input type="button" value="昨天"  class="yesterdayTime"/>
<input type="button" value="今天"  class="todayTime"/>
<div class="left-date">
	<div class="left-date-start">
		<p>开始时间</p><input class="datainp wicon" id="inpstart" type="text" value="" readonly>
	</div>
	<div class="left-date-end">
		<p class="p-end">结束时间</p><input class="datainp wicon" id="inpend" type="text" value="" readonly>
	</div>
</div>
</body>
</html>
<script src="js/jquery-3.2.1.min.js" ></script>
<script src="js/jquery.jedate.min.js" ></script>
<script src="js/jedate.js" ></script>
<script>
	$(function(){
		//实现日期选择联动
		var start = {
			format: 'YYYY-MM-DD hh:mm:ss',
//            minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
			//festival:true,
			maxDate: $.nowDate({DD:0}), //最大日期
			choosefun: function(elem,datas){
				end.minDate = datas; //开始日选好后，重置结束日的最小日期
				endDates();
			}
		};
		var end = {
			format: 'YYYY-MM-DD hh:mm:ss',
			maxDate:$.nowDate({DD:0}), //最大日期
			choosefun: function(elem,datas){
				start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
			}
		};
		function endDates() {
			end.trigger = false;
			$("#inpend").jeDate(end);
		}
		$("#inpstart").jeDate(start);
		$("#inpend").jeDate(end);
		$(".todayTime").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-0"
					},'YYYY-MM-DD 00:00:00',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".yesterdayTime").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-1"
					},'YYYY-MM-DD 00:00:00',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-1"
					},'YYYY-MM-DD 23:59:59',val));
				}
			});
			$(".jedatetodaymonth").click();
		});
		$(".preYesterDaytime").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-2"
					},'YYYY-MM-DD 00:00:00',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-2"
					},'YYYY-MM-DD 23:59:59',val));
				}
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastFifteenMin").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						mm:"-15"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastThirtyMin").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						mm:"-30"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastAnHou").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						hh:"-1"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastFourHou").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						hh:"-4"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastTwelveHou").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						hh:"-12"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastTwentyfourHou").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						hh:"-24"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastSevenDays").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-7"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastThirtyDays").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-30"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastSixtyDays").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-60"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastNinetyDays").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						DD:"-90"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastSixMonth").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						MM:"-6"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
		$(".lastYear").click(function(){
			$.jeDate("#inpstart",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss',
				choosefun:function(elem, val, date) {
					elem.val($.nowDate({
						YYYY:"-1"
					},'YYYY-MM-DD hh:mm:ss',val));
				}
			});
			$(".jedatetodaymonth").click();
			$.jeDate("#inpend",{
				trigger:false,
				isTime:true,
				isinitVal:true,
				format: 'YYYY-MM-DD hh:mm:ss'
			});
			$(".jedatetodaymonth").click();
		});
	})
</script>
```

