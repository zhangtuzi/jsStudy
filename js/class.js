  // import test1 from 'exportTest.js'
  // test1.sayHello();
  let methondName='getName';
  var classT1=document.getElementById('classT1');
    class Point{
        // constructor(){
        //     //alert(1);
        // }
        [methondName](){

        }

    }

    //console.log(classT1)
    //fun1.constructor();
    Object.assign(Point.prototype,{
      toString(){
      },
      say(){}
    });
    var fun1=new Point();
    fun1.toString();
    console.log(fun1)
    classT1.innerHTML=Point;

    console.log(Point)
