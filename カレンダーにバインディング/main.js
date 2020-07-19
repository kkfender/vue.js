var app = new Vue({
    el: "#app",
    data: {
        arrival_date: null,
        min_date: null
    },
    created: function() {
        var dt = new Date();
        dt.setDate(dt.getDate()+1);
        this.arrival_date = this.formatDate(dt);
        this.min_date = this.arrival_date;
    },
    methods: {
        formatDate: function(dt) {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMonth()+1)).slice(-2);
            var d = ('00' + dt.getDate()).slice(-2);
            var result = y + '-' + m + '-' + d;
            return result;
        }
    }
});
