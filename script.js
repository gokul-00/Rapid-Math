let a=0,b=0;
        let quest = document.getElementById('quest');
        let ans = document.getElementById('answer');
        let inputitem = document.getElementById('inputitem');
        let button = document.getElementById('enter-btn');

        button.addEventListener('click',()=>{
            console.log(inputitem.value)
        })

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        function getQuest(){
            a = getRndInteger(10,99);
            b = getRndInteger(10,99);
            quest.innerHTML = `${a} x ${b} :`;
            ans.innerHTML = "";
        }

        function answer(){
            ans.innerHTML = a*b;
        }