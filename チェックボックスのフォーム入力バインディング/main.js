var app = new Vue({
    el: "#app",
    data: {
        answer: []
    },
    computed: {
        selection: function() {
            console.log(this.answer)
            return this.answer.join()
        }
    }
});
