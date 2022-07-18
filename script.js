const input = document.getElementById("phone-number");

function runCheck() {
  return telephoneCheck();
}

function telephoneCheck(str) {
    // check if str has characters that are not 0-9, (), whitespace, or -
    let nonNumsRegex = /[^\d\s\-(\(\))]/i;
    if (nonNumsRegex.test(str)) {
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
      let formatRegex = /^1?\s?[(]\d{3}[)]\s?\d{3}[-\s]?\d{4}$|^(1\s)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
      if (formatRegex.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }
  