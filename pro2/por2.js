const input = document.querySelector('form')

input.addEventListener('submit', function(e){
    e.preventDefault();

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('.result')

   if(height === ''|| height<0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
   }else if(weight === ''|| weight<0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
   } else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)// to fixed use to set9.03 only to value
    // const word = result.innerHTML = bmi;
    if (bmi<18.6) {
        result.innerHTML = `BMI = ${bmi} your BMI is under weight`;
    }else if (18.6<bmi && bmi<24.9) {
        result.innerHTML = `BMI = ${bmi} your BMI is normal`;
    }else if(bmi>24.9){
        result.innerHTML = `BMI = ${bmi} your BMI is overweight`;
    }
   }

})