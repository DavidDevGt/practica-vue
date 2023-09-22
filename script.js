new Vue({
    el: '#app',
    data: {
        message: 'Hola desde la instancia app',
        number: 10,
        list: ['1', '2', '3'],
        active: false
    }
});

new Vue({
    el: '#app2',
    data: {
        message2: 'Hola que tal mundo'
    }
});