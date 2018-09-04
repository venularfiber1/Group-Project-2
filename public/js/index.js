var emailForm = $(".member-name")

var expenseSource = $("input#expense-source");
var expenseCategory = $("input#expense-category");
var expenseAmount = $("input#expense-amount");
var expenseSubmitBtn = $("#submit-expense")

var incomeSource = $("input#income-source");
var incomeCategory = $("input#income-category");
var incomeAmount = $("input#income-amount");
var incomeSubmitBtn = $("#submit-income")

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
    .then(function() {
    });
}

function deleteIncome(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/incomes/" + id
  })
    .then(function() {
    });
}

expenseSubmitBtn.on("click", handleExpenseSubmit);
incomeSubmitBtn.on("click", handleIncomeSubmit);
deleteExpenseBtn.on("click", handleExpenseDelete);
deleteIncomeBtn.on("click", handleIncomeDelete);
