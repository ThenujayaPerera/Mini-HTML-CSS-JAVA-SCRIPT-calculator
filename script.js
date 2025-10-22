
let c=0;
let a=0;
let number2=0;
let number3=0;
let numset=true;
let number=0;
function display(number) {
    if(numset==true){

    number2=number2 *10 +number;
    document.getElementById("display").innerHTML=number2;
    
            if(number==3){
            
                document.getElementById("display").innerHTML=number2;
            }
        }
        

    
    else{  
        if(c==1){
            number3=number3 *10 +number;
        document.getElementById("display").innerHTML=(a) +"+"+number3;
        }
        if(c==2){
            number3=number3 *10 +number;
        document.getElementById("display").innerHTML=(a) +"-"+number3;
        }
        if(c==3){       
        number3=number3 *10 +number;
        document.getElementById("display").innerHTML=(a) +"*"+number3;
        }   
        if(c==4){
        number3=number3 *10 +number;
        document.getElementById("display").innerHTML=(a) +"/"+number3;
        } 
    }
}
function calculate(set) {
    if(set==14&& c!=0){
        let b=number3;
        if(c==2){
            let result=a-b;
            document.getElementById("display").innerHTML=result;
        }
        else if(c==3){
            let result=a*b;
            document.getElementById("display").innerHTML=result;
        }
        else if(c==4){
            let result=a/b;
            document.getElementById("display").innerHTML=result;        
        }
        else if(c==1){
            let result=a+b;
            document.getElementById("display").innerHTML=result;
        }
        number2=0;
        number3=0;
        a=0;
        c=0;
        numset=true;


    }
    else{
        
        if(set==10){
            a=number2;
            document.getElementById("display").innerHTML=(a) +"+";
             c=1;
        }
        else if(set==11){
             a=number2;
            document.getElementById("display").innerHTML=(a)+"-";
            c=2;
        }
        else if(set==12){
            a=number2;
            document.getElementById("display").innerHTML=(a)+"*";
            c=3;
        }
        else if(set==13){
            a=number2;
            document.getElementById("display").innerHTML=(a)+"/";
            c=4;
        }
        
        number2=0;
        numset=false;

        
        
    }

}
function clearDisplay() {
    c=0;
    a=0;
    number2=0;
    number3=0;
    numset=true;
    number=0;
    document.getElementById("display").innerHTML="0";
}
