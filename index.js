let xValues = [50,60,70,80,90,100,110,120,130,140];
let yValues = [];

// Guardamos la instancia del gráfico en una variable global
let chart = new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.8)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
            scales: {
            yAxes: [{ ticks: { beginAtZero: false } }]
        }
    }
});

// Función para actualizar el gráfico con la ecuación ingresada
function updateChart() {
    let equation = document.getElementById("equation").value;
    try {
        // Evaluamos la ecuación y generamos los valores de Y
        yValues = xValues.map(x => eval(equation));

        // Actualizamos el gráfico
        chart.data.datasets[0].data = yValues;
        chart.update();
    } catch (error) {
        alert("Error en la ecuación. Verifique la sintaxis.");
    }
}