import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">
    {children}
    <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener("nav", () => {
            if (document.getElementById("view-graph-btn")) return;
            const graph = document.querySelector(".graph");
            if (graph) {
              const btn = document.createElement("button");
              btn.id = "view-graph-btn";
              btn.className = "view-graph-btn";
              btn.textContent = "View Architecture Graph";
              graph.parentNode.insertBefore(btn, graph);
              
              btn.addEventListener("click", () => {
                graph.classList.toggle("show-graph");
                if (graph.classList.contains("show-graph")) {
                  btn.textContent = "Hide Architecture Graph";
                } else {
                  btn.textContent = "View Architecture Graph";
                }
              });
            }
          });
        `
      }} />
  </div>
}

export default (() => Body) satisfies QuartzComponentConstructor
