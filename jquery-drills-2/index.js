
function fizzBuzz(){
$('#number-chooser').submit(function(e){
            e.preventDefault();
            let number = parseInt($('input#number-choice').val());

            let myArr = Array.from(Array(number).keys());

            for (let i = 1; i <= myArr.length; i++){
              if (myArr[i]  % 15 == 0) {
                console.log('fizzbuzz')
                $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');
              } else if (myArr[i] % 5 == 0) {
                console.log('buzz')
                $('.js-results').append('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
              } else if (myArr[i] % 3 == 0){
                console.log('fizz')
                $('.js-results').append('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
              }  else {
                console.log(myArr[i])
                $('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
              }
            }
          });
};

$(fizzBuzz)