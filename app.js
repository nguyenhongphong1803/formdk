function checkWordInput(){
    

    var valid = true
    valid = kiemTraRong('.inputHo','.error-info') & kiemTraRong('.inputTen','.error-Ten')
    & kiemTraRong('.inputMK','.error-MK')
    & kiemTraRong('.inputXNDK','.error-XNDK')
    & kiemTraRong('.inputEmail','.error-Email')
  
    valid &= kiemTraTatCaLaChu('.inputTen','.error-firstName')&kiemTraTatCaLaChu('.inputHo','.error-lastName')
    valid &=kiemTraTatCaLaSo('.inputXNDK','.error-SDT')
    valid &=kiemTraEmail('.inputEmail','.error-Email2')

    if(!valid){

        return false
    }
    return true

}

var kiemTraRong= function(selectorValue,selectorError){
    var inputText = document.querySelector(selectorValue)
    if(inputText.value.trim() === ""){
         document.querySelector(selectorError).innerHTML= inputText.name + " can nhap thong tin"
         return false
        
    } else {
        document.querySelector(selectorError).innerHTML=""
        return true
        
    }

}

var kiemTraTatCaLaChu = function(selectorValue, selectorError){
    var inputText = document.querySelector(selectorValue)
    var regexChu= /^[A-Za-z ]+$/

    
    if(regexChu.test(inputText.value)){
        document.querySelector(selectorError).innerHTML=""
        return true
    } else{
        document.querySelector(selectorError).innerHTML= inputText.name + " can nhap chu"
         return false
    }


}

var kiemTraTatCaLaSo = function(selectorValue, selectorError){
    var inputText = document.querySelector(selectorValue)
    var regexSo= /^[0-9]+$/

    
    if(regexSo.test(Number(inputText.value))){
        document.querySelector(selectorError).innerHTML=""
        return true
    } else{
        document.querySelector(selectorError).innerHTML= inputText.name + " can nhap So"
         return false
    }


}

var kiemTraEmail = function(selectorValue, selectorError){
    var inputText = document.querySelector(selectorValue)
    var regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    
    if(regexEmail.test(inputText.value)){
        document.querySelector(selectorError).innerHTML=""
        return true
    } else{
        document.querySelector(selectorError).innerHTML= inputText.name + " can nhap @"
         return false
    }


}
document.querySelector('.inputHo').onblur= checkWordInput
document.querySelector('.inputTen').onblur= checkWordInput
document.querySelector('.btnSubmit').onclick = checkWordInput

// var regexSo= /^[0-9]+$/

// var regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// console.log(regexEmail.test('wew@gmail.com'))