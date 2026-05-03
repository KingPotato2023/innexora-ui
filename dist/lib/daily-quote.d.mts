interface Quote {
    text: string;
    author: string;
}
declare function dailyQuote(now?: Date): Quote;

export { type Quote, dailyQuote };
