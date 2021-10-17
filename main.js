const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');



function createElement(tagName, className){
    const tag = document.createElement(tagName);
    if(className){
        tag.classList.add(className);
    }
    return tag;
}



function createPlayer(playerObj){
    const player = createElement('div', `player${playerObj.player}`);
    

        const progressbar = createElement('div', 'progressbar');

            const progressbar_life = createElement('div', 'life');
            progressbar_life.style.width = `${playerObj.hp}%`;

            const progressbar_name = createElement('div', 'name');
            progressbar_name.innerText = `${playerObj.name}`;

            progressbar.appendChild(progressbar_life);
            progressbar.appendChild(progressbar_name);


        const character = createElement('div', 'character');

            const img = createElement('img');
            img.src = playerObj.img

            character.appendChild(img);

    player.appendChild(progressbar);
    player.appendChild(character);
    return player;
}





const player1 = {
    name:"Liukang",
    player:1,
    hp:100,
    img:"http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon:['Кортана', 'Когти', 'Злая Собака'],
    attack: function (){
        console.log(`${this.name} Fight`)
    }
}
const player2 = {
    name:"Subzero",
    player:2,
    hp:100,
    img:"http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon:['Кортана', 'Когти', 'Злая Собака'],
    attack: function (){
        console.log(`${this.name} Fight`)
    }
}


function changeHP(player){
    const playerLife = document.querySelector(`.player${player.player} .life`);

    const current_hp = playerLife.style.width.slice(0, -1);


    const hp_min = Math.floor(Math.random(1,20)*20);
    //console.log(hp_min);

   

    console.log(`Сейчас: "${current_hp}" `);


    player.hp -= hp_min;
    try_ph = (current_hp - hp_min);

    if(try_ph <= 0){
        console.log(` ${player.name}, Будет меньше нуля "${try_ph}" `);
        try_ph = 0;
        randomButton.disabled = true
    }else{
        console.log(`${player.name}, Будет: "${try_ph}" `);
    }


    playerLife.style.width = `${player.hp}%`;

    if(player.hp <= 0){
        arenas.appendChild(playerLose(player.name));
    }
}

function playerLose(name){
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = `${name} lose`;
    return loseTitle;
}


randomButton.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);
})




arenas.appendChild(createPlayer(player1)); 
arenas.appendChild(createPlayer(player2)); 




