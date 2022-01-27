function doubleInteger() {
    // i will be an integer. Double it and return it.i*2
    let double = 2;
    let szorzando = document.querySelector("input[name='szorzando']");
    //let szorzando = document.getElementById("szorzando")//id-vel is kválasztható lenne//
   let aHtmlOldalonMutassaASzorzatot = document.querySelector("span.NaIttirjakiAKétszereset")
    let szorzat= parseInt(szorzando.value)*double;
   //alert("A szorzat :" +szorzat);//Ha alertal akarom kiírni, de inkább beírom a htmloldalba//
  aHtmlOldalonMutassaASzorzatot.innerHTML = szorzat;
}