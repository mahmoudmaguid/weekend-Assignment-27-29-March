
   function sevenBoom(insertArrY)/*I create Functiont that takes array as parameter*/ 
   
   
   {
    
   
    if(insertArrY.includes(7))/* I put a condition if the array is including number 7  it will excute the statement of returning  string Boom */
    
    {
		return "Boom!";
	}else{
        /* but if it dosent include number 7 it will retrun string statment */
		return "there is no 7 in the array";
	}
}

/* now i am testing this function by inserting array includes 7 */


testArray1 =[ 2,5,8,9,7];
sevenBoom(testArray1);
console.log(sevenBoom(testArray1));

/* now i am testing it by inserting array dosen't include number 7 inside it */

testArray2 = [2,8,9,"mahmoud",false];
sevenBoom(testArray2);
console.log(sevenBoom(testArray2));


