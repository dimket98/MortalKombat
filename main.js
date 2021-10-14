function createPlayer(nameClass, playerObj){
    const player = document.createElement('div');
    player.classList.add(nameClass);

        const progressbar = document.createElement('div');
        progressbar.classList.add('progressbar');

            const progressbar_life = document.createElement('div');
            progressbar_life.classList.add('life');
            progressbar_life.style.width = `${playerObj.hp}%`;

            const progressbar_name = document.createElement('div');
            progressbar_name.classList.add('name');
            progressbar_name.innerText = `${playerObj.name}`;

            progressbar.appendChild(progressbar_life);
            progressbar.appendChild(progressbar_name);


        const character = document.createElement('div');
        character.classList.add('character');

            const img = document.createElement('img');
            img.src = playerObj.img

            character.appendChild(img);

    player.appendChild(progressbar);
    player.appendChild(character);

    
    const arenas = document.querySelector('.arenas');
    arenas.appendChild(player);
}

const player1 = {
    name:"Liukang",
    hp:50,
    img:"http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon:['Кортана', 'Когти', 'Злая Собака'],
    attack: function (){
        console.log(`${this.name} Fight`)
    }
}
const player2 = {
    name:"Subzero",
    hp:80,
    img:"http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon:['Кортана', 'Когти', 'Злая Собака'],
    attack: function (){
        console.log(`${this.name} Fight`)
    }
}

createPlayer('player1', player1);
createPlayer('player2', player2);