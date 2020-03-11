//function yang mempunyai nilai balik 
function nilai() {
	var ok = "yes";
	return ok;
}
var tampilkan = nilai();
console.log(tampilkan);

//function dengan parameter
function data(a) {
	console.log(a);
	}
data("tes");


//function sebelum di return
function nilaidata(a){
	console.log(a);
}
nilaidata("siap");

//function setelah di return
function nilaidata(a){
	console.log(a);
	var kembali = "no";
	return kembali;
}
nilaidata("siap");
var kembalikan = nilaidata();
console.log(kembalikan);

