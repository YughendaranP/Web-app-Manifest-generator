//selector
const bodyContainer=document.querySelector("body");
const screenOne=document.querySelector(".screen-one");
const screenTwo=document.querySelector(".screen-two");
const screenThree=document.querySelector(".screen-three");
const smallScreenOne=document.querySelector(".home-screen");
const smallScreenTwo=document.querySelector(".splash-screen");
const smallScreenThree=document.querySelector(".app-screen");
var imageUrl="";
//event
document.querySelector(".mainfest-input").addEventListener("change",(e)=>{modifyJson(e)})
window.addEventListener("load",()=>{
document.querySelectorAll(".mainfest-input input").forEach(clear);
function clear(item,index)
{
    if(item.className=="name")
    {
        item.value="My app";
    }
    else if(item.className=="start_url")
    {
        item.value="/";
    }
    else if(item.className=="scope")
    {
        item.value="/";
    }
    else
    {
        item.value="";
    }
}
document.querySelectorAll("select")[0].value="browser";
document.querySelectorAll("select")[1].value="any";
})
//function
function copyToClipboard()
{
    clipboard=document.createElement("input");
    clipboard.type="text";
    bodyContainer.appendChild(clipboard);
    clipboard.value=document.querySelector(".manifest-json code").innerText;
    clipboard.select();
    clipboard.setSelectionRange(0, 99999);
    document.execCommand("copy"); 
    bodyContainer.removeChild(clipboard);
}
function insertIcon()
{
    file=document.createElement("input");
    file.type="file";
    bodyContainer.appendChild(file);
    file.click();
    file.addEventListener("change",()=>{
        imageUrl=URL.createObjectURL(file.files[0]);
        document.querySelectorAll(".icon-shape").forEach(insetIcon);
        function insetIcon(item,index)
        {
            item.innerHTML="<img src='"+imageUrl+"' style='width:45px;height:45px'>";
            console.log("<img src='"+imageUrl+"'>");
        }
        document.querySelector(".inner-splash-logo").innerHTML="<img src='"+imageUrl+"' style='width:75px;height:75px'>";
        bodyContainer.removeChild(file);
    })
    shiftScreenOne();
}
function modifyJson(e)
{
    if(e.target.className=="name")
    {
        document.querySelectorAll(".icon-container p").forEach(changeName);
        function changeName(item,index)
        {
            item.innerHTML=e.target.value;
        }
        document.querySelector(".splah-screen-description").innerHTML=e.target.value;
        document.querySelector(".minimal p").innerHTML=e.target.value+"<br><span>https://www.google.com</span>";
    }
    if(e.target.className=="background_color")
    {
        document.querySelector(".screen-two").style.background=e.target.value;
    }
    if(e.target.className=="theme_color")
    {
        document.querySelector(".top-bar").style.background=e.target.value;
        document.querySelector(".standalone-box").style.background=e.target.value;
        document.querySelector(".minimal").style.background=e.target.value;
    }
    if(e.target.className=="orientation")
    {
        shiftScreenThree();
        if((e.target.value=="landscape"))
        {
            screenThree.style.width="444px";
            screenThree.style.height="216px";
            screenTwo.style.width="444px";
            screenTwo.style.height="216px";
        }
        if((e.target.value=="any")||(e.target.value=="natural")||(e.target.value=="portrait"))
        {
            screenThree.style.width="216px";
            screenThree.style.height="444px";
            screenTwo.style.width="216px";
            screenTwo.style.height="444px";
        }
    }
    if(e.target.className=="display")
    {
        shiftScreenThree();
        if(e.target.value=="browser")
        {
            document.querySelector(".top-bar").style.display="flex";
            document.querySelector(".standalone-box").style.display="flex";
            document.querySelector(".minimal").style.display="none";
        }
        if(e.target.value=="standalone")
        {
            document.querySelector(".top-bar").style.display="none";
            document.querySelector(".standalone-box").style.display="flex";
            document.querySelector(".minimal").style.display="none";
        }
        if(e.target.value=="minimal-ui")
        {
            document.querySelector(".top-bar").style.display="none";
            document.querySelector(".standalone-box").style.display="none";
            document.querySelector(".minimal").style.display="flex"; 
        }
        if(e.target.value=="fullscreen")
        {
            document.querySelector(".top-bar").style.display="none";
            document.querySelector(".standalone-box").style.display="none";
            document.querySelector(".minimal").style.display="none";
        }
    }
    document.querySelectorAll("."+e.target.className)[1].innerHTML='"'+e.target.value+'"';
}
function shiftScreenOne()
{
    smallScreenOne.style.color="rgb(10, 97, 211)"
    smallScreenTwo.style.color="black"
    smallScreenThree.style.color="black"
    screenOne.style.display="flex";
    screenTwo.style.display="none";
    screenThree.style.display="none";
}
function shiftScreenTwo()
{
    smallScreenOne.style.color="black"
    smallScreenTwo.style.color="rgb(10, 97, 211)"
    smallScreenThree.style.color="black"
    screenOne.style.display="none";
    screenTwo.style.display="flex";
    screenThree.style.display="none";
}
function shiftScreenThree()
{
    smallScreenOne.style.color="black"
    smallScreenTwo.style.color="black"
    smallScreenThree.style.color="rgb(10, 97, 211)"
    screenOne.style.display="none";
    screenTwo.style.display="none";
    screenThree.style.display="block";
}
function success()
{
    document.querySelector(".copy").style.background="rgb(10, 97, 211)";
}
function progress()
{
    document.querySelector(".copy").style.background="black";
}
