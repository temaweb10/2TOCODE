/* 11010000101000011101000010110000110100011000100011010000101100000010000011010000101100101101000110000001110100011000001011010001100000001101000010110101110100011000011111010000101100001101000010111001110100011000000111010001100011110010000011010001100000010010000011010000100100001101000010111011110100001011010111010000101110101101000110000001110100001011010111010000101101011101000010111100 */
document.querySelector('#bincode').value = '11010000101000011101000010110000110100011000100011010000101100000010000011010000101100101101000110000001110100011000001011010001100000001101000010110101110100011000011111010000101100001101000010111001110100011000000111010001100011110010000011010001100000010010000011010000100100001101000010111011110100001011010111010000101110101101000110000001110100001011010111010000101101011101000010111100 '
binaryAgent('11010000101000011101000010110000110100011000100011010000101100000010000011010000101100101101000110000001110100011000001011010001100000001101000010110101110100011000011111010000101100001101000010111001110100011000000111010001100011110010000011010001100000010010000011010000100100001101000010111011110100001011010111010000101110101101000110000001110100001011010111010000101101011101000010111100 ')

function binaryAgent(str) {
    let joy=str.match(/.{1,8}/g);
    console.log(joy)
    let newARRR= ''
    for(let i=0;i<joy.length;i++){
        newARRR += ` ${joy[i]}` 
    }
    console.log(newARRR)
    var newBin = newARRR.split(" ");

    /* console.log(newBin) */

    var binCode = [];

    /* console.log(joy.join(' ')); */

    for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
  
    
}
console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100'))
document.querySelector('#result').value = 'Саша встречайся с Алексеем'
document.querySelector('#bincode').addEventListener('input',function(){
    console.log(binaryAgent(document.querySelector('#bincode').value))
    document.querySelector('#result').textContent = binaryAgent(document.querySelector('#bincode').value) 
})