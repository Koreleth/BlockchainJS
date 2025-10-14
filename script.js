const ctx = document.getElementById('myChart');

let node0 = new MiningNode(0, 'Korel');
let node1 = new MiningNode(1, 'Sami');

let CHART_DATA = {
    amounts: [0, 0, 0, 0, 0, 0], 
    labels: ['', '', '', '', '', '']
};

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: CHART_DATA.labels,
      datasets: [{
        label: '# of Votes',
        data: CHART_DATA.amounts,
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  function startNode0(){
    log('Node 0');
    n0.classList.toggle('pause-btn'); 
    node0.toggle();
  }

    function startNode1(){
    log('Node 1');
    n1.classList.toggle('pause-btn');
    node1.toggle();
  } 

  function log(text){
    let hours =('0' + new Date().getHours()).slice(-2);
    let minutes =('0' + new Date().getMinutes()).slice(-2);
    logs.innerHTML += `<div class="mb-16"> <code>
    <i>${hours}:${minutes}</i> ${text}
    </code> </div>`;
  }

  function updateGraphData(coinTable) {
    coinTable.forEach((entry, index) => {
        CHART_DATA.amounts[index] = entry.amount;
        CHART_DATA.labels[index] = entry.name;
    });
    myChart.update();
  }

  function sendCoin() {
    console.log(`Sending ${amount.value} coin from ${from.value} to ${to.value}`);

    newTransaction.notify({
        from: from.value, 
        to: to.value, 
        amount: +amount.value
    });
   
  }

  function renderCurrentTransactions(transactions) {
    transactionContainer.innerHTML = '<h2>Transaktionen</h2>';
    transactions.forEach(ta => {
        transactionContainer.innerHTML +=
            `<div class="card mb-16">${ta.from} ➔ ${ta.to} $${ta.amount}</div>`;
    });
  }
  
  function getChain() {
    for (let i = 0; i < blockchain.chain.length; i++) {
        console.log(blockchain.getBlock(i));
    }
    console.log('is chain valid', blockchain.isValid());
}

function cheat() {
 blockchain.chain[2].data.coinTable[0].amount = 1000;
}