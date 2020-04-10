type TaxCalFunc = (incomeYearly: number) => number;

const taxCal:TaxCalFunc = (income) => {
  // 各阶段的税率,如0.03所对应的36,000代表低于36000部分应用税率3%
  const taxLevel = [0.03, 0.10, 0.20, 0.25, 0.30, 0.35, 0.45];
  const taxRanage = [36_000, 144_000, 300_000, 420_000, 660_000, 960_000];

  let curLevel = 0;
  // 递归进行缴税计算
  const helper = (restIncome: number) => {
    const curTaxLevel = taxLevel[curLevel];
    // 这是超过了最大限度地情况, 也就是目前是超过960_000的情况
    if(curLevel===taxRanage.length) {
      return restIncome * curLevel;
    }

    if(restIncome > taxRanage[curLevel]) {
      const levelTax = taxRanage[curLevel] * curTaxLevel;
      curLevel++;
      return levelTax + helper(restIncome - levelTax);
    } else {
      return restIncome * curTaxLevel;
    }
  }

  return helper(income);
}

const testAmount = 242_232;
const testResult = taxCal(testAmount);
console.log(`缴税计算金额${testAmount}所得结果为:${testResult}`)

export { taxCal }