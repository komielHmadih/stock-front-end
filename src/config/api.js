export const CoinList = (page) =>
  `http://185.239.106.156:8000/codal/data/an/?page=${page}`;

export const CoinListElse = (page) =>
`http://185.239.106.156:8000/codal/data/else/?page=${page}`;

export const SingleCoin = (id) =>
  `http://185.239.106.156:8000/codal/search/?symbol=خودرو${id}`;


export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
