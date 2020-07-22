


//function ...while .... do while
//Assignment 38-42


//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

var c;
function power(a, b) {
    c = Math.pow(a, b)
    document.write(c);
}

power(3, 2)


//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, … 
function leapYear(year) {
    if (year % 4 === 0) {
        document.write(year + " is a leap year")

    }
    else if (year % 400 === 0) {
        document.write(year + " is a leap year")


    }
    else {
        document.write(year + " is not leap year")
    }
}
leapYear(2004)


//3. If the lengths of the sides of a triangle are denoted by a, b, and c,
// then area of triangle is given by area = S(S − a)(S − b)(S − c) 
//where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 function

var a = +prompt("enter the first number")
var b = +prompt("enter the second number")
var c = +prompt("enter the third number")

function SidesOfTraingle() {
    S = (a + b + c) / 2

}

function area() {
    SidesOfTraingle()
    c = S - a
    d = S - b
    e = S - c
    S = d * e * c

    document.write(S)
}
area()





//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. 
//there should be 3 functions one is the mainFunction and other are for average and percentage.
// Call those functions from mainFunction and display result in mainFunction.  

var a = +prompt("enter the marks you obtained")
var b = +prompt("enter the  marks you obained")
var c = +prompt("enter the  marks you obtained")

function main() {
    average()
    document.write("average: " + average + " marks" + "<br>")

    percentage()
    document.write("percentage: " + percentage + "%")




    function average() {
        average = (a + b + c) / 3

    }


    function percentage() {
        percentage = ((a + b + c) / 300) * 100
    }
}
main()



//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality.
// You can code for single character as of now. 
user = prompt("enter the character")
String = "my name is khan"
function findIndex() {
    for (var i = 0; i < String.length; i++) {
        if (String[i] === user) {
            document.write(i)
        }
    }
}

findIndex()


//6. Write a function to delete all vowels from a sentence.
// Assume that the sentence is not more than 25 characters long.
function removeVowel(text) {
    if (text.length < 25) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text[i]
            if ("aioue".match(c.toLowerCase()) == null) {
                result += c;

            }

        }
    }
    document.write("remove vowel: " + result)
    return result
}

removeVowel("pakistan is good country")



//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 
//For example, in the sentence 
//“Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

document.write(findOccurrences());


//8. The distance between two cities (in km.) is input through the keyboard.
// Write four functions to convert and 
//print this distance in meters, feet, inches and centimeters.  

a = +prompt("write the distance between  two cities in km")

function kmToMeter() {
    return a * 1000

}

document.write("km to meter: " + kmToMeter() + "meter" + "<br>")
function kmToFeet() {
    return a * 3280

}

document.write("km to Feet: " + kmToFeet() + "Feet" + "<br>")

function kmToInches() {
    return a * 39370

}

document.write("km to Inches: " + kmToInches() + "Inches" + "<br>")

function kmToCentimeter() {
    return a * 100000

}

document.write("km to Centimeter:" + kmToCentimeter() + "Centimeter" + "<br>")


//9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for 
//every hour worked above 40 hours. 
//Assume that employees do not work for fractional part of an hour.  

hours = +prompt("how many hours you worked above normal work? ")
function overtimePay() {
    if (hours > 40) {
        a = hours - 40

        return a * 12
    }
    else {
        return 0
    }

}
document.write("overtime pay of employee: " + overtimePay())

//10. A cashier has currency notes of denominations 10, 50 and 100.
// If the amount to be withdrawn is input through the keyboard in hundreds,
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer
amount = +prompt("enter the amount you want to withdraw")
function withDrawAmount() {

    a = amount / 100
    b = parseInt(a)

    c = (amount % 100) / 50
    d = (parseInt(c))
    e = ((amount % 100) % 50) / 10
    document.write("you will have  " + b + "   hundred notes   " + d + "   fifty notes   " + e + "     ten notes")
}
withDrawAmount()


    //EVENTS   ASSIGNEMNT 43-48


    //1. Show an alert box on click on a link.
    // 2. Display some Mobile images in browser. 
    //On click on an image Show the message in alert to user

    < div style = "display: flex; margin: 40px;justify-content: space-around;" >
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')" > </div>
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')"> </div>
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')"> </div>
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')" > </div>

 </div >
    <div style="display: flex; margin: 40px;justify-content: space-around;">
        <div><a href="#" onclick="alert('THE price of this mobile is: 27000/-')">Oppo A5 2020</a>
        </div>

        <div>
            <a href="#" onclick="alert('THE price of this mobile is: 28000/-')">sony Z1</a>
        </div>

        <div>
            <a href="#" onclick="alert('THE price of this mobile is: 20000/-')">INFINIX A5</a>
        </div>

        <div>
            <a href="#" onclick="alert('THE price of this mobile is: 25000/-')">REDMI 5C </a>
        </div>
    </div>





    //3. Display 10 student records in table and each row should contain a delete button.
    // If you click on a button to delete a record, entire row should be deleted. 





    <p>Index Name class</p>
    <table id="myTable">

        <tr>
            <td>
                0 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                1 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                2 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                3 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        <tr>
            <td>
                4 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        <tr>
            <td>
                5 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                6 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                7&emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                8 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        <tr>
            <td>
                9 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>

    </table>

    <script>
        function Myfunction(r) {
            var i = r.parentNode.parentNode.rowIndex;

         document.getElementById("myTable").deleteRow(i);
        }</script>


   //4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.


   <img style="width: 500px; height: 500px; position: absolute; top: 20%; left: 20%;"
    onmouseover="this.src='https://i.pinimg.com/originals/e6/5b/43/e65b435feaa72fff13b067737bab8b06.jpg'"
    onmouseout="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWM0cofC9Hrc6wwRCP8e4854_Xo38BnfS9JQ&usqp=CAU'"
    src="https://i1.sndcdn.com/avatars-000380297672-xn8lfm-t500x500.jpg " >



//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button.
//And show updated counter value in browser. 



<h1 style="text-align: center;">Counter</h1>
    <div style=" display: flex; margin:20px 20px 20p 20px ;padding-left: 700px;">
  <button  style="width: 50px; height: 50px;"onclick="increase()">+</button>
  <h1 style="margin:0px 40px 0px 40px; font-size: 50px;"id="btn">0</h1>
  <button id="btn1" style="width: 50px; height: 50px;"onclick="decrease()">-</button>
</div>
<script>
function increase(){
    var foo= document.getElementById("btn").innerHTML
    foo++;
    document.getElementById('btn').innerHTML=foo;

}

function decrease(){
    var doo=document.getElementById("btn").innerHTML
    doo--;
    document.getElementById('btn').innerHTML=doo
}

</script>
// Create a signup form and display form data in your web page on submission


<div style="width: 400px; padding: 10% 0 0; margin: auto;"class="login-page">
        <div class="form">
            <form action="#" method="post" id="form_id" style="position: relative; z-index: 1;text-align: center; background-image:url(https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">
                <h1 style="color: honeydew;">Sign up form</h1><label style="color: green; padding: 15px; font-size: 30px;font-weight: bold; margin-left: 5px;">Email &emsp;</label>
           
                <input id="email" style="padding: 15px; margin: 0 0 15px; font-size: 14px;" type="email" placeholder="email" ><br><label style="color: green; padding: 15px; font-size: 30px; font-weight: bold;">Password</label>
                <input id="password" style="padding: 15px; margin: 0 0 15px; font-size: 14px;" type="password" placeholder="password"><br><label style="color: green; font-weight: bold; padding: 15px; font-size: 30px;">password</label>
                <input id="password" style="padding: 15px; margin: 0 0 15px; font-size: 14px;" type="password" placeholder="repeat password"><br>
                <button onclick='submit_by_id()' style="padding: 15px; margin: 0 0 15px; background-color: darkgreen; color: white; font-size: 20px;">Submit</button>
            </form>
        </div>
    </div> 


    <script>
    function submit_by_id() {
    var name = document.getElementById("email").value;
    var email = document.getElementById("password").value;
    if (validation()) 
    {
    document.getElementById("form_id").submit();
    alert(" Email : " + name + " password : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
    }
    </script>



    //2. Suppose in your webpage there is content area in which you have entered your item details,
    // but user can only see some details on first look.
    // When user clicks on “Read more” button, full detail of that particular item will be displayed.

    <p id="pera" >India has become the third country to record
    <a href="javascript:void(0)" onclick="readMore()" > read More</a></p>
   
   
    <script >  function readMore(){
    
        var text="India has become the third country to record more than 1m coronavirus infections, following the US and Brazil, as it reported 34,956 new cases in the past 24 hours, taking the national total to 1,003,832.New peaks continue to appear around the world, including an alarming rise in the Brittany region of France.Amid evidence that the disease was taking hold in poorer, rural areas of India with less effective public healthcare, the latest tally prompted renewed concerns about the country’s ability to cope with rising infections.The figures have been released after a week in which authorities in India were forced to impose new lockdowns, including fresh restrictions on 128 million people in the state of Bihar, which came into force on Thursday.The continuing and escalating outbreaks, on top of record cases in the United States – which passed 75,000 daily cases in the last count – have dampened hopes that the pandemic is anywhere close to being brought under control, even as researchers race to find a viable vaccine."
        var peragraph=document.getElementById('pera')
        peragraph.innerHTML=text
    }
        
    </script> 
    
    //3. In previous assignment you have created a tabular data using javascript. 
    //Let’s modify that. Create a form which takes student’s details and show each student detail in table. 
    //Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. 
    //On click on edit button, a hidden form will appear with the values of that row.  
   

    

    <body>
    <p>Index Name class</p>
    <table id="myTable">

        <tr>
            <td>
                0 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                    <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                1 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                            <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                2 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                3 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        <tr>
            <td>
                4 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        <tr>
            <td>
                5 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                6 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
         <tr>
            <td>
                7&emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                8 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        <tr>
            <td>
                9 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr> 

    </table>

    <script>
        function Myfunction(r) {
            var i = r.parentNode.parentNode.rowIndex;

         document.getElementById("myTable").deleteRow(i);
        }
        function EditFunction(f){
            var a=f.parentNode.firstChild.nodeValue;
            var EditValue=prompt("enter edit value",a)
            f.parentNode.firstChild.nodeValue=EditValue
        
        }
        
        </script>



// ASSIGNMENT 53-57  EVENTS

// 1.	Consider you have 4 images in a file as shown below: 


//Now When you click on an image it should display in a modal.
<style>
    .BigImage{
        height: 400px;
        width: 450px;
    }
    .img111{
        height: 200px;
        width:200px;
    }

</style>
</head>

<body style="text-align: center;">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   


  <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.15752-9/109401301_618700685424634_1245468504765277547_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=DZNVhWtCa5wAX-Ta6ea&_nc_ht=scontent-mrs2-1.xx&oh=4973a61dffb818d4f2139cdd990431e8&oe=5F3C540C">
   <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.15752-9/108592194_573078689985578_3693272520991813394_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=6cr75RU9ceAAX_sBVZ_&_nc_ht=scontent-mrs2-2.xx&oh=c5d9b2820fdfb4d21790689a5124eb64&oe=5F3F78F6" alt="">
  <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal "src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.15752-9/109545574_324191688969765_647437093853055875_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=TayqqmVJQswAX-J3SXH&_nc_ht=scontent-mrs2-2.xx&oh=737ab811ca69a9e40f2e42a9012429ed&oe=5F3C8B36" alt="">
  <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.15752-9/51161414_388799881923041_5130422590661197824_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=Z6hn0l1TEm4AX8VN6iH&_nc_ht=scontent-mrs2-1.xx&oh=3238235bffb09cce4fbff5b6a73aaaf5&oe=5F3DA430" alt="">
   
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      
        <div class="modal-body">
          <img class="BigImage" id="modalImage" src="">

        </div>
        
      </div>
    </div>
  </div>
  <script >
      function showImage(e){
    var modalImage=document.getElementById("modalImage");
    modalImage.src=e.src
}
  </script>










 {/* //2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-). */}
 {/* //  On each click on “zoom in”(+) , add 10px in font size of paragraph. */}
{/* //And on each click on “zoom out”(-) , minus 10px in font size of paragraph. */ */}
<div style="display: flex; ">
            <button style="width: 50px" onclick="Zoomin()">+</button>
            <p id ="pera" style="margin: 0px 20px 0px 20px;" > Shah Rukh Khan, also known by the initialism SRK, is an Indian actor, 
                film producer, and television personality. Referred to in the media as the "Baadshah of Bollywood", 
        </p><button style="width: 50px" onclick="ZoomOut()">-</button>
       </div>

       <script>
      
       function Zoomin(){
  var zoom =document.getElementById("pera");
  zoom.style.fontSize='2em'
  
}


function ZoomOut(){
   out= document.getElementById("pera")
   out.style.fontSize='1em';
    
}
       </script>



  // Assignment 58-67  DOM


  //1. Consider you have following code snippet: 
  //(Copy it in your HTML file) 
  <div> 
      <h1> DOM </h1> 
      <div id='form-content' class='content'>
       <label for='first-name'>First Name</label> 
       <input type='text' id='first-name' /> 
       <label for='last-name'>Last Name</label>
        <input type='text' id='last-name' /> 
        <label for='email'>Email</label> 
        <input type='text' id='email' />
         </div> <div id='main-content'
         class='content'> <p class='render'> First Name : Alex</p> 
         <p class='render' id='lastName'>Last Name: Bank</p> 
         <p class='render'> Email : alexbank@example.com</p>
          <p class='render'> Country : Pakistan </p>
           <p class='render'> contact : +92 300 1234567</p>
            </div> 
    </div> 
{/* // i. Get element of id “main-content” and assign them in a variable.
 // ii. Display all child elements of “main-content” element.
 // iii. Get all elements of class “render” and show their innerHTML in browser.
    // iv. Fill input value whose element id first-name using javascript. 
    //v. Repeat part iv for id ”last-name” and “email”.  */}


{  var a=(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]);
ii.   console.log(a.childNodes)
iii.  var b=document.getElementsByClassName('render')
for(i=0; i<b.length;i++){
  console.log(b[i].innerHTML)
}


iv.console.log(
    document.getElementById('first-name').value='shaheryar')
  
  
 v. console.log(
    document.getElementById('last-name').value='khan')
  
    console.log(
      document.getElementById('email').value='shaheryar724gmail.com')


    //   2.  use HTML code of question 1 and  show the result on browser. 
    //   i. What is node type of  element having id “form-content”. 
    {i.The nodeType property returns the node type, as a number, of the specified node. If the node is an element node, the nodeType property will return 1.
        If the node is an attribute node, the nodeType property will return 2. If the node is a text node, the nodeType property will return 3
         now we have element node so it gives 1
    //   ii. Show node type of element having id “lastName” and its child node.
    ii.
     console.log(document.getElementById('lastName').nodeType)

     console.log(document.getElementById('lastName').childNodes)


    //    iii. Update child node of element having id “lastName”. 
    iii.var textnode = document.createTextNode("khan");


     var item = document.getElementById("lastName").childNodes;
     
     
     item.replaceChild(textnode, item.childNodes);

    //    iv. Get First and last child of id “main-content”. 
    
    iv.console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1]);
     
    console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].lastChild);
    //    v. Get next and previous siblings of id “lastName”. 
    v.console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3].previousSibling);
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3].nextSibling);

    //    vi. Get parent node and node type of element having id “email”


    console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[4].parentNode);
    console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[4].nodeType);


    
   

     
     


