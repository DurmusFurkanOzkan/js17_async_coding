//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------


//? Sync mantığını bir fonksiyonla tanımlamak
//? kendi delay fonksiyonumuzu oluşturduk.
const delay = (waitingTime) =>{
    
    const startTime = new Date().getTime();

    while (new Date().getTime() < startTime + waitingTime) {
        
    }

}

console.log("Hello");
// alert("Blocked")  //? Blocking


console.time("gecikme");
// delay(4000); //? blocking code - senkron
console.timeEnd("gecikme");

console.log("hi")



//* Asenkron (setTimeout())
//* -----------------------------------------




//? belirli bir süre sonra bir işlem yapmak için

//? async functionlar macrotask queue'ya atılır. 
//? microtasklar ve callstackler macrotask'a göre daha önceliklidir
//? burada da clg start callstackte setTimeout'da macrotask'de olduğundan 
//? clg start daha önce işlenir.
//? detaylı bakmak için taskQueus gifine bak.
setTimeout(() =>{
    console.log("Data fetched")
    // console.timeEnd("timer");
}, 0
)
console.log("start")
// console.time("timer");






















