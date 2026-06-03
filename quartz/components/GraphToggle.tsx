import { QuartzComponent, QuartzComponentConstructor } from "./types"

const GraphToggle: QuartzComponent = () => {
  return (
    <>
      <button class="view-graph-btn" id="view-graph-btn">View Architecture Graph</button>
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener("nav", () => {
            const btn = document.getElementById("view-graph-btn");
            const graph = document.querySelector(".graph");
            if (btn && graph) {
              // Move button right before the graph
              graph.parentNode.insertBefore(btn, graph);
              
              btn.addEventListener("click", () => {
                graph.classList.toggle("show-graph");
                if (graph.classList.contains("show-graph")) {
                  btn.textContent = "Hide Architecture Graph";
                } else {
                  btn.textContent = "View Architecture Graph";
                }
              });
            } else if (btn) {
              btn.style.display = "none";
            }
          });
        `
      }} />
    </>
  )
}

export default (() => GraphToggle) satisfies QuartzComponentConstructor
