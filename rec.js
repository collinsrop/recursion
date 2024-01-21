"use strict";
let _scri=3**4;//exponentiation i.e.,power of smthg
//alert(_scri);

//recursive terms
function pow(x,n){
	if(n==1){
      return x;
	}else{
      return x*pow(x,n-1);
	}
}
alert(pow(2,4));