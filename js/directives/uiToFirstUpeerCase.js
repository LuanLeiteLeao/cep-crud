// converte entrada em letras maiúsculas
angular.module("cepCrud").directive("uiToFirstUpeerCase",function(){
    return{
        require:"ngModel",
        link: (scope,element,attrs,ctrl)=>{
            
            const _fistStringToUpper =(value)=>{
                return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()
            }

            const _toFirstUpeerCase = (text)=>{
                
                var input=text.split(" ")
                var output;

                console.log(input)
                console.log(input.length)

                if(input.length>1){
                    console.log(1)
                     output = input.map(function(value ){
                        
                         return _fistStringToUpper(value);
                    }) 
                    output = output.join("  ")
                }else{
                    console.log(2)
                    output= _fistStringToUpper(text)
                }

                
                return output
                
            }
            // // isso aqui está redundante, tem que tirar daq
            // const _isUiJustLetters= (text)=>{
            //     var input = text.split("")
            //     var textFormated =  input.map(function(value) {
            //          if (/[a-z]/i.test(value)) return value 
            //         })
            //         return textFormated.join("")
            // }


            element.bind("keyup",()=>{
                var formated = _toFirstUpeerCase(ctrl.$viewValue)
                 ctrl.$setViewValue(formated);
                 ctrl.$render();
            })
            
        }
    }
})