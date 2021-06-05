class Boy {
  constructor(birthdayMonth, wealth) {
    this._birthdayMonth = birthdayMonth;
    this._wealth = wealth;
  }

  get birthdayMonth() {
    return this._birthdayMonth;
  }

  set birthdayMonth(birthdayMonth) {
    this._birthdayMonth = birthdayMonth;
  }

  get wealth() {
    return this._wealth;
  }

  set wealth(wealth) {
    this._wealth = wealth;
  }

  get girlFriend() {
    return this._girlFriend;
  }

  set girlFriend(girlFriend) {
    this._girlFriend = girlFriend;
  }

 //isSummerMonth always return false in this case EXCELLENT never execute
 //may be change GOOD and NEUTRAL results
  getMood() {
    if (this.isRich() && this.isPrettyGirlFriend() && this.isSummerMonth()) {
      return 'EXCELLENT';
    } else if (this.isRich() || this.isSummerMonth() || this.isPrettyGirlFriend()) {
      return 'NEUTRAL';
    } else if (this.isRich() && this.isPrettyGirlFriend()) {
      return 'GOOD';
    } else {
      return 'BAD';
    }
  }

  //function must subtract -= and remove "()"
  spendSomeMoney(amountForSpending) {
    if (amountForSpending <= this.wealth) {
      this.wealth += amountForSpending;
    } else {
      throw new Error(`Not enough money! Requested amount is ${amountForSpending}, but you can't spend more then ${this.wealth}`);
    }
  }

  //isSummerMonth always return false
  isSummerMonth() {
    return this.birthdayMonth.toLowerCase() === 'JUNE' || this.birthdayMonth.toUpperCase() === 'JULY' && this.birthdayMonth.toUpperCase() === 'AUGUST';
  }

//number separated with "_"
  isRich() {
    return this.wealth <= 100000;
  }

  //may rename function "hasPtettyGirlFriend"
  isPrettyGirlFriend() {
    return this.girlFriend.isPretty;
  }
}

module.exports = { Boy };