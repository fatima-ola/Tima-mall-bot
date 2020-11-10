let counterAllow = 0;
let counterDeny = 0;
let allowUser = document.getElementById("allow");
let denyUser = document.getElementById("deny");

function getValue(){
    let myMall = document.getElementById("mallName").innerHTML;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let answer =  document.getElementsByName("answer");
    let age = document.getElementById("age").value ;
     
    for(i = 0; i < answer.length; i++) { 
        if(answer[i].checked) {
            let theAnswer = answer[i].value; 
            if(firstName === '' || lastName === '' || age === ''){
                alert(`Kindly fill in your details: Check your First Name, Last Name or Age`);
            } else {
                if(theAnswer == "yes" && age >= 12){
                    alert (`${firstName} ${lastName} you are welcome to ${myMall}!`);
                    counterAllow++;
                    allowUser.textContent = counterAllow;
                    window.location.href = "./shop.html";
                }else if(theAnswer == "yes" && age < 12){
                    alert(`Sorry ${firstName} ${lastName} you must be 12years or older to enter ${myMall}`);
                    counterDeny++
                    denyUser.textContent = counterDeny;
                }
                else if(theAnswer == "no" || age < 12 ){
                    alert(`Sorry ${firstName} ${lastName} you have been denied entry into ${myMall}`) ;
                    counterDeny+=1
                    denyUser.textContent = counterDeny;

                } 
            }

         }
        


    } 

   

   

}
