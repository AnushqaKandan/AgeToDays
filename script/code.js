function calculate (){
    let age = parseInt(document.getElementById('age').value);
    
    let total= (age * 365);
    
    document.getElementById('days').innerText = total ;
    }
    
    window.onload = calculate;
    