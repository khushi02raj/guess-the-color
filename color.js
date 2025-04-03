function getRandomColor()
{
    const r= Math.floor(Math.random() * 256);
    const g= Math.floor(Math.random() * 256);
    const b= Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
const getRandomId=()=>{
   return Math.floor(Math.random() * 3) + 1;
}

const qs=document.getElementById('target-color');
const o1=document.getElementById('1');
const o2=document.getElementById('2');
const o3=document.getElementById('3');
const option=document.querySelector('.options');

// Initialize score from localStorage or set to 0 if not present
let score = parseInt(localStorage.getItem('score')) || 0;
const scoreElement = document.getElementById('score');
scoreElement.textContent = `Streak: ${score}`;

const ans=getRandomColor();
const idx=getRandomId();

if(idx===1)
{
    o3.style.backgroundColor=getRandomColor();
    o2.style.backgroundColor=getRandomColor();
}
else if(idx===2)
{
    o1.style.backgroundColor=getRandomColor();
    o3.style.backgroundColor=getRandomColor();
}
else if(idx===3)
{
    o1.style.backgroundColor=getRandomColor();
    o2.style.backgroundColor=getRandomColor();
}


const [r, g, b] = ans.match(/\d+/g).map(Number); // Extract RGB values
// Convert to HEX 
const hexColor = rgbToHex(r, g, b);
qs.innerText=hexColor;

document.getElementById(idx).style.backgroundColor=ans;


option.addEventListener('click',(e)=>
{
    const selectedColor=e.target.style.backgroundColor;
    const message = document.getElementById('message');
    if(selectedColor===ans)
    {
        message.textContent = 'Correct!';
        message.style.color = 'green';
        score += 1;
        localStorage.setItem('score', score);
        location.reload();
    }
    else
    {
        message.textContent = 'Try Again!';
        message.style.color = 'red';
        score = Math.max(0, score - 1);
        localStorage.setItem('score', score);
    }

    scoreElement.textContent = `Streak: ${score}`;
})
