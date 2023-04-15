function findTax(salary) {
//    let tax = 0;
    try{
     if(salary<0){
        throw new ValidationError('Salary not valid');
     }   
    switch (salary) {
        case salary<=500000:
            return 0;
            break;
        case salary<=1000000:
            return salary * 0.1;
            break;
        case salary<=1500000:
            return salary * 0.2;
            break;
        case salary>1500000:
            return salary * 0.3;
            break;    
        }
    }
    catch (error) {
        return error.message;
    }

    //return tax;
}

let car=findTax(500000);
console.log(car);