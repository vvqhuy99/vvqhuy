
function SanPham(masp,theloai,gia, tensp, image) {
		this.masp = masp;
		this.theloai = theloai;
		this.gia = gia;
		this.tensp = tensp;
		this.image = image;
	}

var sp = new Array();

sp[0] = new SanPham ("0","iphone", "3.000.000", "Iphone 5s", "img/iphone/0.png");
sp[1] = new SanPham ("1","iphone", "15.000.000", "Iphone 8", "img/iphone/1.png");
sp[2] = new SanPham ("2","iphone","10.000.000", "Iphone 7 plus","img/iphone/2.png");
sp[3] = new SanPham ("3","iphone",  "14.500.000", "Iphone 8","img/iphone/3.png");
sp[4] = new SanPham ("4","iphone", "17.000.000", "Iphone 8 plus",  "img/iphone/4.png");
sp[5] = new SanPham ("5","iphone", "15.000.000", "Iphone 8", "img/iphone/5.png");
sp[6] = new SanPham ("6","iphone", "12.000.000", "Iphone 7 plus", "img/iphone/6.png");
sp[7] = new SanPham ("7","iphone", "2.500.000", "Iphone 4s", "img/iphone/7.png");
sp[8] = new SanPham ("8","iphone", "1.100.000", "Iphone 4", "img/iphone/8.png");
sp[9] = new SanPham ("9","iphone", "1.900.000", "Iphone 4s lock", "img/iphone/9.png");
sp[10] = new SanPham ("10","iphone", "2.900.000", "Iphone 5s lock", "img/iphone/10.png");
sp[11] = new SanPham ("11","iphone", "6.900.000", "Iphone 6s", "img/iphone/11.png");
sp[12] = new SanPham ("12","iphone", "5.900.000", "Iphone 6", "img/iphone/12.png");
sp[13] = new SanPham ("13","iphone", "11.900.000", "Iphone 7 Gray", "img/iphone/13.png");
sp[14] = new SanPham ("14","iphone", "20.900.000", "Iphone X", "img/iphone/14.png");
sp[15] = new SanPham ("15","iphone", "21.800.000", "Iphone XS", "img/iphone/15.png");
sp[16] = new SanPham ("16","samsung", "20.000.000", "Samsung note 9",  "img/samsung/0.png");
sp[17] = new SanPham ("17","samsung", "12.000.000", "Samsung s8",  "img/samsung/1.png");
sp[18] = new SanPham ("18","samsung", "10.000.000", "Samsung a9", "img/samsung/2.png");
sp[19] = new SanPham ("19", "samsung","10.000.000", "Samsung A9", "img/samsung/3.png");
sp[20] = new SanPham ("20", "samsung","12.000.000", "Samsung note 8", "img/samsung/4.png");
sp[21] = new SanPham ("21", "samsung","7.000.000", "Samsung A8", "img/samsung/5.png");
sp[22] = new SanPham ("22", "samsung","5.600.000", "Samsung J7", "img/samsung/6.png");
sp[23] = new SanPham ("23", "samsung","4.500.000", "Samsung Note 5", "img/samsung/7.png");
sp[24] = new SanPham ("24", "samsung","7.500.000", "Samsung FE", "img/samsung/8.png");
sp[25] = new SanPham ("25","xiaomi", "2.200.000", "XIAOMI Mi 3",  "img/xiaomi/0.png");
sp[26] = new SanPham ("26","xiaomi", "6.000.000", "XIAOMI Mi 4",  "img/xiaomi/1.png");
sp[27] = new SanPham ("27","xiaomi", "8.900.000", "XIAOMI Note 5", "img/xiaomi/2.png");
sp[28] = new SanPham ("28","xiaomi", "2.900.000", "XIAOMI Redmi s5", "img/xiaomi/3.png");
sp[29] = new SanPham ("29","xiaomi", "3.900.000", "XIAOMI Redmi s2", "img/xiaomi/4.png");
sp[30] = new SanPham ("30","xiaomi", "4.600.000", "XIAOMI Mi 8", "img/xiaomi/5.png");
sp[31] = new SanPham ("31","xiaomi", "2.500.000", "XIAOMI Mi 7", "img/xiaomi/6.png");
sp[32] = new SanPham ("32","xiaomi", "3.400.000", "XIAOMI Redmi 4s", "img/xiaomi/7.png");
sp[33] = new SanPham ("33","xiaomi", "5.900.000", "XIAOMI Note 8", "img/xiaomi/7.png");
sp[34] = new SanPham ("34","oppo", "3.500.000", "OPPO A3s",  "img/oppo/0.png");
sp[35] = new SanPham ("35","oppo", "5.000.000", "OPPO A7",  "img/oppo/1.png");
sp[36] = new SanPham ("36","oppo", "4.000.000", "OPPO F7",  "img/oppo/2.png");
sp[37] = new SanPham ("37","oppo", "8.000.000", "OPPO F9",  "img/oppo/3.png");
sp[38] = new SanPham ("38","oppo", "5.500.000", "OPPO A4s",  "img/oppo/4.png");
sp[39] = new SanPham ("39","oppo", "3.500.000", "OPPO A71",  "img/oppo/5.png");
sp[40] = new SanPham ("40","oppo", "6.300.000", "OPPO A83",  "img/oppo/6.png");
sp[41] = new SanPham ("41","oppo", "7.100.000", "OPPO Find 7",  "img/oppo/7.png");
sp[42] = new SanPham ("42","oppo", "2.500.000", "OPPO F5",  "img/oppo/7.png");
sp[43] = new SanPham ("43","ipad", "8.800.000", "IPAD Air",  "img/ipad/0.png");
sp[44] = new SanPham ("44", "ipad","4.000.000", "IPAD Air 3g", "img/ipad/1.png");
sp[45] = new SanPham ("45", "ipad","6.100.000", "IPAD Pro 64GB", "img/ipad/2.png");
sp[46] = new SanPham ("46", "ipad","9.600.000", "IPAD Pro 128GB", "img/ipad/3.png");
sp[47] = new SanPham ("47", "ipad","7.000.000", "IPAD Pro", "img/ipad/4.png");
sp[48] = new SanPham ("48", "ipad","3.900.000", "DOCOMU", "img/ipad/5.png");
sp[49] = new SanPham ("49", "ipad","6.300.000", "IPAD Pro 2016", "img/ipad/6.png");
sp[50] = new SanPham ("50", "ipad","12.100.000", "IPAD Pro 2017", "img/ipad/7.png");


		

var db = {
	maLoaiSP : {iphone: 'Iphone', samsung:'Samsung', xiaomi: 'Xiaomi', oppo:'Oppo', ipad:'Ipad'},
	khoiTao: function(){
		if (!window.localStorage.getItem('dsSanPham'))
			this.khoiTaoSP()
	},
	khoiTaoSP : function(){
		var products = sp.map(function(product){
			return {
				masp:product.masp,
				theloai:product.theloai,
				gia:product.gia,
				tensp:product.tensp,
				image:product.image
			}
		})

		window.localStorage.setItem('dsSanPham', JSON.stringify(products))
	},
	layDsSP: function(){
		var dsSP = window.localStorage.getItem('dsSanPham')
		if (dsSP)
			return JSON.parse(dsSP)
	},
	luuDsSP: function(dsSP){
		if (dsSP)
			window.localStorage.setItem('dsSanPham', JSON.stringify(dsSP))
	},
	loaiSP: function(maLoaiSp){
		return this.maLoaiSP[maLoaiSp]
	},
	suaSP: function(spMoi){
		var dsSP = this.layDsSP()
		dsSP = dsSP.map(function(spCu){
			console.log(spCu)
			if (spMoi.masp==spCu.masp){
				return Object.assign(spCu, spMoi)
			}else{
				return spCu
			}
		})
		console.log(2222, dsSP, spMoi)
		this.luuDsSP(dsSP)
	},
	themSP: function(spMoi){
		var dsSP = this.layDsSP()
		dsSP.push(spMoi)
		this.luuDsSP(dsSP)	
	},
	xoaSP: function(spMoi){
		var dsSP = this.layDsSP()
		dsSP = dsSP.filter(function(spCu){
			return spCu.masp != spMoi
		})
		this.luuDsSP(dsSP)	
	}
}

db.khoiTao()
// /*San pham cho trang chinh*/
// function sanphamtrangchinh(){
//     var listsp="";
//     var sp2=document.getElementById('cacspdienthoai');
//     for(i=0;i<sp.length;i++){
//             listsp=listsp+'<div class="sanpham"><ul><li><a href="chitiet.html?'+sp[i].theloai+'?'+sp[i].masp+'"><img src="'+sp[i].image+'">\
//             </a><p class="ten">'+sp[i].tensp+'</p>\
//             <p class="gia">Giá: '+sp[i].gia+'đ</p>\
//             <div class="muahang">\
//             <button value="'+sp[i].theloai+'&'+sp[i].masp+'" class="them" onclick="giohang()">Mua</button></div></li></ul></div>';
//             if(listsp==8) break;
//         }
//         document.getElementById('tentheloai').innerHTML="---TẤT CẢ SẢN PHẨM---";
//         sp2.innerHTML=listsp;
//     }
//     /*Lay dia chỉ va phan trang*/
// function laydiachi(){
//     var diachi=window.location.href;
//     var loai=diachi.split("?");
//     var loaisp=loai[1];
//     var sotrang=1,sosptrong1trang=0;
//     var spbatdau=loai[2];
//     var s="";
//     var trang=""; 
//     var soluongsanpham = 0;   
//     for(i=spbatdau;i<sp.length;i++){
//         if(sp[i].theloai==loaisp){
//             sosptrong1trang++;
//             s=s+'<div class="sanpham"><ul><li><a href="chitiet.html?'+loaisp+'?'+sp[i].masp+'"><img src="'+sp[i].image+'">\
//             </a><p class="ten">'+sp[i].tensp+'</p>\
//             <p class="gia">Giá: '+sp[i].gia+'đ</p>\
//             <div class="muahang">\
//             <button value="'+sp[i].theloai+'&'+sp[i].masp+'" class="them" onclick="giohang()">Mua</button></div></li></ul></div>';
//             if(sosptrong1trang==8) break;
//         }
//     }
//     for(i=0;i<sp.length;i++){
//         if(sp[i].theloai===loaisp){
//             soluongsanpham = soluongsanpham+1;
//         }
//     }
//     sotrang=Math.ceil(soluongsanpham/8);
//     for(i=0;i<sotrang;i++){
//        var j=0;
//         j=i+1;
//         spbatdau=i*8;
//         trang=trang + '<ul><li class="phantrang"><a href="index.html?'+loaisp+'?'+spbatdau+'">'+j+'</a></li></ul>';
//     }
//     document.getElementById("tentheloai").innerHTML ="--Điện thoại: " + loaisp.toUpperCase()+"--";
//     document.getElementById("cacspdienthoai").innerHTML=s;
//     document.getElementById("sotrangcuatheloai").innerHTML=trang;
// }
// window.onload=function(){
//     sanphamtrangchinh();
//     laydiachi();
// }
