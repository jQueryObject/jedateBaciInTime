var start = {
    format: 'YYYY-MM-DD hh:mm:ss',
    minDate: '1900-01-01 00:00:00', //设定最小日期为当前日期
//	festival:true,
  	isinitVal:true,
 	ishmsVal:false,
    maxDate: $.nowDate({DD:0}), //最大日期
    choosefun: function(elem, val, date){
        end.minDate = date; //开始日选好后，重置结束日的最小日期
        endDates();
    }
};
var end = {
    format: 'YYYY-MM-DD hh:mm:ss',
    minDate: '1900-01-01 00:00:00', //设定最小日期为当前日期
//	festival:true,
	isinitVal:true,
    maxDate: $.nowDate({DD:0}), //最大日期
    choosefun: function(elem, val, date){
        end.maxDate = date; //开始日选好后，重置结束日的最小日期
    }
};

//这里是日期联动的关键        
function endDates() {
    //将结束日期的事件改成 false 即可
    end.trigger = false;
    $("#inpend").jeDate(end);
}
$("#inpstart").jeDate(start);
$("#inpend").jeDate(end);

