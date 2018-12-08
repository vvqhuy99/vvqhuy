/*Gio hang*/
function giohang(){
	var them = document.getElementsByClassName('them');
    for (var i = 0; i < them.length; i++) {
        them[i].addEventListener('click', function() {
            var thong_tin = this.value.split('&');
            var obj = {
                danh_muc: thong_tin[0],
                ma_sp: thong_tin[1]
            };
			localStorage.setItem("box_" + (localStorage.length-1), JSON.stringify(obj));
            alert("Bạn đã thêm vào giỏ hàng thành công");
        });
    }
}
/*Load gio hang*/
function load_vao_cart(){
	var chieudai=localStorage.length-1;
	var sp = db.layDsSP()
	for(i=0;i<chieudai;i++){
		var boxone="box_"+i;
		if(localStorage.getItem(boxone)){
			var box = JSON.parse(localStorage.getItem(boxone));
            var key_for_url = box.danh_muc+'?'+box.ma_sp;
            var masp = parseInt(box.ma_sp);
			var list_sp = document.getElementById('sp_da_them');
			
			if (!list_sp) return

			list_sp.innerHTML += '<div class="sp_cua_ban">\
			<img src="'+sp[masp].image+'">\
			<div class="thong_tin_sp">\
			<a href="chitiet.html?'+key_for_url+'"><p>'+sp[masp].tensp+'</p></a>\
			<p style="font-size: 20px;">Cung cấp bởi NOVA</p>\
			<a href="#"><p style="margin-top:40px; color:black; font-size: 20px;">Xóa</p></a>\
			</div>\
			<div class="gia_sp">\
				<p>'+sp[masp].gia+'đ</p>\
				<p style="text-decoration: line-through;">25.000.000đ</p>\
				<p>-80%</p>\
			</div>\
			<div class="so_luong_cart">\
				<form>\
					<input type="text" value="1" class="soluongsp"><br>\
					<input type="button" value="OK" style="width:40px; height: 30px;margin-top: 20px; font-size: 18px;">\
				</form>\
			</div>\
		</div>';
		}
    }
}
function xoa_all() {
	var all=confirm('Bạn có muốn xóa không');
	if(all==true){
    	var temp = localStorage.length-1;
    	for (var i = 0; i < temp; i++) {
        	console.log('temp = ' + temp);
        		if (localStorage.getItem('box_' + i)) {
            	localStorage.removeItem('box_' + i);
        	}
        		console.log('dele = ' + 'deleted_box_' + i);
        		localStorage.removeItem('deleted_box_' + i);
		}
		window.location.assign('giohang.html');
	}
	else return false;
}
// function xoa_cart() {
// 	var delete_cart = document.getElementById('clear_all');
// }

 function tinh_tien(){
	var chieudai=localStorage.length-1;
	var sum=0;
	for(i=0;i<chieudai;i++){
		var boxone="box_"+i;
		var box=JSON.parse(localStorage.getItem(boxone));
		var masp=box.ma_sp;
		sum += parseFloat(sp[masp].gia);
		var tong = document.getElementById('tong_tien');
		if (tong)
			tong.innerHTML ='<p style="text-align:center;">Thông tin đơn hàng:</p>\
			<hr>\
			<p>Số lượng:<span>'+chieudai+'</span></p>\
			<hr>\
			<p>Tạm tính:<span>'+sum+' TRIỆU</span></p>\
			<hr>\
			<p>Thành tiền:<span>'+sum+' TRIỆU</span></p>\
			<hr>\
			<button type="button" class="xac_nhan_cart" onclick="xacnhanmuahang()">XÁC NHẬN MUA HÀNG</button>';
	}	
}

function spCount(){
	var spCountSpan = document.getElementById('sp_count'),
		spCount = localStorage.length-1

	if (spCountSpan)
		spCountSpan.innerText = spCount
}

window.addEventListener('load',giohang);
load_vao_cart();
tinh_tien();
spCount()
