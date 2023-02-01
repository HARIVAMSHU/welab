console.log(sum("hari",1,2,3,4,5));
function sum(name,...arguments)
{
    let sum=0;
    for(let i in arguments)
    {
        sum=sum+arguments[i];
    }
    return sum;

}