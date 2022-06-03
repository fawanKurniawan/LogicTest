
let loker = [];
let hasil = [];
let a = 1;
let b = 2;
let c = 3;
let nomorLoker = 1;
let lastLoker = 0;
for(let lantai = 1; lantai <= 1000; lantai++){
  if (a==lantai) {
        lastLoker+=5;    
      for (nomorLoker; nomorLoker<=  lastLoker;) {
          loker.push(nomorLoker);
          nomorLoker++;
      }
      a+=3;
  } else if(b==lantai){
    lastLoker+=6; 
    for (nomorLoker; nomorLoker <= lastLoker;) {
        loker.push(nomorLoker);
        nomorLoker++;
    }
     b+=3;   
  } else if(c==lantai){
    lastLoker+=7; 
    for (nomorLoker; nomorLoker <= lastLoker;) {
        loker.push(nomorLoker);
        nomorLoker++;
    }
     c+=3;
  }
  let valueLantai = functionLantai(loker);
  hasil.push(`Lantai: ${valueLantai}, Loker Nomor: ${loker}`);
  loker =[];
}
console.log(hasil);


function functionLantai(nomorLantai){
    if(nomorLantai.length == 5){
        return a-3;
        }
    else if(nomorLantai.length == 6){
        return b-3;
        }
    else if(nomorLantai.length == 7){
        return c-3;
        }
}


//console.log(hasil);  


/* let u=750000;
let h="";

for (let index = 1; index < 12; index++) {
    let b=0;
    let s=0;
    if (index>1) {
        b = u*6/100;
        if (u+b>800000) {
            s=800000*3/100;
        }else{
            s=(u+b)*3/100;
        }
    }
    h +=`Tabungan: ${u} \n bunga: ${b} \n sisih: ${s}\n Uang andi: ${(u+b)-s}\n -----------------\n`;
    //console.log(h);
} */

 


