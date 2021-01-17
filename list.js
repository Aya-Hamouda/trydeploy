
var inputname=document.getElementById("name")
//var inputid=document.getElementById("id")
var inputemail=document.getElementById("email")
var inputnumber=document.getElementById("number")
var editbtn = document.createElement("button");
var deletebtn = document.createElement("button");
editbtn.innerHTML = "EDIT";
deletebtn.innerHTML = "DELETE";


var myform=document.getElementById("myform")
var prevent=function(e){e.preventDefault();}
myform.addEventListener("submit",prevent)


var table = document.getElementById("myTable");

var subbtn=document.getElementsByClassName("registerbtn")


class Contacts{
    constructor(name,email,number){
        this.Id=ID;
        this.Name=name;
        this.Email=email;
        this.Number=number;  
    }


    
}
class ContactList {
    
    constructor(name){
      this.name = name;
      this.Contacts = [];
    }
    // addContact(ContactObj){
    //   Object.defineProperty(ContactObj,'Id',{writable:false})
    //   this.Contacts.push(ContactObj)
      
    // }
    
    // editContact (id, updateObj){
    //     this.Contacts[id] = updateObj;
    // }
    
    // removeContact(id){
    //     delete this.Contacts[id];
    //     document.getElementById(id).style.display = "none"
    // }
   
}
Object.defineProperty(Contacts, "Id", { writable: false , configurable: false})

var ID=1;
var row=0;

function addcontact(){
    var rownum = table.insertRow(row+1);
    
    var cell1 = rownum.insertCell(0);
    var cell2 = rownum.insertCell(1);
    var cell3 = rownum.insertCell(2);
    var cell4 = rownum.insertCell(3);
    var cell5 = rownum.insertCell(4);
    var cell6 = rownum.insertCell(5);
    
    
    cell1.innerHTML = ID;
    ID++;
    cell2.innerHTML = inputname.value;
    cell3.innerHTML = inputemail.value;
    cell4.innerHTML = inputnumber.value;
    
    //i could not clone the button
    cell5.appendChild(editbtn)
    cell6.appendChild(deletebtn)
    row++;

    inputname.value=" "
    inputemail.value=" "
    inputnumber.value=" "

    deletebtn.addEventListener ("click",deletecontact);
    

    //do not work outside this fun??

} 

function deletecontact() {
    table.deleteRow(1);
    row-1
  }

  

function editcontact() {
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            inputname.value = table.row[1].cells[1].innerHTML
            inputemail.value = table.row[1].cells[2].innerHTML
            inputnumber.value = table.row[1].cells[3].innerHTML
        }
    }
    
 }
editbtn.addEventListener ("click",editcontact);

myform.addEventListener('submit',addcontact);







