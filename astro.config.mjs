import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import starlightLinksValidator from "starlight-links-validator";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aoitr.js.org",
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: "aoi.js",
      favicon: "/favicon.png",
      logo: {
        src: "/favicon.png",
      },
      social: {
        github: "https://github.com/aoijs/website",
        discord: "https://discord.com/invite/HMUfMXDQsV",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Search: "./src/components/Search.astro",
        Head: "./src/components/Head.astro", // doesnt do anything, as starlight doesnt support this (yet)
        PageSidebar: './src/components/PageSidebar.astro',
      },
      pagefind: false,
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-GMH27HJZGY",
          },
        },
        {
          tag: "script",
          content: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GMH27HJZGY');
      `,
        },
        {
          tag: "script",
          attrs: {
            src: "/custom.js",
            defer: true,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "aoi.js | Akarui Development",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content:
              "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "theme-color",
            content: "#89CFF0",
          },
        },
      ],
      sidebar: [
        {
          label: "Giriş",
          link: "/guides/setup",
        },
        {
          label: "Eklentiler",
          items: [
            {
              label: "Vitrin",
              link: "/extensions/showcase/",
            },
            {
              label: "@akarui",
              items: [
                {
                  label: "aoi.panel",
                  autogenerate: {
                    directory: "extensions/aoi.panel",
                  },
                  collapsed: true,
                },
                {
                  label: "aoi.music",
                  items: [
                    {
                      label: "Getting Started",
                      link: "/extensions/aoimusic/",
                    },
                    {
                      label: "Etkinlikler",
                      link: "/extensions/aoimusic/events",
                    },
                    {
                      label: "Fonksiyonlar",
                      autogenerate: {
                        directory: "extensions/aoi.music/functions",
                      },
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
              ],
            },
            {
              label: "Topluluk Eklentileri",
              items: [
                {
                  label: "aoi.canvas",
                  link: "extensions/aoicanvas",
                },
                {
                  label: "aoi.loader",
                  link: "extensions/aoiloader",
                },
                {
                  label: "aoi.js-library",
                  link: "extensions/aoijs-library",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          label: "Rehberler",
          items: [
            {
              label: "Uygulama Komutları",
              autogenerate: {
                directory: "guides/application-cmds",
              },
              collapsed: true,
            },
            {
              label: "Bot",
              autogenerate: {
                directory: "guides/client",
              },
              collapsed: true,
            },
            {
              label: "Diğer",
              autogenerate: {
                directory: "guides/other",
              },
              collapsed: true,
            },
          ],
        },
        {
          label: "Fonksiyonlar",
          items: [
            {
              label: "Array",
              autogenerate: {
                directory: "functions/array-related",
              },
              collapsed: true,
            },
            {
              label: "Bekleme",
              autogenerate: {
                directory: "functions/awaited-related",
              },
              collapsed: true,
            },
            {
              label: "Bot",
              autogenerate: {
                directory: "functions/client-related",
              },
              collapsed: true,
            },
            {
              label: "Etkinlik",
              autogenerate: {
                directory: "functions/event-related",
              },
              collapsed: true,
            },
            {
              label: "Sunucu",
              autogenerate: {
                directory: "functions/guild-related",
              },
              collapsed: true,
            },
            {
              label: "Bilgi",
              autogenerate: {
                directory: "functions/info-related",
              },
              collapsed: true,
            },
            {
              label: "Etkileşim",
              autogenerate: {
                directory: "functions/interaction-related",
              },
              collapsed: true,
            },
            {
              label: "Matematik",
              autogenerate: {
                directory: "functions/math-related",
              },
              collapsed: true,
            },
            {
              label: "Mesaj",
              autogenerate: {
                directory: "functions/message-related",
              },
              collapsed: true,
            },
            {
              label: "Çeşitli",
              autogenerate: {
                directory: "functions/misc-related",
              },
              collapsed: true,
            },
            {
              label: "Kullanıcı",
              autogenerate: {
                directory: "functions/user-related",
              },
              collapsed: true,
            },
            {
              label: "Yardımcı",
              autogenerate: {
                directory: "functions/util-related",
              },
              collapsed: true,
            },
            {
              label: "Veritabanı/Degişkenler",
              autogenerate: {
                directory: "functions/database-related",
              },
              collapsed: true,
            },
          ],
          collapsed: true,
        },
      ],
    }),
    react(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-link",
          },
        },
      ],
    ],
  },
  redirects: {
    // for easier navigation
    guides: "/",
  },
});
