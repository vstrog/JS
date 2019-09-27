document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kmInput').addEventListener('input', function(e){
    let km = e.target.value;
    document.getElementById('output').style.visibility = 'visible';
    //console.log(km);
    document.getElementById('metresOutput').innerHTML = km*1000;
    document.getElementById('smOutput').innerHTML = km*100000;
    document.getElementById('mlOutput').innerHTML = km*1000000;
})