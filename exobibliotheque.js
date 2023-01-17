const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['zoro', 'luffy', 'sanji', 'nami', 'usopp', 'chopper', 'robin', 'franky', 'brook', 'jinbe'],
        datasets: [{
            label: 'Examen du 12/11/22',
            data: [10, 14, 11, 15, 14, 18, 12, 11, 12, 19],
        }, {
            label: 'Examen du 01/12/22',
            data: [13, 10, 12, 14, 7, 9, 12, 5, 8, 16,],
        }, {
            label: 'Examen du 13/01/23',
            data: [18, 15, 18, 16, 10, 15, 10, 20, 11, 15,],
        }, {
            label: 'Examen du 21/02/23',
            data: [15, 13, 17, 19, 11, 17, 13, 16, 11, 11,],
        }, {
            label: 'Examen du 28/03/23',
            data: [11, 14, 10, 17, 14, 16, 15, 20, 13, 12,],
        }]
    }
});