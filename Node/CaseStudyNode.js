var http = require("http");
var empData =[
{
	emp_id:1,
    emp_name:"Ajay",
    emp_email:"ajay@gmail.com",
    emp_age:25,
    emp_contact:9876543211
    
},
{
	emp_id:2,
    emp_name:"NItin",
    emp_email:"nitin@gmail.com",
    emp_age:20,
    emp_contact:9800043211
    
},
{
	emp_id:3,
    emp_name:"Nil",
    emp_email:"nil@gmail.com",
    emp_age:20,
    emp_contact:9811213211
    
},
{
	emp_id:4,
    emp_name:"Maya",
    emp_email:"maya@gmail.com",
    emp_age:22,
    emp_contact:9800049991
    
},
{
	emp_id:5,
    emp_name:"Sumit",
    emp_email:"sumit@gmail.com",
    emp_age:21,
    emp_contact:9111043211
    
}
]

var controller=function(request,response)
{
	response.writeHead(200,{"Content-Type" : "text/plain"});
	response.end( JSON.stringify(empData));
};
var server=http.createServer(controller);
server.listen(5000);
console.log("listening on port 5000");