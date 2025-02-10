import { useState } from "react";

const newsArticles = [
  {
    id: 1,
    title: "Stock Market Hits Record Highs",
    summary: "The stock market reached an all-time high today...",
    content: "The stock market soared to record levels as investor confidence grew following positive economic data. Analysts predict continued growth as industries recover from recent downturns. Experts suggest that long-term investors could benefit from staying invested in diversified portfolios. The rise was primarily led by technology and healthcare stocks, which outperformed the market average. While short-term traders are advised to remain cautious, long-term investors see this as a sign of economic resilience and stability.",
    image: "https://source.unsplash.com/600x400/?stock,market"
  },
  {
    id: 2,
    title: "Crypto Market Sees Major Fluctuations",
    summary: "Bitcoin and other cryptocurrencies experienced sharp movements...",
    content: "Bitcoin prices saw significant volatility today, with prices swinging over 10% in a matter of hours. Experts attribute this to regulatory discussions and institutional investment trends. Traders are advised to remain cautious and manage risks effectively. Despite the fluctuations, long-term crypto investors remain optimistic about blockchain adoption. With increasing interest from institutional investors and governments exploring central bank digital currencies, the future of crypto markets remains a topic of global discussion.",
    image: "https://source.unsplash.com/600x400/?cryptocurrency,bitcoin"
  },
  {
    id: 3,
    title: "Federal Reserve Announces New Policies",
    summary: "The Federal Reserve introduced new monetary policies...",
    content: "The Federal Reserve has announced adjustments to interest rates, aiming to curb inflation while sustaining economic growth. This decision impacts borrowing costs, mortgage rates, and overall market sentiment. Analysts suggest this could affect various sectors differently. While businesses may face higher borrowing costs, savers and fixed-income investors could benefit. The central bank has also introduced measures to enhance liquidity in financial markets, ensuring stability in case of economic shocks.",
    image: "https://source.unsplash.com/600x400/?federal,reserve"
  },
  {
    id: 4,
    title: "Real Estate Market Shows Signs of Recovery",
    summary: "Housing prices are stabilizing after months of decline...",
    content: "The real estate market is showing signs of recovery as mortgage rates stabilize. Buyers and investors are cautiously optimistic, with demand picking up in suburban and urban areas. Market experts believe affordability remains a concern but expect gradual improvements. Government incentives for first-time homebuyers and low mortgage rates have contributed to the renewed interest in the housing market. Experts advise prospective buyers to research local trends and assess long-term investment potential before making purchases.",
    image: "https://source.unsplash.com/600x400/?realestate,housing"
  },
  {
    id: 5,
    title: "Gold Prices Surge Amid Economic Uncertainty",
    summary: "Gold prices spiked as investors seek safe-haven assets...",
    content: "Amidst economic uncertainties, gold prices have surged as investors turn to safe-haven assets. The demand for gold-backed investment products has risen, with many seeing it as a hedge against inflation and currency fluctuations. Analysts note that central banks increasing their gold reserves is also contributing to the price surge. Investors are advised to monitor geopolitical tensions and inflation trends, as these factors will continue influencing gold prices in the near future.",
    image: "https://source.unsplash.com/600x400/?gold,investment"
  },
  {
    id: 6,
    title: "Tech Stocks See Massive Gains",
    summary: "Technology stocks are leading the market rally...",
    content: "Tech stocks surged today as major companies reported better-than-expected earnings. Investors remain optimistic about the sector’s growth potential, with analysts predicting further innovation-driven gains. The rise was fueled by strong performances in artificial intelligence, cloud computing, and semiconductor industries. As demand for digital services grows, analysts suggest that the sector remains a key driver of long-term market performance.",
    image: "https://source.unsplash.com/600x400/?technology,stocks"
  },
  {
    id: 7,
    title: "Unemployment Rate Declines as Job Market Improves",
    summary: "The latest report shows a significant drop in unemployment...",
    content: "The job market is seeing positive trends as companies continue to hire. A decline in unemployment rates signals economic stability, with many industries bouncing back from previous downturns. The biggest gains were seen in the technology, healthcare, and manufacturing sectors. Government stimulus packages and infrastructure investments have played a crucial role in boosting employment rates. Experts predict that as automation and AI-driven jobs increase, the job market will continue to evolve.",
    image: "https://source.unsplash.com/600x400/?employment,jobs"
  },
  {
    id: 8,
    title: "Retail Sales Increase Amid Festive Season",
    summary: "Consumers are spending more as the holiday season approaches...",
    content: "Retailers report strong sales numbers as consumer confidence remains high. Discounts and promotional offers have driven higher foot traffic, benefiting both physical and online stores. The fashion, electronics, and luxury goods sectors have seen the most significant increases. Analysts believe that the trend will continue into the next quarter, especially with upcoming holiday events and shopping festivals.",
    image: "https://source.unsplash.com/600x400/?retail,shopping"
  }
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="p-6 min-h-screen bg-gray-100 text-black">
      <h2 className="text-3xl font-semibold mb-6">Financial News</h2>
      {selectedNews ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-60 object-cover rounded mb-4" />
          <h3 className="text-2xl font-bold mb-2">{selectedNews.title}</h3>
          <p className="text-gray-600 mb-4">{selectedNews.content}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setSelectedNews(null)}>
            Back to News List
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((news) => (
            <div
              key={news.id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedNews(news)}
            >
              <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="text-xl font-bold">{news.title}</h3>
              <p className="text-gray-600">{news.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
