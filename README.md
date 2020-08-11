# All_Longest_String
Code signal: All Longest String Exercise 

## Problem 
> Given an array of strings, return another array containing all of its longest strings.

## Thought Process 
Create an array to store all the longest strings. 
Create a len value to hold the length of the longest string and set it to zero. 

```
var len = 0; 
var longest = []; 
 ```
Loop through the array of strings. Find the longest string and set that to the len value. 

```
for (var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > len){
            len = inputArray[i].length 
        }
    }
 ```
 
 Loop through the array in a separate for loop. If a string's lenght is equal to the value of len, push into the longest array. 
 
 ```
   for (var j = 0; j < inputArray.length; j++){
        if(inputArray[j].length === len){
            longest.push(inputArray[j])
        }
    }
 ```
 
 Return the longest array. 
 
 ```
 return longest
 ```
