const input = document.getElementById("phone-number");
const output = document.getElementById("result");
const outputCont = document.getElementById("output");
let nonNums = false;

function runCheck() {
  console.log(input.value);
  if (input.value === "") {
    output.textContent = "Please enter a number.";
    outputCont.classList.remove("invisible");
    return false
  }

  let check = telephoneCheck(input.value);
  if (check) {
    output.textContent = input.value + " is a valid phone number!";
  } else if (check === false && nonNums === false) {
    output.textContent = input.value + " is not a valid phone number! It is not formatted correctly.";
  } else if (check === false && nonNums === true){
    output.textContent = input.value + " is not a valid phone number! It contains characters that are not 0-9, (), whitespace, or -"
  }
  outputCont.classList.remove("invisible");
  return false;
}

function telephoneCheck(str) {
  // check if str has characters that are not 0-9, (), whitespace, or -
  let nonNumsRegex = /[^\d\s\-(\(\))]/i;
  if (nonNumsRegex.test(str)) {
    console.log("false");
    nonNums = true;
    return false;
  } else {
      
    // use regex to check if format is correct.
    // Ex:
    // 555-555-5555
    // (555)555-5555
    // (555) 555-5555
    // 555 555 5555
    // 5555555555
    // 1 555 555 5555
    // (if country code is included it must be 1)
    nonNums = false;
    let formatRegex = /^1?\s?[(]\d{3}[)]\s?\d{3}[-\s]?\d{4}$|^(1\s)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (formatRegex.test(str)) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}
  