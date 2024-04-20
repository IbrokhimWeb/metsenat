export const formatNumber = (num: number = 0): string =>
  new Intl.NumberFormat("en-US", { style: "decimal" })
    .format(num)
    ?.split(",")
    ?.join(" ");

export const counterWithFormattedNumbers = (id: string, end: number) => {
  let start = end > 100 ? end - 100 : 0;
  const obj = document.getElementById(id) as HTMLLIElement;
  const increment = end > start ? 1 : 0;
  const step = Math.abs(Math.floor(100 / (end - start)));

  const timer = setInterval(() => {
    start += increment;
    obj.textContent = formatNumber(start);
    if (
      (increment === 1 && start >= end) ||
      (increment === 0 && start <= end)
    ) {
      clearInterval(timer);
    }
  }, step);
};
