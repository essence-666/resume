document.addEventListener('DOMContentLoaded', function() {
    function showMainMenu() {
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class = "main-div"> 
            
            <img src="mob.avif" alt="" class="mob">
            <p class="links">
            Hi! I am  a first year undergraduate student at Innopolis University <br>
                <a style = "margin-left: 53%" href="https://github.com/essence-666"><img class ="icons" src="git.svg" alt=""></a> 
                <a href="https://leetcode.com/u/essence-/"><img class ="icons" src="leetcode.png" alt=""></a>
                <a href="https://t.me/againlose"><img class ="icons" src="Telegram_logo.svg.webp" alt=""></a> 
                <a href="mailto:6ejlo3epobnt@gmail.com"><img class ="icons" src="281769.png" alt=""></a> 
            </p>
        </div>  
            <button id="about" class="button-27" role="button">About me</button>
            <button id="projects" class="button-27" role="button">Projects</button>
        `;
        newElement.id = "core";

        const elementToReplace = document.getElementById('aboutdiv') || document.getElementById('projectsdiv');

        elementToReplace.parentNode.replaceChild(newElement, elementToReplace);

        attachEventListeners();
    }

    function attachEventListeners() {
        document.getElementById('about').addEventListener('click', function showAboutMe() {
            const newElement = document.createElement('div');
            newElement.innerHTML = `
            <div class = "main-div">
                <ul style = "padding: 5%">
                   <li>Belozerov Egor 18 yo</li>
                   <li>Innopolis University Student 2023-2027 june</li>
                   <li>stack: backend - C#/.net, ++, python (a litle bit html,css,js,ts)</li>
                   <li>linux native</li>
                   <li>english b2 proficiency level</li>
                   <li>in love with algorithms</li>
               </ul>
               </div>
                <button id="back" class="button-27" role="button">Back</button>

            `;
            newElement.id = "aboutdiv"; 

            const elementToReplace = document.getElementById('core');

            elementToReplace.parentNode.replaceChild(newElement, elementToReplace);

            document.getElementById('back').addEventListener('click', showMainMenu);
        });
        
        document.getElementById('projects').addEventListener('click', function showProjects() {
            const newElement = document.createElement('div');
            newElement.innerHTML = `
            <div class = "main-div">
                <ul style = "padding: 5%">
                    <li>c# anonymous telegram bot <a href="https://github.com/essence-666/c-AnonBot">git</a></li>
                    <li>python ask/answer site <a href="https://github.com/essence-666/flaskwebproject">git</a> </li>
                    <li>python bot schedulling parsing <a href="https://github.com/essence-666/scrapperbottg">git</a></li>
                </ul>
            </div>
                <button id="back" class="button-27" role="button">Back</button>
            `;
            newElement.id = "projectsdiv"; 

            const elementToReplace = document.getElementById('core');

            elementToReplace.parentNode.replaceChild(newElement, elementToReplace);

            document.getElementById('back').addEventListener('click', showMainMenu);
        });
    }

    attachEventListeners();
});
