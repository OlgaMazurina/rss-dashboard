export function createChart() {
    const ctx = document.querySelector('#chart').getContext('2d');

    const chartConfig = {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: "#ffff00",
                    borderColor: "#ffff00",
                    barDatasetSpacing: 0,
                    barValueSpacing: 0,
                    // borderWidth: 0.1,
                    // categoryPercentage: 0,
                    // barPercentage: 0,
                    // barThickness: 'flex',
                    fill: false
                }
            ],
        },
        options: {
            legend: {
                display: false
              },
            scales: {
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
    console.dir(chartConfig);

    const getCasesForStatus = (status = 'confirmed', delta = 280) => {
            axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then( response => {
                let res = response['data'];
            setChartForStatus(res, status);
        });
    };

    let setChartForStatus = (data, status = 'confirmed') => {
        for (let key in data.cases) {
            chartConfig.data.labels.push(key);
            chartConfig.data.datasets[0].data.push(data.cases[key]);
        }

        // for (let i = 0; i < data.length; i = i + 1) {
        //     let d = new Date(data[i]['Date']);
        //     newConfirmed += data[i]['cases'];
        //     chartConfig.data.labels.push(d.getDate() + " " + months[d.getMonth()]);
        //     chartConfig.data.datasets[0].data.push(newConfirmed);
        // }
        // chartConfig.data.labels.push(new Date().getDate() + " " + months[new Date().getMonth()]);
        // chartConfig.data.datasets[0].data.push(data[data.length - 1]['cases']);
    };

    getCasesForStatus('confirmed', '280');
    
    const chart = new Chart(ctx, chartConfig);

    const generateRandomTime = () => Math.floor(Math.random() * 200);

    const switchLeft = (config, setName) => {
        
        getCasesForStatus('confirmed', '360');
        // config.data.datasets.push(newUser);
        chart.update();
    }

    const switchRigth = ({ data: { datasets } }, name) => {
        if (name) {
            const names = datasets.map(user => user.label);
            const index = names.indexOf(name);
            
            if (index === -1) {
                return;
            }

            datasets.splice(index, 1);
        } else {
            datasets.pop();
        }

        chart.update();
    }

    document.querySelector('#switchLeft').addEventListener('click', () => {
        const name = document.querySelector('#name').value || null;

        switchLeft(chartConfig, name);
    });

    document.querySelector('#switchRigth').addEventListener('click', () => {
        const name = document.querySelector('#name').value || null;
        
        switchRigth(chartConfig, name);
    });

    setTimeout(() => chart.update(), 1000);
}