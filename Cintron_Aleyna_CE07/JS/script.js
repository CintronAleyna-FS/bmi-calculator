/*
    Aleyna Cintron
    06/27/2021
    4.4 Code Exercise 07: Final Project
*/

// Function for when "Get BMI" button is clicked
document.querySelector("#getBMIBtn").addEventListener("click", function(e){
    // Checking that ALL user input fields are valid (not left blank or incorrect number values)
    if (document.querySelector("#userHeightFt").reportValidity() &&
        document.querySelector("#userHeightIn").reportValidity() &&
        document.querySelector("#userWeight").reportValidity()){
        
        // Store user height in Ft in variable and convert to inches
        let userHeightFt = parseInt(document.querySelector("#userHeightFt").value) * 12;
        // Store user height in inches in variable
        let userHeightIn = parseFloat(document.querySelector("#userHeightIn").value);
        // Store user weight in variable
        let userWeight = parseFloat(document.querySelector("#userWeight").value);

        // Combine user height in ft and user height in inches
        let userHeight = userHeightFt + userHeightIn;
        // Calculate user BMI
        let userBMI = ((userWeight / userHeight / userHeight) * 703).toFixed(1); 

        // Check user bmi and see which category they fall under
        // If user BMI is under weight range
        if(userBMI < 18.5){
            // Write text for h1 and make visible based on user BMI
            document.querySelector("#h1BMIResult").innerHTML = `Your BMI is ${userBMI}, indicating your weight is in Under Weight for adults of your height.`;
            document.querySelector("#h1BMIResult").style.visibility = "visible";
            // Set image src and make visible based on user BMI
            document.querySelector("#imgBMIResult").src = "IMG/underWeight.jpg";
            document.querySelector("#imgBMIResult").style.visibility = "visible";
        }
        // If user BMI is normal or healthy weight range
        else if (userBMI >= 18.5 && userBMI <= 24.9){
            // Write text for h1 and make visible based on user BMI
            document.querySelector("#h1BMIResult").innerHTML = `Your BMI is ${userBMI}, indicating your weight is in Healthy Weight for adults of your height.`;
            document.querySelector("#h1BMIResult").style.visibility = "visible";
            // Set image src and make visible based on user BMI
            document.querySelector("#imgBMIResult").src = "IMG/healthyWeight.jpg";
            document.querySelector("#imgBMIResult").style.visibility = "visible";
        }
        // If user BMI is over weight range
        else if(userBMI >=25.0 && userBMI <= 29.9){
            // Write text for h1 and make visible based on user BMI
            document.querySelector("#h1BMIResult").innerHTML = `Your BMI is ${userBMI}, indicating your weight is in Over Weight for adults of your height.`;
            document.querySelector("#h1BMIResult").style.visibility = "visible";
            // Set image src and make visible based on user BMI
            document.querySelector("#imgBMIResult").src = "IMG/overWeight.jpg";
            document.querySelector("#imgBMIResult").style.visibility = "visible";
        }
        // If user BMI is obese range
        else if(userBMI >= 30.0 && userBMI < 35){
            // Write text for h1 and make visible based on user BMI
            document.querySelector("#h1BMIResult").innerHTML = `Your BMI is ${userBMI}, indicating your weight is in Obese Weight for adults of your height.`;
            document.querySelector("#h1BMIResult").style.visibility = "visible";
            // Set image src and make visible based on user BMI
            document.querySelector("#imgBMIResult").src = "IMG/obeseWeight.jpg";
            document.querySelector("#imgBMIResult").style.visibility = "visible";
        }
        // If user BMU is extreme Obese Range
        else if (userBMI >= 35){
            // Write text for h1 and make visible based on user BMI
            document.querySelector("#h1BMIResult").innerHTML = `Your BMI is ${userBMI}, indicating your weight is in Extreme Obese Weight for adults of your height.`;
            document.querySelector("#h1BMIResult").style.visibility = "visible";
            // Set image src and make visible based on user BMI
            document.querySelector("#imgBMIResult").src = "IMG/extremeObeseWeight.jpg";
            document.querySelector("#imgBMIResult").style.visibility = "visible";
        };
    };
});