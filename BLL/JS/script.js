//window.alert("JS CONECTADO")

var reply_click_about = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    window,open('about.html');
}
var reply_click_services = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    window,open('services.html');
}
var reply_click_portfolio = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    window,open('portfolio.html');
}
var reply_click_home = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    window,open('index.html');
}
var reply_click_contact = function()
{
    //alert("Button clicked, id "+this.id+", text"+this.innerHTML);
    window,open('contact.html');
}

document.getElementById('btnHome').onclick = reply_click_home;
document.getElementById('btnAbout').onclick = reply_click_about;
document.getElementById('btnServices').onclick = reply_click_services;
document.getElementById('btnPortfolio').onclick = reply_click_portfolio;
document.getElementById('btnContact').onclick = reply_click_contact;