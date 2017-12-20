( function(){
'use strict'

    angular.module( 'CheckIfTooMuch', [] ).controller( 'CheckIfTooMuchController', CheckIfTooMuchController );
    CheckIfTooMuchController.$inject = [ '$scope' ];

    function CheckIfTooMuchController( $scope ){

        $scope.lunchItems = '';
        $scope.message = '';
        $scope.checkLunchItems = function checkLunchItems(){

            if( $scope.lunchItems ){
                 var splitItems = $scope.lunchItems.split( ',' );
                 var trimmedItems = [];

                 for( var item of splitItems ){
                     if( item && item != ' ' ){
                         trimmedItems.push( item );
                     }
                 }
                 var isTooMuch = trimmedItems.length > 3;

                 if( isTooMuch ){
                     $scope.message = 'Too Much!';
                 }else{
                     $scope.message = 'Enjoy!';
                 }
            }else{
                $scope.message = 'Please enter data first';
            }
        };
    };


})();