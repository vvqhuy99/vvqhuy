function kiemtradangky(){
	var taikhoan=document.getElementById("username").value;
	var matkhau=document.getElementById("pass").value;
	var nhaplaimk=document.getElementById("repass").value;
	if(taikhoan == "" || matkhau == "" || nhaplaimk == ""){
		alert("Mời nhập đầy đủ thông tin");
	}
	else{
		if(matkhau != nhaplaimk ){
			alert("2 Mật khẩu không khớp xin nhập lại");
		}
		else{
			var obj={};
			obj.username = taikhoan;
			obj.pass = matkhau;
			obj.trang_thai_dang_nhap = 0;
			localStorage.setItem('tai_khoan', JSON.stringify(obj));
			alert("Đăng ký thành công");
			window.location.assign("dangnhap.html");
		}
	}
}
function kiemtradangnhap(){
	var tkadmin='admin';
	var mkadmin='123';
	var username1=document.getElementById('username1').value;
	var pass=document.getElementById('pass1').value;
	if(username1 == tkadmin && pass == mkadmin){
		alert("Đăng nhập admin thành công");
		window.location.assign('admin/admin.html');
	}
	else{
	if(username1 == "" || pass == ""){
		alert("Cần nhập đầy đủ thông tin");
	}
	else
	{
		var dk =JSON.parse(localStorage.getItem('tai_khoan'));
		if(dk.username != username1) alert("Không tồn tại tài khoản");
		else{
			if(pass != dk.pass)
			{
				alert("Mật khẩu sai");
			}
			else{
				dk.trang_thai_dang_nhap = 1;
				localStorage.setItem('tai_khoan',JSON.stringify(dk));
				alert("Đăng nhập thành công");
				window.location.assign("index.html");
			}
		}
	}
}
	
}
function xoaham(){
	var x=confirm("Bạn có muốn đăng xuất không");
	if(x==true){
		localStorage.clear();
		window.location.assign("index.html");
	}
	return false;
}
function kiemtra(){
	var dangky=document.getElementById('singup');
	var	dangnhap=document.getElementById('login')
	if(localStorage.getItem('tai_khoan')){
	var tk=JSON.parse(localStorage.getItem('tai_khoan'));
		if(tk.trang_thai_dang_nhap==1){
			dangky.innerHTML='<a href="#">Hello: '+tk.username+'</a>';
			dangnhap.innerHTML='<a href="#" onclick="xoaham()">ĐĂNG XUẤT</a>';
		}
	}
}
document.getElementById('singup').innerHTML="ĐĂNG KÝ";
document.getElementById('login').innerHTML="ĐĂNG NHẬP";
kiemtra();
/*Kiem tra dang nhap va dang xuat */
// Xác nhận mua hang
function xacnhanmuahang(){
		var tk=JSON.parse(localStorage.getItem('tai_khoan'));
			if(!localStorage.getItem('tai_khoan') || tk.trang_thai_dang_nhap == 0){
				dn=confirm('Bạn phải đăng ký thành viên và đăng nhập \nmới được mua hàng');
				if(dn==true){
					window.location.assign("dangky.html");
				}
				return false;
			}
			else{
				alert("Bạn đã mua hàng thành công\n Cảm ơn và hẹn gặp lại");
				window.location.assign("index.html");
			}
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
	var cart = document.getElementById("mycart");
	var cart_user = cart.offsetTop;
	if (window.pageYOffset > cart_user) {
		cart.classList.add("cart_user");
	  } else {
		cart.classList.remove("cart_user");
	  }
}
function topFunction() {
		if(document.body.scrollTop !=0 || document.documentElement.scrollTop != 0){
		window.scrollBy(0, -50);
		setTimeout(topFunction,10);
		} else{
			clearTimeout(topFunction);
		}
		
}