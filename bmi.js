window.onload = () => {
    let button = document.querySelector('.btn');

    button.addEventListener('click', calculateBmi);
};
document.querySelector(".btn").addEventListener("click", calculateBmi);

function calculateBmi() {

    // Entering the variables
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    // // Writing the main function
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    else {
        let bmi = (weight / (height * height));

        if (bmi < 18.6)
        // result.innerHTML = 'Under Weight : < span > $ bmi < /span>';
            document.querySelector("#result").innerHTML = (`Under Weight: ${bmi}`);
        else if (bmi >= 18.6 && bmi < 24.9)
        // result.innerHTML = 'Normal : < span > $ bmi < /span>';
            document.querySelector("#result").innerHTML = (`Normal: ${bmi}`);
        else
        // result.innerHTML = 'Over Weight :  < span > $ bmi < /span>';
            document.querySelector("#result").innerHTML = (`Over Weight: ${bmi}`);

    }
    // let wei_input = document.querySelector("#weight");
    // let hei_input = document.querySelector("#height");
    // let weight = wei_input.value();
    // let height = hei_input.value();
    // if (weight == "" && weight == "null") {
    //     alert("bc");
    // }

}