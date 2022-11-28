function toggleNavMenu()
{
    var menu = document.querySelector("nav");
    menu.classList.toggle("navHide");
    menu.focus();
 
}


function SetTheme()
{
    var theme = document.documentElement.className;
    if(theme=="dark")
    {
        document.documentElement.className="light";
    }
    else
    {
        document.documentElement.className="dark";
    }
}

