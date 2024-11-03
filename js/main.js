
 // TASK  5
// 1)
// Bir array yaradin adlardan ibaret olsun hemin arraya her hansisa bir adi
// arrayin metodlarindan isdifade etmekle daxil edin daha sonra silin


// let numers = ["Meleyke","Sehane","Aytac","Nurlana"]

// numers.unshift ("meli")// burada adlarin evveline yeni bir ad eleve etdim
// numers.shift()//  burada ise adlarin evveline yazdigim yeni adi sildim
// console.log(numers);

// 2)
let obj = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 10,
        driving: true
    }, {
        name: "Veli",
        surname: "Aliyev",
        age: 17,
        driving: false,
    }, {
        name: "Mehman",
        surname: "Aliyev",
        age: 25,
        driving: true,
    },{
        name: "Nicat",
        surname: "Aliyev",
        age:26,
        driving: false
    },{
        name: "Nihad",
        surname: "Aliyev",
        age:15,
        driving: true
    }
]

// 3)
// bu arrayde adi n ile baslayanlari loga cixaracaq funksiya qurun
// yasi 20 den boyuk ve 26 den kicik olan objectleri console.loga cixaran funksiya yazin
// yasi cut olan ve suruculuk vesieqesi olanlari loga cixaran funksiya yazin
 
function getPerson (){
    for( let i=0; i<5; i++){
        if(obj[i].name[0] =="N" ){

            console.log(obj[i].name);
            
        }
    }
}
getPerson()

// function getPerson (){
//     for( let i=0; i<5; i++){
//         if(obj[i].age >20 && obj[i].age < 26 ){

//             console.log(obj[i]);
            
//         }
//     }
// }
// getPerson()


// function getPerson (){
//     for( let i=0; i<5; i++){
//         if(obj[i].age % 2===0 || obj[i].driving ===true ){

//             console.log(obj[i]);
            
//         }
//     }
// }
// getPerson()







// 4)
// obj arrayini tersine yazdirin yeni baslangic deyer Ali deyil Nihad olsun

// console.log(obj.reverse()); // bu kod en son yazilan adi en birinci yazir en birinci adi ise en sonda 





  
