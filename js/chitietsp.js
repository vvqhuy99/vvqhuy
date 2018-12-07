function Chi_tiet_sp(){
    var diachi=window.location.href;
	var loai=diachi.split("?");
	var loaisp=loai[1];
    var i=loai[2];
    var sp = db.layDsSP()
    for(i=0;i<sp.length;i++){
        if(sp[i].theloai == loaisp && sp[i].masp==loai[2]){
            document.getElementById('hinhsp').innerHTML='<img src="'+sp[i].image+'">';
            document.getElementById('chitiets').innerHTML='<p class="ten">Điện Thoại:'+sp[i].tensp+'</p>\
            <p class="giasp" style="text-decoration: line-through;">Giá: 25.000.000đ</p>\
            <p class="giasp">Giá sản phẩm:'+sp[i].gia+'đ</p>\
            <p class="baohanh">-Bảo hành:</p>\
            <p><i>-Bảo hành 12 tháng tại các trung tâm chính hãng được ủy quyền, đổi mới 30 ngày đầu tiên, 1 đổi 1 phụ kiện đi kèm 12 tháng nếu lỗi do nhà sản xuất</i></p>\
            <button value="'+sp[i].theloai+'&'+sp[i].masp+'" class="them">THÊM VÀO GIỎ HÀNG</button>';
            break;
        }
    }
}
   Chi_tiet_sp();