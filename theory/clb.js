function callto(name, callback){ 
    console.log('Привет' + ' ' + name); 
    callback(); 
} 
 
callto('Alex', function(){ 
    console.log('После сигнала..'); 
}) 