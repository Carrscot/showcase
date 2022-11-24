const change = document.querySelectorAll('.titleBox');
    change.forEach(div => div.addEventListener('mouseover', () => {div.classList.add('mouseOver')}));
    change.forEach(div => div.addEventListener('mouseout', () => {div.classList.remove('mouseOver')}));
    
const calc = document.querySelector('#calc');
    calc.addEventListener('click',() => window.open('Calculator/index.html', '_blank'));

const EAS = document.querySelector('#EAS');
    EAS.addEventListener('click',() => window.open('EAS/index.html', '_blank'));

const RPS = document.querySelector('#RPS');
    RPS.addEventListener('click',() => window.open('rock-paper-scissors/index.html', '_blank'));

const landing = document.querySelector('#landing');
    landing.addEventListener('click',() => window.open('landing-page/index.html', '_blank'));

const recipes = document.querySelector('#recipes');
    recipes.addEventListener('click',() => window.open('odin_recipes/index.html', '_blank'));