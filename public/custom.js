(async () => {
  const loadFavicon = () => {
    return new Promise((resolve, reject) => {
      const favicon = document.querySelector("link[rel~='icon']");
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        document.head.appendChild(link);
      }

      const onLoad = () => {
        resolve();
      };

      switch (window.location.pathname) {
        case "/extensions/aoimusic/":
          favicon.href =
            "https://raw.githubusercontent.com/aoijs/website/main/src/images/musicicon.webp";
          break;
        case "/extensions/aoipanel/":
          favicon.href =
            "https://raw.githubusercontent.com/aoijs/website/main/src/images/panelicon.webp";
          break;
        default:
          favicon.href =
            "https://raw.githubusercontent.com/aoijs/website/main/src/images/favicon.png";
          break;
      }

      favicon.addEventListener("load", onLoad);
      favicon.addEventListener("error", reject);
    });
  };

  await loadFavicon();

  const key = "toc-position";
  let position = { scrollTop: 0, details: [] };

  const sidebar = document.querySelector(
    "#starlight__sidebar > .sidebar-content"
  );

  if (sidebar) {
    const details = Array.from(sidebar.querySelectorAll("details"));
    position.details = details.map((detail) => detail.hasAttribute("open"));

    const data = sessionStorage.getItem(key);
    if (data) {
      try {
        const obj = JSON.parse(data);
        position = {
          ...position,
          ...obj,
        };

        const pathname = document.location.pathname;
        const query = `[href="${pathname}/"]`;

        let target = undefined;

        for (const [index, entry] of obj.details.entries() || []) {
          const q = details[index].querySelector(query);
          if (q) {
            target = q;
          }

          if (entry || !!q) {
            details[index].setAttribute("open", "true");
            if (q) {
              q.setAttribute("aria-current", "page");
              q.scrollIntoView();
            }
          } else {
            details[index].removeAttribute("open");
          }
        }

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          sidebar.scrollTop = position.scrollTop || 0;
        }
      } catch (err) {
        return;
      }
    }

    const Store = () => {
      position.scrollTop = sidebar.scrollTop;
      position.details = details.map((detail) => detail.hasAttribute("open"));
      sessionStorage.setItem(key, JSON.stringify(position));
    };

    const uic = () => {
      Store();
    };

    document.addEventListener("mousemove", uic);
    document.addEventListener("click", uic);
  }
})();
