export const formatNumberShort = (value: number): string => {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (value >= 1_000) {
        return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return value.toString();
};

export const formatUSD = (value: number, locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(value);
};