/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    orders.sort((a,b)=>a[1]-b[1]);
    let res=[];
    let set= new Set();
    for(let i=0; i<orders.length; i++){
        set.add(orders[i][2])
    };
    let menu=[...set].sort();
    menu.unshift('Table')
    res[0]= menu;
    let row=[];
    menu.forEach(el=> row.push("0"))
    let obj={};
    for(let i=1; i<menu.length; i++){
        obj[menu[i]]= i;
    }
    let currentTable= 0;
    for(let i=0; i<orders.length; i++){
        let tableN= Number(orders[i][1])

        if(tableN > currentTable){
            row[0]= tableN.toString()
            res.push([...row]);
            currentTable= tableN;
        }
        let idx= obj[orders[i][2]];
        res[res.length-1][idx]= Number(res[res.length-1][idx])+1;
        res[res.length-1][idx]= res[res.length-1][idx].toString()
    }
   
    return res
};



//create res [[table]]
//sort menu and add res- [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"]]
//create obj with item and its order # - {beef: 1, Ceviche:2, Fried Chicken: 3, Water:4}
//iterate orders
   //If no table, create new row with 0s- [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],[3,0,0,0,0]]
   //find index of the menu-item # from obj increament menu 
   