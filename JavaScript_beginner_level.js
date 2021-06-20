    document.write("<h1>Hello World</h1>");
    //variables and data types
    //var x; //declaration
    //x=5; //initialization
    //alert(x);
    var num=5; //integer
    var str="Hello"; //string
    var b=true; //boolean
    document.write(str); //printing on the browser

    //operators in JS
    var a=3; //equal sign has right to left associativity
    var b=7;
    var c=6;
    var result1=b+c+"Anchit"+a+b; //plus sign has left to right associativity
    document.write("<br />");
    document.write("The result is: "+result1);
    document.write("\n"); // used for a white space
    document.write("<br />"); //used to print in a new line
    var result2=a*b+c-a;
    document.write(result2); //BODMAS precedence rule will be followed

    //if else control Statements
    document.write("<h1>If else control Statements</h1>");
    var x=98;
    if(x%2==0) document.write("Even");
    else document.write("Odd");

    //switch case control Statements
    document.write("<h1>Switch case control Statements</h1>");
    var day=3;
    switch(day){
        case 1:
            document.write("Sunday");
            break;
        case 2:
            document.write("Monday");
            break;
        case 3:
            document.write("Tuesday");
            break;
        case 4:
            document.write("Wednesday");
            break;
        case 5:
            document.write("Thursday");
            break;
        case 6:
            document.write("Friday");
            break;
        case 7:
            document.write("Saturday");
            break;
        default:
                document.write("Wrong Input");
    }

    //For Loop control Statements
    document.write("<h1>For Loop control Statements</h1>");
    for(var mul=1;mul<=10;mul++){
        document.write("<h2>"+ 5*mul +"</h2>");
    }

    //While Loop
    document.write("<h1>While Loop</h1>");
    var sum=0;
    while(sum!=10){
        sum++;
    }
    document.write(sum);

    //Do While Loop
    document.write("<h1>Do While Loop</h1>");
    var sum1=0;
    do{
        sum1++;
    }while(sum1>10);
    document.write(sum1);

    //functions in javascript
    document.write("<h1>Functions(Addition)</h1>");
    function addNumber(a,b){
        var total=a+b;
        return total;
    }
    var result=addNumber(5,3);
    document.write(result);
    // addNumber(98,1);
    //addNumber("asdf","afsvdgb");

    //Local variable and Global variable
    document.write("<h1>Local and Global types</h1>");
    var p=2; //global variable
    function variabledemo(){
        var q=8; //local variable for this function
        document.write("1"+q); //local variable of a function is accessible in that function
        document.write("<br />");
        document.write("2"+p); //global variable is accessible in a function
        document.write("<br />");
    }
    //document.write("3"+q); //local variable are not accessible outside the function
    variabledemo();
    document.write("4"+p);
    document.write("<br />");
    
    //Introduction to Array in JS
    document.write("<h1>Array in JS</h1>");
    var cars=new Array("Swift","BMW","Audi");
    cars.push("Lambo");
    document.write(cars);
    for(var i=0;i<cars.length;i++){
        document.write("<h3>"+cars[i]+"</h3>");
    }

    //object is JS
    document.write("<h1>Objects in JS</h1>");
    function Cars(car_brand,car_model,price){
        this.car_brand=car_brand;
        this.car_model=car_model;
        this.price=price;
        this.TeslaAutoPilot=function(){
            document.write("<h3>This car has Tesla Auto Pilot<\h3>");
        }
    }
    var c1=new Cars("Tesla","Model 3",35000);
    c1.TeslaAutoPilot();
    document.write(c1.car_brand);
    //adding one more property
    // Cars.fuelType="Electric ";
    // document.write("<h3>"+Cars.fuelType+"<\h3>");
    //delete Cars.price;   to delete a property

