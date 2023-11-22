const calc = document.getElementById('start');
const price_km = 0.21;


calc.addEventListener ('click', function(){
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    let final_price;
    if(age == 'under'){
        final_price = (price_km * km * 0.8).toFixed(2);
    }
    else if (age == 'over'){
        final_price = (price_km * km * 0.6).toFixed(2);
    }
    else{
        final_price = (price_km * km).toFixed(2);
    }
    console.log(final_price);
    })
