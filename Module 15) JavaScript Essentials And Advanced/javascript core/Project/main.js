var myVar;
function mainFunction()
{
    myVar = setTimeout(display(), 3000);
}
function display()
{
    document.getElementById("mai-content").style.display = "block";
    document.getElementById("loader").style.display = "none";
}