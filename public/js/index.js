var emailForm = $(".member-name")

var expenseSource = $("input#expense-source");
var expenseCategory = $("input#expense-category");
var expenseAmount = $("input#expense-amount");
var expenseSubmitBtn = $("#submit-expense");

var incomeSource = $("input#income-source");
var incomeCategory = $("input#income-category");
var incomeAmount = $("input#income-amount");
var incomeSubmitBtn = $("#submit-income");

var deleteExpenseBtn = $(".deleteExpense");
var deleteIncomeBtn = $(".deleteIncome");

var handleExpenseSubmit = function (event) {
  event.preventDefault();

  if (!(expenseSource && expenseCategory && expenseAmount)) {
    alert("You must enter an example text and description!");
    return;
  }

  var expense = {
    source: expenseSource.val().trim(),
    category: expenseCategory.val().trim(),
    amount: expenseAmount.val().trim(),
    email: emailForm.text()
  };

  submitExpense(expense)

  expenseSource.val("");
  expenseCategory.val("");
  expenseAmount.val("");
};

var handleIncomeSubmit = function (event) {
  event.preventDefault();

  if (!(incomeSource && incomeCategory && incomeAmount)) {
    alert("You must enter an example text and description!");
    return;
  }

  var income = {
    source: incomeSource.val().trim(),
    category: incomeCategory.val().trim(),
    amount: incomeAmount.val().trim(),
    email: emailForm.text()
  };

  submitIncome(income)

  incomeSource.val("");
  incomeCategory.val("");
  incomeAmount.val("");
};

function submitExpense(Expense) {
  $.post("/api/expenses/", Expense, function () {
    window.location.href = "/budget";
  })
}

function submitIncome(Income) {
  $.post("/api/incomes/", Income, function () {
    window.location.href = "/budget";
  })
}

function handleExpenseDelete() {
  var currentExpense = $(this).attr("data-expenseid")
  deleteExpense(currentExpense);
  window.location.href = "/budget";
}

function handleIncomeDelete() {
  var currentIncome = $(this).attr("data-incomeid")
  deleteIncome(currentIncome);
  window.location.href = "/budget";
}

function deleteExpense(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/expenses/" + id
  })
    .then(function () {
    });
}

function deleteIncome(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/incomes/" + id
  })
    .then(function () {
    });
}

expenseSubmitBtn.on("click", handleExpenseSubmit);
incomeSubmitBtn.on("click", handleIncomeSubmit);
deleteExpenseBtn.on("click", handleExpenseDelete);
deleteIncomeBtn.on("click", handleIncomeDelete);


// CHART FOR THE NET DIFFERENCE
var ctxOne = $("#myChartNet");
netDataSet = [];

var getNetData = function () {
  $.get("/api/user_data").then(function (data) {
    email = data.email;
    $.get("/api/expenses/total/" + email).then(function (datatwo) {
      netDataSet.push(datatwo[0].tot_amt);
      // console.log(datatwo[0].tot_amt);
      console.log(netDataSet)
      $.get("/api/incomes/total/" + email).then(function (datathree) {
        netDataSet.push(datathree[0].tot_amt);
        console.log(netDataSet)
        new Chart(ctxOne, {
          type: "horizontalBar",
          data: {
            labels: ["Expense", "Income"],
            datasets: [{
              data: [netDataSet[0], netDataSet[2]],
              backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255,99,132,1)"],
            }]
          },
          options: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Expenses vs. Income'
            },
            scales: {
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
        $("#netDollars").text(netDataSet[2] - netDataSet[0])
      });
    });
  });
}

getNetData();

var incomeLabels = [];
var incomeDatasets = []

var expenseLabels = [];
var expenseDatasets = []

// CHART FOR INCOME
var ctxTwo = $("#myChartIncome");
var myIncomeChart = new Chart(ctxTwo, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// CHART FOR EXPENSES
var ctxThree = $("#myChartExpense");
var myExpenseChart = new Chart(ctxThree, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
