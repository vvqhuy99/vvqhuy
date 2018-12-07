//qc là quảng cáo;

var mangqc=0;
function quangcao()
{
	chuyenqc(mangqc = 0);
}


function chuyenqc()
{
	
    document.getElementById("ad_1").innerHTML='<img src="img/banner/'+mangqc+'.jpg">';
	mangqc++;
	if(mangqc==3)
	{
		mangqc=0;
	}
	setTimeout(chuyenqc,4200);
}


/*San pham cho trang chinh*/
function sanphamtrangchinh(){
    var listsp="";
    var dem=0;
    var sp2=document.getElementById('cacspdienthoai');
    var sp = db.layDsSP()
    for(i=0;i<sp.length;i++){
        dem++;
        listsp=listsp+'<div class="sanpham">\
        <img src="img/hot.png" width="52px" height="32px" style="float:right; margin:2px;">\
        <ul><li><a href="chitiet.html?'+sp[i].theloai+'?'+sp[i].masp+'"><img src="'+sp[i].image+'">\
        </a><p class="ten">'+sp[i].tensp+'</p>\
        <p style="text-decoration: line-through;">Giá: 25.000.000đ</p>\
        <p class="gia">Giá: '+sp[i].gia+'đ</p>\
        <div class="muahang">\
        <button value="'+sp[i].theloai+'&'+sp[i].masp+'" class="them">Mua</botton></div></li></ul></div>';
        if(dem == 20) break;
    }
    document.getElementById('tentheloai').innerHTML="---SẢN PHẨM BÁN CHẠY---";
    sp2.innerHTML=listsp;
    //document.getElementById("sotrangcuatheloai").innerHTML='<ul><li class="phantrang active"><a>1</a></li></ul>';
}
    /*Lay dia chỉ va phan trang*/
function laydiachi(){
    var diachi=window.location.href;
    var loai=diachi.split("?");
    var loaisp=loai[1];
    var sotrang=1,sosptrong1trang=0;
    var spbatdau=loai[2];
    var s="";
    var trang=""; 
    var soluongsanpham = 0;   
    var sp = db.layDsSP()
    for(i=spbatdau;i<sp.length;i++){
        if(sp[i].theloai==loaisp){
            sosptrong1trang++;
            s=s+'<div class="sanpham">\
            <img src="img/hot.png" width="52px" height="32px" style="float:right; margin:2px;">\
            <ul><li><a href="chitiet.html?'+loaisp+'?'+sp[i].masp+'"><img src="'+sp[i].image+'">\
            </a><p class="ten">'+sp[i].tensp+'</p>\
            <p style="text-decoration: line-through;">Giá: 25.000.000đ</p>\
            <p class="gia">Giá: '+sp[i].gia+'đ</p>\
            <div class="muahang">\
            <button value="'+sp[i].theloai+'&'+sp[i].masp+'" class="them">Mua</button></div></li></ul></div>';
            if(sosptrong1trang==8) break;
        }
    }
    for(i=0;i<sp.length;i++){
        if(sp[i].theloai==loaisp){
            soluongsanpham = soluongsanpham+1;
        }
    }
    sotrang=Math.ceil(soluongsanpham/8);
    for(i=0;i<sotrang;i++){
       var j=0;
        j=i+1;
        spbatdau=i*8;
        trang=trang + '<ul><li class="phantrang"><a href="index.html?'+loaisp+'?'+spbatdau+'">'+j+'</a></li></ul>';
    }
    document.getElementById("tentheloai").innerHTML ="--Điện thoại: " +loaisp.toUpperCase()+"--";
    document.getElementById("cacspdienthoai").innerHTML=s;
    document.getElementById("sotrangcuatheloai").innerHTML=trang;
}
/*Tim kiem san pham */
function search() {
	var tim_kiem = document.getElementById('val_search');
	if(tim_kiem.value == "")
	{
		alert('Vui lòng nhập sản phẩm cần tìm');
	}
	else{
		tim_kiem.value =add_cong(xoa_dau(tim_kiem.value).toLowerCase());
		window.location.href = 'index.html?search&' +tim_kiem.value+'&0'+'&0';
	}
}
function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
function add_cong(str) {
    str = str.replace(/ /g, "-");
    return str;
}

function load_timkiem(){
	var url=window.location.href;
    var loaii=url.split('&');
    var tendt=loaii[1];
    var gia_nc=parseInt(loaii[2]);
    var theloai_nc=loaii[3];
    var dem_timkiem=0;
    var gia_max=0;
    var s="";
    switch (gia_nc) {
        case 1:
            gia_max = 5;
            break;
        case 5:
            gia_max = 10;
            break;
        case 10:
            gia_max = 25;
            break;
    }
    var sp = db.layDsSP()
	for(i = 0;i<sp.length;i++){
        var temtim = add_cong(xoa_dau(sp[i].tensp.toLowerCase()));
        var khoanggia = parseInt(sp[i].gia);
        if((temtim.indexOf(tendt) != -1 || tendt == "") && (theloai_nc == '0' || theloai_nc == sp[i].theloai)
        && (gia_nc == '0' || (khoanggia >= gia_nc && khoanggia <= gia_max))){
            dem_timkiem++;
            s=s+'<div class="sanpham"><ul><li><a href="chitiet.html?'+sp[i].theloai+'?'+sp[i].masp+'"><img src="'+sp[i].image+'">\
    		</a><p class="ten">'+sp[i].tensp+'</p>\
    	     <p class="gia">Giá: '+sp[i].gia+'đ</p>\
	         <div class="muahang">\
             <button value="'+sp[i].theloai+'&'+sp[i].masp+'" class="them">Mua</button></div></li></ul></div>';
        }
        if(dem_timkiem==24) break;
    }
    document.getElementById('cacspdienthoai').innerHTML=s;
    document.getElementById("tentheloai").innerHTML ="Kết Quả Tìm Kiếm";
    document.getElementById("sotrangcuatheloai").innerHTML='<ul><li class="phantrang"><a>1</a></li></ul>';
}
function timkiemnangcao(){
    var tennangcao = document.getElementById('noidung').value;
    var gia = document.getElementById('giatim').value;
    var loai = document.getElementById('loaitim').value;
    tennangcao = add_cong(xoa_dau(tennangcao));
    window.location.href = 'index.html?search&'+tennangcao+'&'+gia+'&'+loai;
}
// sanphamtrangchinh();
// laydiachi();
quangcao();
if (window.location.href.indexOf('?') === -1) {
    sanphamtrangchinh();
} else if (window.location.href.indexOf('?') != -1) {
    laydiachi();
}
if(window.location.href.indexOf('search&') != -1){
    load_timkiem();
}
