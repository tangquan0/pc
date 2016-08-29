/**
 * Created by hxsd on 2016/8/26.
 */
var myapp = angular.module("myapp",[]);
myapp.controller("myCtrl",function($scope){
    //$scope.city = "成都"
    $scope.cities = [
        {code:010,name:"四川",citys:[
            {town:"成都",area:["武侯区","成华区","金牛区"]},
            {town:"南充",area:["嘉陵区","高坪区","顺庆区"]}
        ]},
        {code:020,name:"广东",citys:[{town:"深圳",area:["宝安区","福田区","龙岗区"]},{town:"广州",area:["越秀区","海珠区","荔湾区"]}]}
    ];
})
