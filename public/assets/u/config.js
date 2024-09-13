const config = {
  prefix: "/p/",
  encodeUrl: (str) => {
    if (!str) return str;
    const result = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
      result[i] = i % 2 ? String.fromCharCode(str.charCodeAt(i) ^ 2) : str[i];
    }
    return encodeURIComponent(result.join(''));
  },
  
  decodeUrl: (str) => {
    if (!str) return str;
    const [input, ...search] = str.split("?");
    const decoded = decodeURIComponent(input);
    const result = new Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
      result[i] = i % 2 ? String.fromCharCode(decoded.charCodeAt(i) ^ 2) : decoded[i];
    }
    return result.join('') + (search.length ? "?" + search.join("?") : "");
  },  
  handler: "./assets/u/handler.js",
  client: "./assets/u/client.js",
  bundle: "./assets/u/bundle.js",
  config: "./assets/u/config.js",
  sw: "./assets/u/sw.js",
  inject: [
    {
      host: "discord.com",
      html: `
    <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>
      <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css">
      `,
      injectAt: "head",
    },
  ],
};
self.__uv$config = config;
