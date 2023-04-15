function sum(a,b){
     try{ 
        throw error('reference ');
         let c=a+b; 
         return c;
        } 
        catch(error){ 
            console.log("there is error"); 
            //alert("Some thing went wrong");
        }
    }
     let result=sum(2,3);
      console.log(result);