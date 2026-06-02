# Engineering Decisions

## Decision: Utilize Markdown for Knowledge Management

### Context
- The project required a lightweight, portable, and easily editable format to store a growing collection of technical notes, cheat sheets, and reference materials across various domains like Cybersecurity, DevOps, and Cloud.

### Decision
- Chosen to write all notes in Markdown (`.md`) format.

### Alternatives Considered
- Rich text editors (Word, Google Docs): Not developer-friendly, harder to version control.
- Notion/Evernote: Proprietary formats, vendor lock-in, harder to export as a static site.

### Trade-offs
- Pros: Extremely portable, excellent integration with version control (Git), widely supported by static site generators (like Quartz), easy to write fast.
- Cons: Lacks advanced formatting features natively without HTML/CSS, requires a viewer to render.

### Impact
- Enables easy versioning and seamless future migration to a static site generator like Quartz.

## Decision: Choose Quartz and Vercel for Future Deployment (Planned)

### Context
- The user wants to publish the local markdown notes as a highly customizable technical blog.

### Decision
- Selected Quartz (a Markdown static site generator) and Vercel (cloud platform for static sites).

### Alternatives Considered
- Jekyll/Hugo/Gatsby: Require different setups, Quartz is specifically optimized for Obsidian-like vaults and heavily linked markdown.
- GitHub Pages/Netlify: Valid alternatives, but Vercel offers excellent speed, CI/CD integration, and custom domain management.

### Trade-offs
- Pros: Quartz natively understands Obsidian syntax (wikilinks, tags), provides great default styling but is highly customizable (React). Vercel offers seamless continuous deployment from Git.
- Cons: Requires Node.js setup and learning Quartz's component structure for UI customization.

### Impact
- Sets the path for transforming the private knowledge base into a public, performant technical blog with custom UI capabilities.
