# Project Context

## 1. Overview
- This project is a personal knowledge base and technical note repository, containing markdown files on various topics including Cybersecurity, DevOps, Cloud Computing (AWS), Linux, and AI.
- The core purpose is to store, organize, and track technical learnings and reference materials, currently structured as an Obsidian vault.

## 2. Architecture
- The system is a static collection of markdown files (`.md`), PDFs, and images organized within a central `content` directory.
- It utilizes Obsidian for local viewing and management, as indicated by the `.obsidian` folder.

## 3. Tech Stack
- **Languages/Formats:** Markdown, PDF, PNG
- **Tools:** Obsidian (for local note-taking and graph view)
- **Infrastructure:** Currently a local repository, with intentions to deploy as a technical blog on Vercel using Quartz.

## 4. Key Features
- Comprehensive documentation on Cybersecurity concepts (e.g., vulnerabilities, bug bounty, BeEF, OSINT, SOC).
- DevOps and Cloud notes (e.g., AWS, Docker, Jenkins, CI/CD).
- Linux commands and system management reference.

## 5. Current State
- The knowledge base contains approximately 80 files across multiple domains.
- Planning phase for migrating and deploying the notes as a public technical blog using Quartz and Vercel.

## 6. Interfaces & Integrations
- Local interface via Obsidian.
- Future integration planned: Quartz (Static Site Generator) and Vercel for hosting.

## 7. Security Considerations
- The repository contains notes on security vulnerabilities and tools (e.g., SQLmap, Nuclei, MSFvenom); care should be taken to ensure no sensitive personal data or active credentials are inadvertently committed.

## 8. Known Issues / Limitations
- Several notes are marked as "(incomplete)" (e.g., SQLmap, Remote File Inclusion Vulnerability).
- Currently limited to local viewing; not yet accessible as a public website.

## 9. Next Steps
- Initialize a Quartz project.
- Configure Quartz to use the existing `content` directory.
- Customize the Quartz UI according to personal preferences.
- Set up a Vercel project and deploy the repository.
