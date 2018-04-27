var customerList=[];
var customerDetails=[];
//var cnt={};
function cnt(){
	this.customer=customer;
	this.todo=todo;
}
var node = document.getElementsByTagName("LI");
var i;
for (i = 0; i < node.length; i++){
	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  node[i].appendChild(span);
} 


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
	    close[i].onclick = function(){
	    var div = this.parentElement;
	    div.style.display = "none";
    }
}

function show() 
{
	var div=document.getElementById("myPopup");
	div.style.display="block";
}

// Function constructor for customer 
function Customer(fname,lname,email)
{
    this.fname=fname;
	this.lname=lname;
	this.email=email;
}

var i;
function addCustomer(){
	var fname=document.getElementById("first").value.trim();
	var lname=document.getElementById("last").value.trim();
	var email=document.getElementById("address").value;
	var flag = 1;
	console.log(email);
	
	if (fname === '') 
	{
   		alert("You must write something!");
    } 
    else
    {
    	if(customerList.length != 0&&email!=""){

	    
    	for(i=0;i<customerList.length;i++){
    		if(email===customerList[i].email){
    			alert("customer email already exist");
    			flag = 0;
    		}
    	}}
    	if(flag!=0)
    		{
    			var cust = new Customer(fname,lname,email);
				customerList.push(cust);
				cnt.customer=cust;
				customerDetails.push(cnt);
				console.log(customerList);
				createList(fname + " " + lname,"customerList");
			    document.getElementById("myPopup").style.display="none";
		    	document.getElementById("address").value = "";
		    	document.getElementById("last").value = "";

		    	document.getElementById("first").value = "";

		    	document.getElementById("firstName").value = fname;
		    	document.getElementById("lastName").value = lname;
		    	document.getElementById("email").value = email;

    		}
    	}
    	

	}
function mapElement(){
    		//alert("hi");
    		var name = this.innerText;
			name = name.substring(0,name.length-2);
    		//alert(name);
    		for(i=0; i<customerList.length; i++){
    			//console.log(customerList[i]);
    			if(customerList[i].fname == name){
    			document.getElementById("firstName").value = customerList[i].fname;
		    	document.getElementById("lastName").value = customerList[i].lname;
		    	document.getElementById("email").value = customerList[i].email;


    			}
    		}
    	}


function checkList(ele){
	console.log(this);

    var firstName=this.parentElement;//document.getElementById("firstName").value;
    var flag = 0;
    for(i=0;i<customerList.length;i++){
        if(firstName==customerList[i].fname){
        	document.getElementById("firstName").value = customerList[i].fname;
		    document.getElementById("lastName").value = customerList[i].lname;
		    document.getElementById("email").value = customerList[i].email;
		}
	}
}

// Function constructor for Todo list
var todoList=[];
function Todo(item){
   this.item=item;

}

// Adding elements as a list 

function addItem(){
    var item= document.getElementById("inputTodo").value.trim();
       
    if (item === '') 
    {
        alert("You must write something!");
    } 
    else 
    {
    	var todoItem= new Todo(item);
    	todoList.push(todoItem);
    	console.log(todoList);
    	createList(item,"TodoList");
    	//
    	document.getElementById("inputTodo").value = "";

    }
    document.getElementById("inputTodo").value="";
     
}
/* mapTodo(){
    		var name = this.innerText;
			name = name.substring(0,name.length-2);
    		//alert(name);
    		for(i=0; i<todoList.length; i++){                                                  
    			//console.log(customerList[i]);
    			if(todoList[i].fname == name){
    			document.getElementById("firstName").value = customerList[i].fname;
		    	document.getElementById("lastName").value = customerList[i].lname;
		    	document.getElementById("email").value = customerList[i].email;


    			}
    		}
}
*/
function createList(item,listId){
	var list = document.createElement("li");
	list.className="customerLi";
	list.addEventListener("click",mapElement,false);
	//list.addEventListener("click",mapTodo,false);
	//list.onclick = mapElement;
    var todoNode=document.createTextNode(item);
    list.appendChild(todoNode);
	document.getElementById(listId).appendChild(list);
	//document.getElementById(listId).value="";
	var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);	    
    list.appendChild(span);
	
   	list.onclick=checkList(this);

	for (i = 0; i < close.length; i++)
   	{
    	close[i].onclick = function() {
	    	var div = this.parentElement;
 	      	div.style.display = "none";
		}
	}
}

