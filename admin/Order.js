function myFunction(button)
{	
	var txt;
    var r = confirm("Bạn có muốn chấp nhận đơn hàng ko");
    if (r == true) {
        txt = "Chập nhận!";
    } else {
        txt = "Chưa Xử Lý...";
    }
    button.parentElement.parentElement.querySelector('.status').innerHTML = txt;

    if (r == true) {
    	button.parentElement.parentElement.querySelector('.change').innerHTML = "Đơn Hàng Đã Giao";
    }
    



    //document.getElementById("a1").innerHTML = txt;

}
function myFu(button)
{	
	var tx;
    var t = confirm("Bạn có muốn xóa đơn hàng ko");
    if (t == true) {
        tx = "Bạn đã xóa ĐH";
    } else {
        tx = "Chưa Xử Lý...";
    }
    button.parentElement.parentElement.querySelector('.status').innerHTML = tx;
 //   document.getElementById("a1").innerHTML = tx;
 	if (t == true) {
 		button.parentElement.parentElement.querySelector('.change').innerHTML = "Đơn Hàng Đã Xóa";
 	}
}

function  hienHide(button)
	{
		var hide = document.querySelectorAll('.hide')
		var i;
		for (i=0; i<hide.length; i++) {
			 hide[i] ;
			 hide[i].style.display = '';		}
		
	}
