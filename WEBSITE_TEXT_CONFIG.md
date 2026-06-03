# Website Text & Configuration Guide

Quartz is designed to keep your website configuration organized across two main files. To change the text, social links, and titles on your website, you can edit these files:

## 1. Social Links & Main Settings (`quartz.config.yaml`)

Your `quartz.config.yaml` file located in the root of your project handles the core settings of your website.

To change your **Social Links**, look for the `Footer` plugin in `quartz.config.yaml` around line 195:
```yaml
  - source: github:quartz-community/footer
    enabled: true
    options:
      links:
        GitHub: https://github.com/jackyzha0/quartz
        Discord Community: https://discord.gg/cRFFHYye7t
```
You can edit the URLs or add new links (e.g., `Twitter: https://twitter.com/yourhandle`).

To change the **Browser Tab Title** of the website, edit the `pageTitle` property at the top of the file:
```yaml
configuration:
  pageTitle: Quartz 5
```

## 2. All Visible UI Texts (`quartz/i18n/locales/en-US.ts`)

All the visible text used in the sidebars, buttons, search bars, and titles are located in the language file. 

Open **`quartz/i18n/locales/en-US.ts`**. Here you can change any of the text. For example:

- **Interactive Graph Title:**
  ```typescript
      graph: {
        title: "INTERACTIVE DEV ECOSYSTEM", // <--- You can change this anytime!
      },
  ```

- **Table of Contents:**
  ```typescript
      toc: {
        title: "Table of Contents",
      },
  ```

- **Search Placeholder:**
  ```typescript
      search: {
        title: "Search",
        searchBarPlaceholder: "Search for something",
      },
  ```

### How to Apply Changes
After you make changes to either `quartz.config.yaml` or `quartz/i18n/locales/en-US.ts`, simply commit and push your changes to GitHub. Vercel will automatically rebuild your website with the updated text and links!
