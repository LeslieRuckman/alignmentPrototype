var category = "data.month";
var s = "#f31616";
var e = "#abe6d4";
var hu = "#fcbfb8";
var h = "#203a8e";
var displayGroceries = false;

// load the chart on page load
window.addEventListener('load', init);
document.getElementById("groceries").onclick=function(){displayGroceries()};

// grab data for the chart from another file.
function init() {
    $.ajax({
        url: 'data/data.json',
        type: 'GET',
        failure: function(err) {
            console.log("Could not get the data");
            return alert("Something went wrong");
        },
        success: function(data) {
            console.log(data.month);
            buildPolarChart(data);
            buildWeekChart(data);
            buildDayChart(data);
        }
    });
}

// function init() {
//     // on page load, build the charts
//     buildPolarChart();
// }
// function displayGroceries(){
//   displayGroceries = true;
//   if(displayGroceries = true){
//     category = "data.groceries";
//   }else {
//     var category = "data.month";
//   }
//   console.log(displayGroceries);
// }

// set default options for ALL charts
// see
function setChartDefaults() {
    // make it responsive
    Chart.defaults.global.responsive = true;
    // set the font color
    Chart.defaults.global.defaultFontColor = '#222';
    // set the font family
    Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
    Chart.defaults.global.elements.line = '#d9d9d9';
}


function buildPolarChart(data) {

  var displayGroceries = false;
  this.displayGroceries = function(){
    displayGroceries = true;
    category = "data.groceries";
    console.log("hello");
  }

  console.log(category);

    var data = {
        labels: [
            "Environment: ",
            "Health",
            "Human Rights:",
            "Sustainability"
        ],
        datasets: [{
            data: [eval(category+".environment"), eval(category+".health"), eval(category+".humanrights"), eval(category+".sustainability")],
            backgroundColor: [
                e,
                h,
                hu,
                s
            ],
            hoverBackgroundColor: [
                e,
                h,
                hu,
                s
            ]
        }]
    };

    // create chart options (this is optional)
    // see list of options:
    // http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
    var options = {
        scale: {
            gridLines: {
                display: true,
            },
            ticks: {
                display: false,
            },
        },
        legend: {
            display: false,
        },
        tooltips: {
            backgroundColor: '#222',
        },
        animation: {
            animateScale: false
        }
    }

    // first, get the context of the canvas where we're drawing the chart
    var ctx = document.getElementById("polarChart").getContext("2d");

    // now, create the doughnut chart, passing in:
    // 1. the type (required)
    // 2. the data (required)
    // 3. chart options (optional)
    var myPolarChart = new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: options
    });
}

// building week Chart Here
function buildWeekChart(data) {

    var data = {
        labels: [
            "Environment: ",
            "Health",
            "Human Rights",
            "Sustainability"
        ],
        datasets: [{
            data: [data.week.environment, data.week.health, data.week.humanrights, data.week.sustainability],
            backgroundColor: [
                e,
                h,
                hu,
                s
            ],
            hoverBackgroundColor: [
                e,
                h,
                hu,
                s
            ]
        }]
    };

    // create chart options (this is optional)
    // see list of options:
    // http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
    var options = {
        scale: {
            gridLines: {
                display: true,
            },
            ticks: {
                display: false,
            },
        },
        legend: {
            display: false,
        },
        tooltips: {
            backgroundColor: '#222',
        },
        animation: {
            animateScale: false
        }
    }

    // first, get the context of the canvas where we're drawing the chart
    var ctx = document.getElementById("weekChart").getContext("2d");

    // now, create the doughnut chart, passing in:
    // 1. the type (required)
    // 2. the data (required)
    // 3. chart options (optional)
    var myPolarChart = new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: options
    });
}

// Building Daily Chart Here
function buildDayChart(data) {

    var data = {
        labels: [
            "Environment: ",
            "Health",
            "Human Rights:",
            "Sustainability"
        ],
        datasets: [{
            data: [data.day.environment, data.day.health, data.day.humanrights, data.day.sustainability],
            backgroundColor: [
                e,
                h,
                hu,
                s
            ],
            hoverBackgroundColor: [
                e,
                h,
                hu,
                s
            ]
        }]
    };

    // create chart options (this is optional)
    // see list of options:
    // http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
    var options = {
        scale: {
            gridLines: {
                display: true,
            },
            ticks: {
                display: false,
            },
        },
        legend: {
            display: false,
        },
        tooltips: {
            backgroundColor: '#222',
        },
        animation: {
            animateScale: false
        }
    }

    // first, get the context of the canvas where we're drawing the chart
    var ctx = document.getElementById("dayChart").getContext("2d");

    // now, create the doughnut chart, passing in:
    // 1. the type (required)
    // 2. the data (required)
    // 3. chart options (optional)
    var myPolarChart = new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: options
    });
}
