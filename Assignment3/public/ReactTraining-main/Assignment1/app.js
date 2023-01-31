let orderData = {
    'Below 500':60,
    '500-1000':50,
    '1000-1500':60,
    '1500-2000':20,
    'Above 2000':60
}

let totalOrder = 0;
let noOfOrderProp = 0;

for(val in orderData){
    totalOrder+=orderData[val];
}

let percentageOfProp = [];

for (val in orderData){
    noOfOrderProp++;
    percentageOfProp.push({
        'id':noOfOrderProp,
        'order':val,
        'order percentage':(orderData[val]/totalOrder)*100,
    });
}
console.log("Total number of Orders placed ", totalOrder);
console.log("Number of order proportion options ",noOfOrderProp);
console.log("Percentage of each proportion is \n",percentageOfProp);
