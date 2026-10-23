# Campus Event Planner: UDHAYAM 2027
**College Event Planning and Management Assignment**  
*KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore, Tamil Nadu*  
*Student General Secretary: Ms. Priyadharshini (Final Year B.Tech CSE)*

---

## 1. Project Overview
**Campus Event Planner** is a clean, practical web application and documentation repository created by a college student for an academic event planning assignment. 

The project develops a comprehensive operational plan for the upcoming edition of **UDHAYAM 2027**—the annual national-level techno-cultural festival and student symposium held at **KIT – Kalaignarkarunanidhi Institute of Technology**, Kannampalayam Post, Coimbatore, Tamil Nadu, coordinated by **Ms. Priyadharshini** (Student General Secretary) and the Student Organizing Council.

### Event Plan & Project Hub Includes:
1. **Practical Event Plan (`documents/event-plan.md` & In-App Printable View):** An academic-grade event proposal with objectives, dates, 6-week preparation timeline, itemized budget, venue allocation, 8 required college approvals, and risk mitigation strategies.
2. **Interactive Web Application (`index.html`):** A client-side portal featuring a real-time reactive budget calculator, interactive college approval tracker, filterable event-day schedule, and team matrix.
3. **Official Event Poster Concept (`assets/poster-placeholder.svg`):** Vector poster asset formatted for campus flex banners, digital notice circulars, and promotional social media.
4. **Student Submission Checklist (`documents/submission-checklist.md`):** A verification guide for final academic submission and project evaluation.

---

## 2. Institution & Symposium Overview
* **College:** KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore.
* **Affiliation & Accreditations:** Autonomous institution affiliated to Anna University, Chennai; Approved by AICTE, New Delhi; Accredited with NAAC 'A' Grade and NBA.
* **Event:** **UDHAYAM 2027** is KIT's flagship inter-collegiate symposium and fest, featuring technical tracks (paper presentations, project expos, coding challenges) and cultural arts.
* **Planning Scope:** Historical institutional credentials and campus venues (such as the 1,500-seat *Dr. Kalaignar Auditorium* and computing laboratories) are verified facts. The proposed event dates (**February 26–27, 2027**), itemized budget figures (**₹3,13,500 gross**), and expected attendance (**1,200 delegates**) are proposed estimates formulated specifically for this assignment.

---

## 3. Key Website Features

### A. Home Dashboard
* Event introduction, institutional badge, and proposed status notices.
* Real-time summary metric cards for attendance, estimated gross budget, cost per delegate, and approval status.
* SMART criteria objectives summary and quick navigation jumps.

### B. Practical Event Plan
* Event objectives and measurable outcomes.
* 6-week preparation milestone schedule (T-6 weeks to Post-Event T+1 week).
* Campus venue allocations (Auditorium, Central Seminar Hall, Mechanical/Aero Hangars, Computer Labs).
* Risk mitigation matrix (power failure backup via 62.5 kVA diesel generator, medical desk, crowd overflow).

### C. Event-Day Schedule
* Realistic 11-slot timeline from 08:30 AM registration to 05:30 PM dispersal.
* Interactive category filters: *All*, *Technical*, *Non-Technical & Creative*, *Ceremonies*, and *Breaks*.

### D. Team Responsibilities
* Committee matrix covering 9 faculty and student roles (Faculty Chief Coordinator, Student Convener, Registration, Labs, Hospitality, Media, Stage, Safety, and Documentation).
* Real-time text search to filter by role or member name.

### E. Interactive Budget Calculator
* Itemized expense table categorized by Stage, Hospitality, Prizes, Kits, Catering, and Marketing.
* Instant dynamic recalculation: changing a quantity or unit price updates row subtotal, direct expenses, 10% contingency reserve, grand total, and per-delegate cost.
* Form to add custom expense line items with instant validation.
* Local persistence: All budget changes are stored in the browser's `localStorage`.
* One-click "Reset to Proposed Default" button.

### F. Promotion & Approvals Checklist
* Multi-channel promotion strategy (150 printed posters to 50 colleges, student ambassadors, Instagram reels, and web portal).
* Interactive 8-point college approvals checklist (Principal sanction, venue allocation, budget clearance, police intimation, medical standby).
* Animated administrative readiness progress bar that persists across page refreshes.

### G. Post-Event Review & Documentation
* Sample post-mortem framework comparing planned vs. actual metrics (1,200 planned vs 1,245 actual attendance; ₹2,85,000 budget vs ₹2,78,600 spend).
* Satisfaction survey breakdown across 5 dimensions (4.6 / 5.0 overall score).
* Documented lessons learned and specific operational improvements for the next edition.

### H. Event Proposal Documents & Exports
* Single-click **"Print / Save Plan as PDF"** feature optimized for standard A4 paper with university headers, itemized budgets, and signature lines.
* Complete academic event proposal preview with 6-week milestones and risk contingency plan.
* Official vector SVG poster concept preview with direct download link.
* Student academic verification and final submission checklist.

---

## 4. Technologies Used
* **HTML5:** Semantic structure, accessible form controls, clean document layout.
* **CSS3:** Custom styles, responsive grid/flexbox layouts, print media stylesheet (`@media print`).
* **Tailwind CSS:** Modern utility styling.
* **Vanilla JavaScript (ES6+):** Modular DOM manipulation, reactive budget math, local persistence, event delegation.
* **Web Storage API (`localStorage`):** Preserves budget numbers and approval states without external database dependencies.
* **Zero Heavy Frameworks:** No React, Node.js, MongoDB, or paid APIs required for local execution.

---

## 5. Folder Structure
```
college-event-planner/
├── index.html                   # Main application entry point
├── css/
│   └── style.css                # Typography, custom styles, and print layout
├── js/
│   ├── app.js                   # Navigation, schedule filter, approvals, and print hooks
│   └── budget.js                # Reactive budget calculations and localStorage sync
├── data/
│   └── event-data.js            # Master data store (college facts, timeline, roles, budget)
├── documents/
│   ├── event-plan.md            # Practical Event Plan & Proposal (Markdown)
│   └── submission-checklist.md  # Student submission verification checklist
├── assets/
│   ├── images/                  # High-quality field photographs (Auditorium, Hackathon, Robotics, Cultural)
│   └── poster-placeholder.svg   # Official event poster vector concept
├── metadata.json                # Project descriptor
├── README.md                    # Project documentation
└── .gitignore                   # Standard repository ignore file
```

---

## 6. How to Run Locally

### Option 1: Double-Click (No Installation Needed)
1. Download or clone this repository.
2. Locate the `index.html` file in the project folder.
3. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, or Safari).

### Option 2: VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by *Ritwick Dey* (if not already installed).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html`.

### Option 3: Terminal / Vite Dev Server (If Node.js is present)
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 7. How to Test the Features
1. **Navigation:** Click each tab in the navigation bar (*Home, Event Plan, Schedule, Team, Budget, Approvals, Review, Deliverables*). Verify smooth panel switching.
2. **Budget Recalculations:**
   * Go to the **Budget Calculator** tab.
   * Click the `+` button on *Participant Delegate Kit* to increase quantity from 1,200 to 1,300.
   * Observe that the line total, the direct subtotal, the 10% contingency amount, and the cost per delegate update instantly.
   * Add a new expense using the form at the bottom (e.g., "Drone Battery Packs", Qty: 2, Unit: ₹2,500). Verify that it appears in the table.
   * Refresh the page; verify that your custom item and edited values remain intact in `localStorage`.
   * Click **"Reset to Proposed Default"** to restore initial estimates.
3. **Approvals Checklist:**
   * Go to **Promotion & Approvals**.
   * Toggle the checkboxes for pending items.
   * Observe the readiness percentage bar animate and the counter badge increment.
   * Refresh the page to verify that the checkmarks persist.
4. **Schedule & Team Filters:**
   * In **Event-Day Schedule**, click the *"Technical"* filter chip to see only technical competitions.
   * In **Team Responsibilities**, type *"Registration"* in the search box to filter committee roles.
5. **PDF / Print Layout Test:**
   * Click the **"Print / Save Plan as PDF"** button.
   * In your browser's print preview window, check that navigation bars and buttons are hidden, college headers are visible, and clean tables with signature blocks are displayed.

---

## 8. How to Publish Using GitHub Pages
You can host this project online for free using GitHub Pages:

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: College Event Planner for UDHAYAM 2027"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/college-event-planner.git
   git push -u origin main
   ```
2. **Enable GitHub Pages:**
   * In your GitHub repository, click on **Settings** (top right tab).
   * In the left sidebar, click **Pages**.
   * Under **Build and deployment > Source**, select **Deploy from a branch**.
   * Under **Branch**, select `main` and root `/(root)`, then click **Save**.
3. **View Live Site:**
   * Within 1–2 minutes, GitHub Pages will deploy your site to:  
     `https://<YOUR_USERNAME>.github.io/college-event-planner/`

---

## 9. Known Limitations
* **Browser Storage Scope:** Budget adjustments and approval checkmarks are stored locally in the individual user's browser via `localStorage`. Changes do not synchronize across different devices or incognito sessions.
* **Evaluation Data:** Post-event attendance and satisfaction metrics are sample benchmark datasets included to illustrate the post-event audit framework for a proposed future event.
* **Offline Vector Assets:** The event poster concept uses an SVG asset (`assets/poster-placeholder.svg`) which renders cleanly in any browser without requiring external image CDNs.

---

## 10. Academic Integrity & Declaration
This project is an original academic submission prepared for a college event planning and management course. It integrates verified institutional data from **KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore**, with realistic proposed planning models.
