var refreshButton=document.getElementById("refresh");
refreshButton.onclick=updateImages
function updateImages(){
    let random_number1=Math.random()
    random_number1=Math.round(random_number1*5)
    let random_number2=Math.random()
    random_number2=Math.round(random_number2*5)
    let image_src1=`./images/dice${random_number1+1}.png`
    let image_src2=`./images/dice${random_number2+1}.png`
    console.log(image_src1,image_src2)
    document.getElementsByClassName('img2')[0].src=image_src2
    document.getElementsByClassName('img1')[0].src=image_src1
    if(random_number1>random_number2){
        document.getElementById('refresh').innerHTML='Player 1 wins'
    }
    else if(random_number2>random_number1){
        document.getElementById('refresh').innerHTML='Player 2 wins'
    }
    else{
        document.getElementById('refresh').innerHTML='Draw'
    }
}