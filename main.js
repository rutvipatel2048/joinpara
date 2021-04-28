var inputs=[];

function getp1()
{
for (var i=1;i<=6;i++)
{
    var single_line=document.getElementById("p1_i"+ i).value;
    inputs.push(single_line);
    console.log(inputs);
}
var remove_commas=inputs.join(".");
document.getElementById("show_para1").innerHTML=remove_commas;
} 


var input=[];
function getp2()
{
for (var i=1;i<=6;i++)
{
    var single_lines=document.getElementById("p2_i"+ i).value;
    input.push(single_lines);
    console.log(input);
}
var remove_commas=input.join(".");
document.getElementById("show_para2").innerHTML=remove_commas;
} 
