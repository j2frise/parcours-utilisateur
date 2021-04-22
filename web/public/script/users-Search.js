function divo(txtval)
{
    if (txtval.length > 0)
    {
        document.getElementById('div-users').style.display = 'block'; 
    } else {
        document.getElementById('div-users').style.display = 'none'; 
    }
}