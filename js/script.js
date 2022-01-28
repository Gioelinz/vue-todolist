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
    },
    methods: {
        removeTask(index) {
            this.tasks = this.tasks.filter((item, i) => {
                if (index === i) return false
                return true
            })
        }
    }
});
