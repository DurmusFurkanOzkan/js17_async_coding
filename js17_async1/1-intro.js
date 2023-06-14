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
//? 5 saniye sonra içindekini çalıştır

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


//? setTimeOut Örnek 2


setTimeout(() =>{
    console.log("2000")
}, 2000
)
setTimeout(() =>{
    console.log("1000")
}, 1000
)

console.log("start")

//* Asenkron (setInterval, clearInterval)
//* ---------------------------------------

//? setInterval periyodik yapmak için 
//? her 10 saniyede şu işlemi yap gibi
//? clearInterval'da oluşturulan zamanı siliyor.

//? en az 1 saniyede bir işlem çalışır bu süre queues 
//? sıralarından dolayı uzayabilir.

//? clearInterval parametre olarak id alır. setInterval'da id döndürür.
//? ikisini eşleştirmek için setInterval id'sini clearInterval'a parametre olarak
//? vermeliyiz.
let count = 0;
const sec1 = setInterval(() => {
    console.log(++count)
    if (count > 9) {
        clearInterval(sec1)
    }
}, 1000);















