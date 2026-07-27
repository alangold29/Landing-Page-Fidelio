import { useEffect } from "react";
import { getLocale, localizedPath, translateText } from "../i18n";

const attributes = ["alt", "aria-label", "title", "placeholder"] as const;

function translateElement(element: Element) {
  if (element.closest("script, style, code")) return;

  if (element instanceof HTMLAnchorElement) {
    const href = element.getAttribute("href");
    if (href && !element.dataset.localeSwitch) {
      const localized = localizedPath(href);
      if (localized !== href) element.setAttribute("href", localized);
    }
  }

  attributes.forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (value) element.setAttribute(attribute, translateText(value));
  });
}

function translateTree(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Text | null;
  while ((node = walker.nextNode() as Text | null)) {
    if (node.parentElement?.closest("script, style, code")) continue;
    const translated = translateText(node.data);
    if (translated !== node.data) node.data = translated;
  }

  if (root instanceof Element) translateElement(root);
  if (root instanceof Element || root instanceof DocumentFragment) {
    root.querySelectorAll?.("*").forEach(translateElement);
  }
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (getLocale() !== "pt") {
      document.documentElement.lang = "es";
      return;
    }

    document.documentElement.lang = "pt-BR";
    translateTree(document.body);
    document.title = translateText(document.title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        translateText(document.querySelector('meta[name="description"]')?.getAttribute("content") ?? ""),
      );
    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(translateTree);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
