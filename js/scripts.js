// business interface
function BankAccount (initial, name) {
  this.balance = initial;
  this.name = name;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdrawal = function(amount) {
  this.balance -= amount;
}



//ui interface
var newAccount;

$(document).ready(function(){
  $("#accountbtn").click(function(event){
    event.preventDefault();

    var Currentbalance = parseInt($("#ideposit").val());
    var inputtedName = $("#name").val();
    $("#balance").text(Currentbalance);
    newAccount = new BankAccount(Currentbalance, inputtedName);
    $("#name").val("");
    $("#ideposit").val("");
    $("#deposit").val("");
    $("#withdrawal").val("");
    alert("Hello " + inputtedName + "! Welcome to Bank of Despair. We are here to accommadate your pain and suffering.")
  });

  $("#depositbtn").click(function(event){
    event.preventDefault();
    var inputtedDeposit = parseInt($("#deposit").val());
    newAccount.deposit(inputtedDeposit)
    $("#balance").text(newAccount.balance);
    $("#name").val("");
    $("#ideposit").val("");
    $("#deposit").val("");
    $("#withdrawal").val("");
  });

  $("#withdrawalbtn").click(function(event){
    event.preventDefault();
    var inputtedWithdrawal = parseInt($("#withdrawal").val());
    newAccount.withdrawal(inputtedWithdrawal)
    $("#balance").text(newAccount.balance);
    $("#name").val("");
    $("#ideposit").val("");
    $("#deposit").val("");
    $("#withdrawal").val("");
  });



});
