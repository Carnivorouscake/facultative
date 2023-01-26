const getCoyntryCode = (num) => {
    switch (num.slice(-11)){
      case '8':
       return '+7';
      default:
       return '+7';
    }
  }

 const phoneNumberExtractor = (str) => {
     let num = '';
     for ( let i = 0; i < str.length; i += 1){
       if(!isNaN(str[i]) && str[i] !== ' '){
       num = num + str[i];   
       } 
     }
    const phoneNumber = num.slice(-7);
    const operatorCode = num.slice(-10, -7);
    const countryCode = getCoyntryCode(num);    
  return { phoneNumber: phoneNumber, operatorCode: operatorCode, countryCode: countryCode };
 };
