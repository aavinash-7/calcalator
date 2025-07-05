/*let names = ["avinash","veenaj","hemanth"];
let newnames = names.map(mrs => "Mr."+mrs);
console.log(newnames); 

    let numbers =[2,4,6,8];
let newnumbers = numbers.map(num => num * 2);
console.log(newnumbers);

let students = ["avinash","veenaj","hemanth"];
let newsstudents = students .map((students,index) => {
    return (index+1)+"."+students;

});
console.log(newsstudents);

let frds = ["avinash","veenaj","hemanth"];
let frd = frds.map(frdd => frdd[0]);
console.log(frd);

let namess = ["Ram", "Krishna", "Sai", "Manoj", "Anu"];
let char = namess.filter(na => na.length >=4);
console.log(char);

let marks = [75,45,90,32,55,28];
let pass = marks.filter(pass => pass >=50);
console.log(pass);

let exams = [30,40,50,60];
let fail = exams.some(failed => failed <35);
console.log(fail);

let reduces = [2,3,4];
let mult = reduces.reduce((multy , val )=> multy * val ,1);
console.log(mult);  7396064820


function addItem() {
    let newpara = document.createElement("p");
    newpara.textContent = "This is a new line";
    document.getElementById("box").appendChild(newpara);
}

let codetime = 5 ;
let phone = (codetime >=6)?"yes":"no";
console.log(phone);  */

    
const display = document.getElementById("display");

    function appendToDisplay(input) {
      display.value += input;
    }

    function cal(){
      display.value=eval(display.value);
    }

    function ac(){
      display.value = "";
    }

    function cleardigit(){
      display.value= display.value.slice(0,-1);
    }
    
