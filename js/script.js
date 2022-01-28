console.log('vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            {
                text: "Fare la spesa",
                isdone: false,
            },
            {
                text: "Uscire il cane",
                isdone: false,
            },
            {
                text: "Cucinare",
                isdone: false,
            },
            {
                text: "Formattare il PC di Nonno",
                isdone: true,
            },
        ]
    }
});
