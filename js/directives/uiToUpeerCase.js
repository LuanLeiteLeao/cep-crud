// converte entrada em letras maiúsculas
angular.module("cepCrud").directive("uiToUpeerCase",function(){
    return{
        require:"ngModel",
        link: (scope,element,attrs,ctrl)=>{
            
            const _toUpeerCase = (text)=>{
                return text.toUpperCase()
            }


            element.bind("keyup",()=>{
                // console.log(value)
                 ctrl.$setViewValue( _toUpeerCase(ctrl.$viewValue));
                 ctrl.$render();
            })
            
        }
    }
})