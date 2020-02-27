<<<<<<< HEAD

document.onreadystatechange = function () {
  
	if (document.readyState === "interactive") {
	
		var ul = document.getElementById("myul");
		var rownum = ul.getElementsByTagName("li").length - 1;
		document.getElementById("rownum").innerHTML = '物件數量: ' + rownum;
		
		var total = 0;
		for(i=0; i<rownum; i++){
			total += parseInt(document.getElementById("unitprice").innerText);	
		}
		
		document.getElementById("totalprice").innerHTML = total + ' 元';
		
	}

=======

document.onreadystatechange = function () {
  
	if (document.readyState === "interactive") {
	
		var ul = document.getElementById("myul");
		var rownum = ul.getElementsByTagName("li").length - 1;
		document.getElementById("rownum").innerHTML = '物件數量: ' + rownum;
		
		var total = 0;
		for(i=0; i<rownum; i++){
			total += parseInt(document.getElementById("unitprice").innerText);	
		}
		
		document.getElementById("totalprice").innerHTML = total + ' 元';
		total = 0
	}

>>>>>>> 5360f7bb3315f44d677702ac98a436a9f68d3092
}