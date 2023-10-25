console.log("Hello World");

const { createApp } = Vue

createApp({
  data() {
    return {
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
            {
                text: 'Lavare i piatti',
                done: false
            },
            {
                text: 'Portare fuori il cane',
                done: true
            },
            {
                text: 'Bere il caffè',
                done: true
            }
        ]
    }
},
methods: {
    removeTodo(index) {
        this.todos.splice(index, 1)
        console.log("Ho rimosso l'elemento",index)
    }
}
}).mount('#app')
