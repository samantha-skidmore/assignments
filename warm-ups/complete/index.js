var removeDups = function(str) {
    var output = {
        noDups: "",
        dups: ""
    }

//does the stuff

//iterate through the string
    //how do we iterate?  Through a for loop
        for(var i = 0; i < str.length; i++) {
            //check if current character of original string is in the no-dups
          if(output.noDups.indexOf(str[i]) < 0){
            output.dups += str[i]; 
            output.noDups += str[i];
             
          } else {
              //put in the dups
              output.nDups +=str[i];
          }

        }
        return output;
    }

console.log(removeDups("bookkeeper larry"));

