const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

   const celToFah= (cel) => {
      let farenheit= Math.round((cel * 9/5) + 32);
      return farenheit;
   }

   const fehToCel= (fehr) => {
      let celsius = Math.round((fehr -32)  * 5/9);
      return celsius;
   }

    let result;
     if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}Farenheit`;
     }else{
        result= fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}Celsius`;
     }
}