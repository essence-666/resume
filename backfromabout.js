document.getElementById('back').addEventListener('click', function two() {
    const newElement = document.createElement('div');
    newElement.innerHTML = `
    <div class = "main-div"> 
            
        <img src="mob.avif" alt="" class="mob">
        <p class="links">
            Egor Belozerov <br>
            Hello! I'am first year bachelor Innopolis University Student <br>
            <a href="https://github.com/essence-666"><img class ="icons" src="git.svg" alt=""></a> 
            <a href="https://leetcode.com/u/essence-/"><img class ="icons" src="leetcode.png" alt=""></a>
            <a href="https://t.me/againlose"><img class ="icons" src="Telegram_logo.svg.webp" alt=""></a> 
        </p>
    </div class>  
        <button id = "about" class="button-27" role="button">About me</button>
        <script src="script.js"></script>
        <button id = "projects" class="button-27" role="button">Projects</button>
    `;

    newElement.id = "core";

    const elementToReplace = document.getElementById('aboutdiv');

    elementToReplace.parentNode.replaceChild(newElement, elementToReplace);

});