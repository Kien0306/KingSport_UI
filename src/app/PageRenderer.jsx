import { useEffect, useMemo, useRef } from "react";

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.reactPageScript = "true";
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
}

function runInlineScript(code, index) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.dataset.reactInlineScript = String(index);
  script.text = code;
  document.body.appendChild(script);
  return script;
}

export default function PageRenderer({ page }) {
  const contentRef = useRef(null);

  const externalScripts = useMemo(() => page?.scripts || [], [page]);
  const inlineScripts = useMemo(() => page?.inlineScripts || [], [page]);

  useEffect(() => {
    if (!page) return undefined;

    document.title = page.title || "KINGSPORT";

    const container = contentRef.current;
    if (container) {
      container.innerHTML = page.body || "";
    }

    let cancelled = false;
    const createdInline = [];

    async function bootPage() {
      try {
        for (const src of externalScripts) {
          if (cancelled) return;
          await loadExternalScript(src);
        }
        for (let i = 0; i < inlineScripts.length; i += 1) {
          if (cancelled) return;
          createdInline.push(runInlineScript(inlineScripts[i], i));
        }
      } catch (error) {
        console.error(error);
      }
    }

    bootPage();

    return () => {
      cancelled = true;
      document
        .querySelectorAll('script[data-react-page-script="true"]')
        .forEach((node) => node.remove());
      createdInline.forEach((node) => node.remove());
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [page, externalScripts, inlineScripts]);

  return <div ref={contentRef} />;
}
