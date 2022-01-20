const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "images/ground.png";

const foodImg = new Image();
foodImg.src = "images/food.png";

let box = 32; // размер клетки

let score = 0; // счет

let food = { // отображение еды
	x: Math.floor((Math.random() * 17 + 1)) * box, // кол клеток 17
	y: Math.floor((Math.random() * 15 + 3)) * box, // кол клето 15 +
    // это диапазон рандомного появления
};

let snake = [];
snake[0] = { // координаты для первого элемента

	x: 9 * box,
	y: 10 * box
};

document.addEventListener("keydown", direction);// обработчик событей


let dir;
function direction(event) { // проверка на какую клавишу мы нажали
	if(event.keyCode == 37 && dir != "right")// keyCode говорит на какую клавишу мы нажали
    // код 37 это клавиша в лево доп проверка чтоб змейка логично двигалась
		dir = "left";
	else if(event.keyCode == 38 && dir != "down")
		dir = "up";
	else if(event.keyCode == 39 && dir != "left")
		dir = "right";
	else if(event.keyCode == 40 && dir != "up")
		dir = "down";
}



function eatTail(head, arr) { // если змия укисит себя head координаты головы.  arr врсе эл змейки
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
	}
}

//    setTimeout(function(){ document.getElementById("mark").innerHTML=i;},2000);
function gameOff(){
    document.getElementById("mark").innerHTML= 'GAME OVER!';
    setTimeout(function(){  location.reload();},2000);
}

function drawGame() {
	ctx.drawImage(ground, 0, 0);
    // позволяет нарисовать картинку в указаный координатах

	ctx.drawImage(foodImg, food.x, food.y);// отрисовка марковки с рандомными координатами

	for(let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i == 0 ? "green" : "red";
        // fillStyle добавляет цвет змейки  а для всех остальных красный
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
        // fillRect создайот квадрт змейку
	}

	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText(score, box * 2.5, box * 1.7);// отресовует кол сьединых марковок

	let snakeX = snake[0].x;// хранит координату по иксу
	let snakeY = snake[0].y;// хранит координату по игрику

	if(snakeX == food.x && snakeY == food.y) { // змейка кушает еду проверка
		score++; 
		food = { // создайом на новой координате змейку
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,
		};
	} else
		snake.pop(); // удаляет последний эл в массиве
       // это надо чтоб менять координати головы



	if(snakeX < box || snakeX > box * 17 // если выходит за приделы игрового поля
		|| snakeY < 3 * box || snakeY > box * 17){
          
            gameOff();
        }
       



	if(dir == "left") snakeX -= box; //если кнопка лефт то передвигаем на одну клеточку в лево
    
	if(dir == "right") snakeX += box;
	if(dir == "up") snakeY -= box;
	if(dir == "down") snakeY += box;

	let newHead = { // создайот голову на новой коодинате
		x: snakeX,
		y: snakeY
	};

	eatTail(newHead, snake);

	snake.unshift(newHead);// метод unshift() позволяет добавить один, или более элементов в начало массива. 
}

let game = setInterval(drawGame, 1000);// скорость змейки