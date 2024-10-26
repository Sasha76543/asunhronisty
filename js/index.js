// 1
// let count = 0;

// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Повідомлення ${count}`);
//     alert("Привіт");
//     alert("Як справи");
//     alert("В мене все добре");
//     alert("Сьогдні їду в село");
//     alert("Піду на рибалку");

//     if (count === 5) {
//         clearInterval(intervalId);
//         console.log("Інтервал зупинено.");
//     }
// }, 1000); 

//2

// const boxes = [
//     document.getElementById('box1'),
//     document.getElementById('box2'),
//     document.getElementById('box3')
// ];

// let position = 0;
// let size = 50;
// let direction = 1; 


// function animateBoxes() {
//     position += 5 * direction; 
//     size += 2 * direction;   

   
//     boxes.forEach((box, index) => {
      
//         const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        
//         box.style.left = (position + index * 30) + 'px'; 
//         box.style.width = size + 'px';                   
//         box.style.height = size + 'px';                 
//     });

//     if (position > 200 || position < 0 || size > 100 || size < 50) {
//         direction *= -1;
//     }
// }

// const intervalId = setInterval(animateBoxes, 100);


// 3
// const gameArea = document.getElementById('game');
// const scoreDisplay = document.getElementById('score');


// let score = 0;
// let timeLimit = 10000; 


// const creat = document.createTarget(() => {
//     const target = document.createElement('div');
//     target.classList.add('target');

  
//     target.style.left = `${Math.floor(Math.random() * 250)}px`;
//     target.style.top = `${Math.floor(Math.random() * 250)}px`;


//     target.addEventListener('click', () => {
//         score++;
//         scoreDisplay.textContent = score;
//         target.remove();
//     });

//     gameArea.appendChild(target);

//     setTimeout(() => {
//         if (target.parentElement) target.remove();
//     }, 1000);
// });


// const gameInterval = setInterval(createTarget, 1000);


// setTimeout(() => {
//     clearInterval(gameInterval);
//     alert(`Гру завершено! Ваші очки: ${score}`);
// }, timeLimit);

//4
    function startTimer() {
        const timeInput = document.getElementById('time').value;
        const message = document.getElementById('message');

        if (timeInput && timeInput > 0) {
            const timeInSeconds = parseInt(timeInput);
            message.textContent = `Таймер запущено на ${timeInSeconds} секунд.`;

            setTimeout(() => {
                message.textContent = `Час вийшов! Пройшло ${timeInSeconds} секунд.`;
            }, timeInSeconds * 1000); 
        } else {
            message.textContent = "Будь ласка, введіть коректний час у секундах.";
        }
    }