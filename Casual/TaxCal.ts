type TaxCalFunc = (incomeYearly: number, isMonthly?: boolean) => number;

const taxCal:TaxCalFunc = (income, isMonthly = true) => {
  if(isMonthly) {
    income *= 12;
  }

  // 个税起征点
  const baseline = 60_000;

  if(income < baseline) return 0;

  // 各阶段的税率,如0.03所对应的36,000代表低于36000部分应用税率3%
  const taxLevel = [0.03, 0.10, 0.20, 0.25, 0.30, 0.35, 0.45];
  const taxRanage = [0, 36_000, 144_000, 300_000, 420_000, 660_000, 960_000];

  let curLevel = 0;
  // 递归进行缴税计算
  const helper = (restIncome: number) => {
    const curTaxLevel = taxLevel[curLevel];
    // 这是超过了最大限度地情况, 也就是目前是超过960_000的情况
    if(curLevel===taxLevel.length-1) {
      return restIncome * curLevel;
    }

    // 当前所处返回最小值, 最大值, 以及范围值
    const curRangeMin = taxRanage[curLevel];
    const curRangeMax = taxRanage[curLevel+1];
    const curRangeAmount = curRangeMax - curRangeMin;

    if(restIncome > curRangeMax) {
      const levelTax = curRangeAmount * curTaxLevel;
      curLevel++;
      return levelTax + helper(restIncome - curRangeAmount);
    } else {
      return restIncome * curTaxLevel;
    }
  }

  return helper(income-baseline);
}

const testAmount = 90_000;
const testResult = taxCal(testAmount, true);
console.log(`缴税计算金额所得结果为:${testResult}`)

export { taxCal }