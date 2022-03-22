const numbers = [1,2,3,4,5];
function addOne(array,no)
{
    for(let i=0;i<array.length;i++)
        document.getElementsByTagName('li')[i+no].innerText = array[i]+1;
}
addOne(numbers ,0);
numbers.forEach((number) => console.log(number+1));
addOne(numbers,5);
function isOdd(array,oddArr=[])
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
            oddArr.push(array[i]);
    }
    return oddArr;
}
let oddArr = isOdd(numbers);
for(let i =0;i<oddArr.length;i++)
    document.getElementsByTagName('li')[i+10].innerText = oddArr[i];
oddArr = numbers.filter((number) => number%2!=0);
for(let i=0;i<oddArr.length;i++)
document.getElementsByTagName('li')[i+13].innerText = oddArr[i];