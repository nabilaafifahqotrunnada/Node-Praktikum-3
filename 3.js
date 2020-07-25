//membuat class
class perhitunganBerat{
    //konstruktor berisi atribut dari Bu Astuti
    constructor(b,t){
        this.berat = b
        this.tinggi = t
    }

    //fungsi yang berisi operasi harga dan penambahan seluruhnya
    perhitungan = () => {
        return this.berat / ((this.tinggi/100) ** 2)
    }
}

//pembuatan objek yang dihitung
let data = new perhitunganBerat(90,170)
//perhitungan bmi
let bmi = data.perhitungan();

//pengelompokan status berat badan berdasarkan bmi
if(bmi < 18.5){
    console.log("Status Berat Badan = Kekurangan Berat Badan");
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("Status Berat Badan = Normal (Ideal)");
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("Status Berat Badan = Kelebihan Berat Badan");
}else{
    console.log("Status Berat Badan = Kegemukan (Obesitas)");
}