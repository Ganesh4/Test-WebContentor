
'use strict';

angular.module('overview').filter('DateFilter', function() {
        return function(createdTime) {
            

            var currentTime = (new Date()).getTime();
            var dateDifference = currentTime - new Date(createdTime);
            var seconds = Math.floor(dateDifference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            var months = Math.floor(days / 12);
           
            if(months <= 0){
                if(days <= 0){
                    if(hours <= 0){
                       return "Just Now";
                    }else{
                        return  hours + " hours ago";
                    }
                }else{
                    return days + " days ago";
                }
            }else{
                return months + " months ago";
            }
        }
    }).filter('FormatDateFilter',function(){
        return function(strDate){
            if(!strDate)
                return '';
            var date = new Date(strDate);
            var options = {
                year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };
            return date.toLocaleTimeString("en-us", options) || '';
        }
    });

