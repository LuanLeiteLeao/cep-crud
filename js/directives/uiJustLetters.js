//ceitar apenas letras no form input
angular.module("cepCrud").directive("uiJustLetters", function () {
    return {

        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            const _isUiJustLetters= (text)=>{
                var input = text.split("")
                var textFormated =  input.map(function(value) {
                     if (/[a-z]/i.test(value)) return value 
                    })
                    return textFormated.join("")
            }
            
            

            element.bind("keyup", function () {
                ctrl.$setViewValue(_isUiJustLetters(ctrl.$viewValue));
                ctrl.$render();
            });

        }
    }
});