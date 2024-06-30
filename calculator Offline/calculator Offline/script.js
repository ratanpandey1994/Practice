function swap(selectList1,selectList2){
    var temp = document.getElementById('selectList1').value;
	var temp1 = document.getElementById('selectList2').value;
    document.getElementById('selectList1').value = temp1;
	document.getElementById('selectList2').value = temp;
}
	
function calculate(){
	var selectList1 = document.getElementById('selectList1');
	var selectList2 = document.getElementById('selectList2');
	
    if (selectList1.value === "ADA" && selectList2.value === "ROCKET") {
      rate = 100;
    }
    if (selectList1.value === "ROCKET" && selectList2.value === "ADA") {
      rate = 0.01;
    }
	
	
	var amount = document.getElementById('amount').value;
	if(amount>0) { } else { amount=1 }
	var converted = parseFloat(amount) * parseFloat(rate);
	
	converted = converted.toFixed(2);
	document.getElementById('finalamount').innerHTML = amount + selectList1.value + ' * ' + rate + ' Exchange = ' + converted + selectList2.value;
	
}