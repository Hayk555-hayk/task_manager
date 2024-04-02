const sport_tasks = [
    { task: 'Гантели бицепс и ноги ягоды', count: 15 },
    { task: 'Тренажер бицепс и ноги обычный', count: 20 },
    { task: 'Гантели грудь лежа и пресс обычный', count: 25 },
    { task: 'Гантели плечи рвв и ноги колено удар', count: 10 },
    { task: 'Гантели трицепс лежа и ноги обычный', count: 15 },
    { task: 'Жим лежа на грудь и пресс скалолаз', count: 15 },
    { task: 'Жим лежа на бицепс и пресс скалолаз', count: 15 },
    { task: 'Гантели спина обычный и спина на себя', count: 15 },
    { task: 'Пресс половина и пресс ноги', count: 15 },
    { task: 'Пресс скалолаз и пресс паук', count: 15 },
    { task: 'Тренажер плечи стоя и ноги удар коленами', count: 15 },
    { task: 'Гантели ноги обычный и ноги кисть', count: 15 },
    { task: 'Штанга бицепс и ноги ягоды', count: 15 },
    { task: 'Штанга грудь лежа и пресс обычный', count: 25 },
    { task: 'Штанга плечи рвв и ноги колено удар', count: 10 },
    { task: 'Штанга трицепс лежа и ноги обычный', count: 15 },
    { task: 'Штанга спина обычный и спина на себя', count: 15 },
    { task: 'Штанга ноги обычный и ноги кисть', count: 15 },
  ];
  
  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * sport_tasks.length);
    return sport_tasks[randomIndex];
  }
  
  function displayRandomTask() {
    const randomTask = getRandomTask();
    let main_block = document.querySelector('.actual_task')
    console.log(main_block)
    console.log('Random Product:', randomTask);
    main_block.innerHTML = `
        <div class="random_task">
            <p>${randomTask.task} - ${randomTask.count}</p>
        </div>
    `;
  }
  
  window.addEventListener('load', displayRandomTask);
  