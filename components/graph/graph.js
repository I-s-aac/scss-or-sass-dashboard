const monthLabels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const graph = new Chart("graph", {
    type: "line",
    data: {
        labels: monthLabels, 
        datasets: [{
            data: [2,3,5,6,7,8,9,14,30,35,40,42], 
            borderColor: "black",
            fill: false
        }, {
            data: [3,7,9,11,15,17,19,22,25,28,30 ], 
            borderColor: "#004d4d",
            fill: false
        }]
    },
    options: {
        responsive: false,
        legend: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }

    }
});
