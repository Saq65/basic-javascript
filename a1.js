// java script

       // date

    var date = new Date();
     console.log(date.toString());
     document.write(date.toString());
     console.log(date.toTimeString());
     

     // Name

     console.log('%c saqlain shaikh','color:#256;font-size:3rem; font-family:cursive; letter-spacing:4px;font-weight:600');

     //reverse string

     function saqlain(saq){
        return[...String(saq)].reverse().join(' ');
     }

     console.log(saqlain('Hello!'));
     document.write(saqlain('World'));

     //text

     console.log('hi I am \"saqlain\" shaikh');

     //Data Types

     // 1- string
     var string = "This is string";
     console.error(string)
     // 2-Number
     var number =123456;
     console.warn(number);
     var Boolan = "hello"
     console.log(Boolan === "hello");


     //adding 

     var adding =(a,b) => Number(a) + Number(b);
     console.log(adding(4,3));

     //substrcate

     var substrcate =(a,b) => Number(a) - Number(b);
     console.log(substrcate(20,6));

     //Multiply

     var Multiply =(a,b) => Number(a) * Number(b);
     console.log(Multiply(4,4));

     // Divide

     var Divide =(a,b) => Number(a) / Number(b);
     console.log(Divide(40,8));


     //equal ==

     var equal =(a,b) => Number(a) == Number(b);
     console.log(equal(300,300));


     //array

     var array = [ 'hello','world'];
     console.log(array[0]);
     console.log(array[1]);

     //Object

     const Object ={Name:"hello",Class:"World!"};
     console.log(Object.Name+'  '+Object.Class);
     
   // mixture of object and array

    var school =[{Name:'alim',
                 class:'8th' ,
                  result:'Passed'},

                 {Name:'hashim',
                  class:'8th',
                  result:'Passed'},

                  {Name:'Huzaifa',
                 class:'8th',
                  result:'Passed'},

                  {Name:'Unknow',
                 class:'8th',
                  result:'Failed'}];

               console.table(school,['Name ','result']);

//use of loop first 
 Var a = 1;
While (a <=10) {
Document.Write("hello") 
a = a+1;
}
// second method
for(var a=1; a<=10; a++){
Document.write("hello world <br>") ;


// use charAt

var string= 'this is me';
console.log(string.charAt(5));
console.log(string.charAt(1));
// use of indexof
console.log(string.indexOf('m'));
console.log(string.indexOf('e'));
// use of includes
console.log(string.includes('is'));
//You can make sentance by using javascript
console.log('%s have %d cycle','I',1);


console.log('%c thank you','color:#111;font-size:2rem;')
               
    



