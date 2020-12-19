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
                    // borderWidth: 0.1,
                    barDatasetSpacing: 0,
                    barValueSpacing: 0,
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

        let fromDate = moment().subtract(delta, 'days').format().split('T')[0];
        let toDate = moment().format().split('T')[0];
        console.log(fromDate, toDate);

        axios.get('https://api.covid19api.com/world?from=' + fromDate +
        'T00:00:00Z&to=' + toDate + 'T00:00:00Z').then( response => {
            let res = response['data'];

        // axios.get('https://api.covid19api.com/total/country/' + /* selectedCountry */"USA" + '/status/' + status
        //     + '?from=' + fromDate + 'T00:00:00Z&to=' + toDate + 'T00:00:00Z').then( response => {
        //     let res = response['data'];
            // setCasesForStatus(res[res.length - 1]['Cases'] - res[0]['Cases'], status);
            setChartForStatus(res, status);
        });
    };

    let setChartForStatus = (data, status = 'confirmed') => {
        let months = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
        let newConfirmed = 0;

        for (let i = 0; i < data.length; i = i + 1) {
            let d = new Date(data[i]['Date']);
            newConfirmed += data[i]['NewConfirmed'];
            chartConfig.data.labels.push(d.getDate() + " " + months[d.getMonth()]);
            chartConfig.data.datasets[0].data.push(newConfirmed);
        }
        chartConfig.data.labels.push(new Date().getDate() + " " + months[new Date().getMonth()]);
        chartConfig.data.datasets[0].data.push(data[data.length - 1]['TotalConfirmed']);
    };

    getCasesForStatus('confirmed', '280');
    
    const chart = new Chart(ctx, chartConfig);

    const generateRandomTime = () => Math.floor(Math.random() * 200);

    const switchLeft = (config, setName) => {
        
        // const data = Array(10).fill(0).map(() => generateRandomTime());
    
        // const color = "#ffff00";
        // const newUser = {
        //     // label: name,
        //     data: data,
        //     backgroundColor: color,
        //     borderColor: color,
        //     borderWidth: 1,
        //     fill: false,
        // }

        getCasesForStatus('confirmed', '360');
        // config.data.datasets.push(newUser);
        console.dir(chartConfig);

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

    // addUserToChart(chartConfig, 'new');

    document.querySelector('#add').addEventListener('click', () => {
        const name = document.querySelector('#name').value || null;

        switchLeft(chartConfig, name);
    });

    document.querySelector('#remove').addEventListener('click', () => {
        const name = document.querySelector('#name').value || null;
        
        switchRigth(chartConfig, name);
    });

    setTimeout(() => chart.update(), 1000);
}