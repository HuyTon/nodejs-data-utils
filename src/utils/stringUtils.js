const axios = require("axios");

const StringUtils = (() => {
  // Uppercase only the first letter of the first word
  const capitalizeFirstLetter = (str) => {
    // Check if the input is a string
    if (typeof str === "string" && str.length > 0) {
      // Capitalize the first letter and concatenate it with the rest of the string
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      // Return the input unchanged if it's not a valid string
      return str;
    }
  };

  // Uppercase the first letter of every word in a sentence
  const capitalizeFirstLetterSentence = (sentence) => {
    // Check if the input is a string
    if (typeof sentence === "string" && sentence.length > 0) {
      // Split the sentence into words
      const words = sentence.split(" ");

      // Capitalize the first letter of each word
      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });

      // Join the words back together to form the capitalized sentence
      const capitalizedSentence = capitalizedWords.join(" ");

      return capitalizedSentence;
    } else {
      // Return the input unchanged if it's not a valid string
      return sentence;
    }
  };
  return {
    capitalizeFirstLetter: capitalizeFirstLetter,
    capitalizeFirstLetterSentence: capitalizeFirstLetterSentence,
  };
})();

module.exports = StringUtils;
