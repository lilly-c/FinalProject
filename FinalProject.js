//To go to the next page html
/*document.getElementById("btn").onclick= function () {
     location.href = "FoodWasteSearch.html"; 
    };

//to select zip code n store name

//document.getElementById("zipCode").onchange = function () {myFunction()};

//function myFunction () {
     //var x = document.getElementById("zipCode");
    // x.value = x.value.

//}


/*var option = document.createElement("option");
option.text = "Text";
option.value = "myvalue";
var select = document.getElementById("zipCode");
select.appendChild(option);
*/
const storesData = {
    ballerup: [
      "Ballerup Centret-Føtex",
      "Ballerup Borupvang2-Føtex",
      "Ballerup Centret-Netto",
      "Ballerup Vestbuen 157-Netto",
    ],
    herlev: [
      "Herlev Big Shopping-Føtex",
      "Herlev Bygade 9-Føtex",
      "Herlev Big Shopping-Netto",
      "Herlev Tvedvangen 201-Netto",
    ],
    vanløse: [
      "Vanløse Torv-Føtex",
      "Vanløse Jyllingevej 9-Netto",
      "Vanløse Jernbane Allé 36-Netto",
    ],
  };
  
 const storesID = {
  "Ballerup Centret-Føtex": "c891c2a5-e302-4204-a7f5-8132ff5f5856",
  "Ballerup Borupvang2-Føtex": "cd348cf3-07ae-4af4-a321-d8e6382183b2",
  "Ballerup Centret-Netto": "451116d7-397d-4751-b09d-fbbb35520065",
  "Ballerup Grantoftecentret-Netto": "8b7eb697-d505-431f-ad89-835d324cf2e7",
  "Herlev Big Shopping-Føtex": "a4ae5b26-ec5b-4331-8d52-f898ceef6c02",
  "Herlev Bygade 9-Føtex": "d902d333-9f2c-432d-bd2c-fa823b80306b",
  "Herlev Big Shopping-Netto": "cb1fdce2-9862-453b-8d22-a6d9abb2eaaf",
  "Herlev Tvedvangen 201-Netto": "edc497b9-5be3-40c8-b8bc-e70f1195b6d6",
  "Vanløse Torv-Føtex": "4956b28a-0bfd-4766-8146-ec2c70812e6a",
  "Vanløse Jyllingevej 9-Netto": "0b52d54b-66e1-4d8c-a4a4-e243b5120946",
  "Vanløse Jernbane Allé 36-Netto": "c2f95cbd-f178-4080-b3c0-04a05a3ded65",
};

const storeDropdown = document.getElementById("storeName");
const zipDropdown = document.getElementById("zipCode");
  
//console.log(storeDropdown);
document.getElementById("zipCode").onchange = function() 
{
  // EMPTYING THE STORE SELECT/DROPDOWN BEFORE ADDING NEW STORES 
  let optionVal = storeDropdown.getElementsByTagName("option") ;
  for (let i = optionVal.length ; i--;)
   {
    storeDropdown.removeChild(optionVal[i])
  }
    // ADDING OPTIONS VALUE TO THE STORE SELECT/DROPDOWN
    let zipVal = zipDropdown.value;
    for (let key in storesData) 
    {
        if ( key == zipVal) 
        {
              for (let i = 0; i < storesData[key].length; i++ ){
                let optionVal = document.createElement("option");
                  optionVal.setAttribute ("value",key);
                  let optionText = document.createTextNode(storesData[key][i]);
                  optionVal.appendChild(optionText);
                  storeDropdown.appendChild(optionVal);
            }
          }
    }

}
 



// ADDING EVENTLISTNER TO SEARCH BUTTON

document.getElementById("foodSearchBtn").addEventListener("click",fetchFoodItem);

function fetchFoodItem() {
  var storElement = document.getElementById("storeName");
var selectedStoreText = storElement.options[storElement.selectedIndex].text;
// Below code gives store name which is also the property name in storeId Obj
console.log(selectedStoreText)
// Below code gives corresponding ID in the storeId Obj
console.log(storesID[selectedStoreText]);

}




























/*let storeSelectedName = "Ballerup Centret-Føtex";
let idSelectedId = "c891c2a5-e302-4204-a7f5-8132ff5f5856";



let selectedResult =storesID.filter((item) => 
{
  return item.storeSelectedName == idSelectedId;
});


let exactRes = selectedResult[0][idSelectedId];
console.log(exactRes);*/



























 /*let optionVal = document.createElement("option");
 optionVal.setAttribute ("value","Bellerup centret føtex");
 let optionText = document.createTextNode("føtex");
 optionVal.appendChild(optionText);
 storeDropdown.appendChild(optionVal);*/




 /*for(let key in storesData) {
      //console.log(storesData[key]);
    const myElement = document.getElementById("zipCode");
    console.log(myElement.value);
    }
  */

