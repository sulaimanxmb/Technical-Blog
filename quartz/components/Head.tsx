import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../../.quartz/plugins"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    const coreStylesheet = css[0]?.content
    const coreScript = js.find(
      (r) => r.loadTime === "beforeDOMReady" && r.contentType === "external",
    )

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {coreStylesheet && <link rel="preload" href={coreStylesheet} as="style" />}
        {coreScript && coreScript.contentType === "external" && (
          <link rel="preload" href={coreScript.src} as="script" />
        )}
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (!localStorage.getItem("theme")) {
              localStorage.setItem("theme", "light");
              document.documentElement.setAttribute("saved-theme", "light");
            }

            document.addEventListener("nav", () => {
              const graphOuter = document.querySelector(".graph");
              if (graphOuter && !graphOuter.querySelector(".retro-window-header")) {
                const h3 = graphOuter.querySelector("h3");
                if (h3) {
                  h3.style.display = "none";
                }
                
                const header = document.createElement("div");
                header.className = "retro-window-header";
                header.innerHTML = ' \\
                  <span class="title">${i18n(cfg.locale).components.graph.title}</span> \\
                  <div class="window-controls"> \\
                    <button class="btn-close" aria-label="Close" id="btn-graph-close"></button> \\
                    <button class="btn-minimize" aria-label="Minimize" id="btn-graph-min"></button> \\
                    <button class="btn-full" aria-label="Fullscreen" id="btn-graph-full"></button> \\
                  </div> \\
                ';
                
                graphOuter.insertBefore(header, graphOuter.firstChild);

                const btnClose = document.getElementById("btn-graph-close");
                const btnMin = document.getElementById("btn-graph-min");
                const btnFull = document.getElementById("btn-graph-full");

                if (btnClose && btnMin && btnFull) {
                  btnClose.addEventListener("click", () => {
                    graphOuter.classList.remove("graph-fullscreen");
                    graphOuter.classList.add("graph-closed");
                  });
                  
                  btnMin.addEventListener("click", () => {
                    graphOuter.classList.remove("graph-fullscreen");
                    graphOuter.classList.remove("graph-closed");
                  });
                  
                  btnFull.addEventListener("click", () => {
                    graphOuter.classList.remove("graph-closed");
                    graphOuter.classList.add("graph-fullscreen");
                  });
                }
              }
            });
          `
        }} />
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
