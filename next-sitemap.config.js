/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: "https://auilk.github.io/clampli/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 7000,
  outDir: "public",
};

export default sitemapConfig;
