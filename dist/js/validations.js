jQuery.validator.addMethod("email", function(value, element) {
    return this.optional(element) || /^[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/.test(value);
}, "Wrong mail format");

jQuery.validator.addMethod("only_letters", function(value, element) {
    return this.optional(element) || /^[a-záéíóúñ\s]+$/i.test(value);
}, "Only letters are allowed");

jQuery.validator.addMethod("decimal", function(value, element) {
    return this.optional(element) || /^\d*(\.\d{0,1})?\d{0,1}$/.test(value);
}, 'Only numbers are allowed. In case of entering decimals, you must divide them with a "." and these should not be greater than 2 digits.');

jQuery.validator.addMethod("integer", function(value, element) {
    return this.optional(element) || /^[0-9]{1,}$/.test(value);
}, 'Only whole numbers are allowed');

jQuery.validator.addMethod("phone", function(value, element) {
    return this.optional(element) || /^[0-9]{10}$/.test(value);
}, "Wrong phone format");

jQuery.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[a-záéíóúñ\s0-9]+$/i.test(value);
}, "Only letters and numbers are allowed");

jQuery.validator.addMethod("description", function(value, element) { 
    return this.optional(element) || !(/[<>\']/.test(value));
}, "The following characters are not allowed: <>");

// jQuery.validator.addMethod("password", function(value, element) {
  
//   let letMay = /[A-Z]{1,}/.test(value);
//   let letMin = /[a-z]{1,}/.test(value);
//   let numeros = /[0-9]{1,}/.test(value);
//   let carExpec = /[!@#$%^&*()_+\.]{1,}/.test(value);
//   let cantCarac = (value.length >= 8 && value.length <= 20);

//   return this.optional(element) || (letMay && letMin && numeros && carExpec && cantCarac);
// }, "The password must have a combination of letters (upper and lower case), numbers, and at least one special character");
