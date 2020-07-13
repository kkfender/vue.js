var app = new Vue({
    el: "#app",
    data: {
        year: (new Date()).getFullYear()
    },
    methods: {
        yearInputHandler: function($event){
            this.year = $event.target.value;
        }
    }
});
