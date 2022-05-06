

function binaryAgent(str) {

    var newBin = str.split(" ");
    var binCode = [];
    
    for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}
console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100'))

document.querySelector('#bincode').addEventListener('input',function(){
    console.log(binaryAgent(document.querySelector('#bincode').value))
    document.querySelector('#result').textContent = binaryAgent(document.querySelector('#bincode').value) 
})