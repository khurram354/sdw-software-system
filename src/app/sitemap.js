export default function sitemap() {
  const baseUrl = "https://sdw-ds.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}
