let region = [
  {
    name: "Füzuli ",
    village: [
      "Qaraxanbəyli",
      "Qərvənd",
      "Kənd Horadiz",
      "Yuxarı Əbdürrəhmanlı",
    ],
  },
  {
    name: "Cabrayil ",
    village: [
      "Böyük Mərcanlı",
      "Nüzgar",
      "Mehdili",
      "Çaxırlı",
      "Aşağı Maralyan",
      "Şəybəy",
      "Quycaq",
    ],
  },
  {
    name: "Tərtər ",
    village: ["Suqovuşan", "Talış kəndləri", "Çaylı "],
  },
  {
    name: "Xocavənd ",
    village: ["Hadrut", "Sur", "Bulutan", "Məlikcanlı", "Kəmərtük", "Təkə"],
  },
];

let regions = document.querySelector(".regions");

for (let i = 0; i < region.length; i++) {
  let villages = "";
  for (let j = 0; j < region[i].village.length; j++) {
    let addVillage = `
		<li class="list-group-item">${region[i].village[j]}</li>
		`;
    villages += addVillage;
  }
  let addRegion = `
	<div class="col-4 my-3 ">
               <div class="card">
                   <div class="card-header">
                     ${region[i].name}
                   </div>
                   <div class="card-body">
                      <ul class="list-group">
                         ${villages}
                     </ul>
                 </div>
                 </div>
           </div>
	`;
  regions.innerHTML += addRegion;
}

// ================== Ən çox kəndə sahib olan rayon=====================

function getBigRegion(arr) {
  let name = "";
  arr.forEach((element) => {
    if (element.village.length > 5) {
      name += element.name;
    }
  });
  return name;
}

console.log(getBigRegion(region));

function compare(arr) {
  let name = "";
  arr.forEach((elem) => {
    if (elem.village.length > elem.village.length) {
      name += elem.name;
    }
  });
  console.log(name);
}

compare(region);

// ============= a hərfi olan rayonların siyahısını =====================

function findLetter(arr) {
  let name = [];
  arr.forEach((elem) => {
    if (elem.name.includes("a")) {
      name.push(elem.name);
    }
  });
  return name;
}

console.log(findLetter(region));

// ================== Ümumi azad edilən kənd sayı ========================

function getAllVillages(arr) {
  arr.forEach((element) => console.log(element.village));
}

getAllVillages(region);

// or

function getVillage(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].village.length; j++) {
      console.log(arr[i].village[j]);
    }
  }
}

getVillage(region);

// ================ adı uzun olan rayonun kəndi =======================

function getVillageLen(arr) {
  let name = "";
  let village = "";
  arr.forEach((element) => {
    if (element.name.length >= 9) {
      name += element.name;
      village += element.village;
    }
  });
  console.log(`Azad olunan ${name} rayonlarin kendleri: ${village}`);
}

getVillageLen(region);

// ==========================================================================
// ==========================================================================
// =========================PRAGMATECH solution==============================

// for (let i = 0; i < region.length; i++) {
//     // her i dəyərinə qarşılıq gələn rayonun kəndləri üçün boş string yaradırıq
//     let villages="";
//     // her i dəyərinə qarşılıq gələn rayonun kəndlərini dövrə salırıq
//     for (let j = 0; j < region[i].village.length; j++) {

//         let addVillage = `
//             <li class="list-group-item">${region[i].village[j]}</li>
//         `;
//         villages += addVillage;
//       }
//     // dövr sonunda villages stringi daxilində o rayonun kəndləri toplanır
//     let addRegion = `
//       <div class="col-4 my-3 ">
//               <div class="card">
//                   <div class="card-header">
//                     ${region[i].name}
//                   </div>
//                   <div class="card-body">
//                      <ul class="list-group">
//                         ${villages}
//                     </ul>
//                 </div>
//                 </div>
//           </div>
//       `;
//     regions.innerHTML += addRegion;
//   }

// ==========================================================================

// for (let i = 0; i < region.length; i++) {
//   let addRegion = `
// 	<div class="col-4">
// 			<div class="card">
// 				<div class="card-header">
// 				  ${region[i].name}
// 				</div>
// 				<div class="villages-list">
// 					<ul class="list-group list-group-flush village">

// 					</ul>
// 			  	</div>
// 			  </div>
//         </div>
// 	`;
//   regions.innerHTML += addRegion;
// }

// let villages = document.querySelector(".village");
// for (let i = 0; i < region.length; i++) {
//   for (let j = 0; j < region[i].village.length; j++) {
//     // console.log(region[i].village)
//     let addVillage = `
// 		<li class="list-group-item">${region[i].village[j]}</li>
// 	`;
//     villages.innerHTML += addVillage;
//   }
// }
