const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  id: 0,
  transactions: [],

  createTransaction(amount, type) {
    this.id++;
    return { id: this.id, amount: amount, type: type };
  },

  deposit(amount) {
    amount > 0
      ? (this.transactions.push(
          this.createTransaction(amount, Transaction.DEPOSIT),
        ),
        (this.balance += amount))
      : console.log(`депозит для суммы (${amount}) не возможен`);
  },

  withdraw(amount) {
    amount < this.balance && amount > 0
      ? (this.transactions.push(
          this.createTransaction(amount, Transaction.WITHDRAW),
        ),
        (this.balance -= amount))
      : console.log(
          `снятие такой суммы (${amount}) не возможно, недостаточно средств`,
        );
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
    return 'транзакции с таким id не существует';
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
account.withdraw(5);
account.deposit(500);
account.deposit(0);
account.deposit(100);
console.log('Баланс:', account.getBalance());
account.withdraw(5000);
account.withdraw(100);
account.withdraw(-100);
console.log('Баланс:', account.getBalance());
console.log('Данные транзакции по id: ', account.getTransactionDetails(3));
console.log('Данные транзакции по id: ', account.getTransactionDetails(1));
console.log('Данные транзакции по id: ', account.getTransactionDetails(25));
console.log(
  'Тип транзакции - DEPOSIT, cумма транзакций по типу:',
  account.getTransactionTotal(Transaction.DEPOSIT),
);
console.log(
  'Тип транзакции - WITHDRAW, cумма транзакций по типу:',
  account.getTransactionTotal(Transaction.WITHDRAW),
);
