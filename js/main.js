const { createApp } = Vue

createApp({
    data() {
        return {
            error: false,
            addtask: '',
            tasks: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Fare le pulizie',
                    done: false,
                },
                {
                    text: 'Fare palestra',
                    done: true,
                },
                {
                    text: 'Portare a spasso il cane',
                    done: false,
                },
            ]
        }
    },
    methods: {
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        addNewTask(){
            if(this.addtask.length >= 5){
                this.tasks.push({ text: this.addtask, done: false, });
                this.addtask = '';
                this.error = false;
            } else {
                this.error = true;
                console.log(this.error);
            }
            
        },
        checkAddtaskLength(){
            if (this.addtask.length >= 5) {
                this.error = false;
            } else {
                this.error = true;
                console.log(this.error);
            }
        },
        taskDone(index){
            this.tasks[index].done = !this.tasks[index].done;
        }
        
        
    }
}).mount('#app')