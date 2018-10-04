
function limitBreaker(array){
  //result = array
  result=[];
  var element=1;
  for (var i=0; i<array.length; i++){//this line will alter the original function so that way it works it multiplies twenty and then the previous element as well
    element = element * array[i]*20;//this multiplies the elements of the result by twenty
    result.push(element);//this puts the elements back into the result
  };
  dumbVariable=result;
  console.log(dumbVariable);
  return result; //this returns the result
};
limitBreaker([1,2,3]);
x=[1,2,3];
limitBreaker(x);
