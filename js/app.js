/**
 * @file app.js
 * Main UI Controller for Campus Event Planner
 * Handles tab navigation, interactive checklists, schedule filters,
 * post-event review analytics, video script teleprompter, and print workflows.
 */

(function () {
  const APPROVALS_STORAGE_KEY = 'kit_udhayam_approvals_state_v1';
  const ACTIVE_TAB_KEY = 'kit_udhayam_active_tab_v1';

  // State
  let currentTab = 'home';
  let approvalsState = {};
  let scheduleFilter = 'all';

  document.addEventListener('DOMContentLoaded', function () {
    initApp();
  });

  function initApp() {
    initNavigation();
    initApprovals();
    initSchedule();
    initTeam();
    initPostEventReview();
    initPrintHooks();

    // Initialize Budget Module
    if (window.BudgetManager) {
      window.BudgetManager.init();
    }

    // Restore active tab
    const savedTab = localStorage.getItem(ACTIVE_TAB_KEY);
    if (savedTab && document.getElementById(`tab-${savedTab}`)) {
      switchTab(savedTab);
    } else {
      switchTab('home');
    }
  }

  /**
   * Tab Navigation System
   */
  function initNavigation() {
    const navLinks = document.querySelectorAll('[data-tab-target]');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetTab = this.getAttribute('data-tab-target');
        switchTab(targetTab);

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // Mobile Hamburger Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Direct Quick-Jump Buttons (e.g. from Dashboard cards)
    document.addEventListener('click', function (e) {
      const jumpBtn = e.target.closest('[data-jump-tab]');
      if (jumpBtn) {
        e.preventDefault();
        const target = jumpBtn.getAttribute('data-jump-tab');
        switchTab(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  function switchTab(tabId) {
    const tabPanels = document.querySelectorAll('.tab-panel');
    const navButtons = document.querySelectorAll('[data-tab-target]');

    let found = false;
    tabPanels.forEach(panel => {
      if (panel.id === `tab-${tabId}`) {
        panel.classList.remove('hidden');
        found = true;
      } else {
        panel.classList.add('hidden');
      }
    });

    if (!found) {
      tabId = 'home';
      const homePanel = document.getElementById('tab-home');
      if (homePanel) homePanel.classList.remove('hidden');
    }

    currentTab = tabId;
    localStorage.setItem(ACTIVE_TAB_KEY, tabId);

    // Update active nav styling
    navButtons.forEach(btn => {
      const target = btn.getAttribute('data-tab-target');
      if (target === tabId) {
        btn.classList.add('bg-slate-900', 'text-white', 'shadow-xs');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-slate-900', 'text-white', 'shadow-xs');
        btn.classList.add('text-slate-600', 'hover:bg-slate-100');
      }
    });

    // Sync printable preview if switching to deliverables
    if (tabId === 'deliverables') {
      syncPrintableEventPlan();
    }
  }

  /**
   * Approvals & Promotion Checklist
   */
  function initApprovals() {
    const saved = localStorage.getItem(APPROVALS_STORAGE_KEY);
    if (saved) {
      try {
        approvalsState = JSON.parse(saved);
      } catch (e) {
        console.error("Could not parse approvals", e);
        approvalsState = {};
      }
    } else {
      // Set defaults from EVENT_DATA
      if (window.EVENT_DATA && window.EVENT_DATA.approvals) {
        window.EVENT_DATA.approvals.forEach(app => {
          approvalsState[app.id] = app.completed;
        });
      }
    }

    renderApprovalsList();

    // Reset Approvals Button
    const resetBtn = document.getElementById('btn-reset-approvals');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (confirm("Reset college approval checklist to initial sample state?")) {
          approvalsState = {};
          if (window.EVENT_DATA && window.EVENT_DATA.approvals) {
            window.EVENT_DATA.approvals.forEach(app => {
              approvalsState[app.id] = app.completed;
            });
          }
          saveApprovals();
          renderApprovalsList();
        }
      });
    }
  }

  function saveApprovals() {
    try {
      localStorage.setItem(APPROVALS_STORAGE_KEY, JSON.stringify(approvalsState));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }

  function renderApprovalsList() {
    const container = document.getElementById('approvals-container');
    if (!container || !window.EVENT_DATA || !window.EVENT_DATA.approvals) return;

    container.innerHTML = '';
    const approvals = window.EVENT_DATA.approvals;
    let completedCount = 0;

    approvals.forEach((app, index) => {
      const isDone = approvalsState[app.id] !== undefined ? approvalsState[app.id] : app.completed;
      if (isDone) completedCount++;

      const card = document.createElement('div');
      card.className = `p-4 rounded-xl border transition-all ${
        isDone 
          ? 'bg-emerald-50/60 border-emerald-200' 
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`;

      card.innerHTML = `
        <div class="flex items-start justify-between gap-3">
          <label class="flex items-start gap-3 cursor-pointer select-none flex-1">
            <input type="checkbox" class="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" 
                   data-approval-id="${app.id}" ${isDone ? 'checked' : ''}>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-semibold text-sm ${isDone ? 'text-emerald-950 line-through' : 'text-slate-900'}">${index + 1}. ${escapeHtml(app.title)}</span>
                <span class="text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
                  isDone ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-100 text-amber-800'
                }">${isDone ? 'Formal Sanctioned' : 'Action Pending'}</span>
              </div>
              <p class="text-xs text-slate-600 mt-1">${escapeHtml(app.description)}</p>
              <div class="flex items-center gap-4 mt-2 text-xs text-slate-500 flex-wrap">
                <span><strong>Authority:</strong> ${escapeHtml(app.authority)}</span>
                <span class="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">Ref: ${escapeHtml(app.referenceDoc)}</span>
              </div>
            </div>
          </label>
        </div>
      `;

      container.appendChild(card);
    });

    // Update Progress Bar & Counters
    const total = approvals.length;
    const percent = Math.round((completedCount / total) * 100);

    const progressFill = document.getElementById('approvals-progress-fill');
    const progressText = document.getElementById('approvals-progress-text');
    const badgeCount = document.getElementById('approvals-count-badge');
    const dashApprovalsCard = document.getElementById('dash-card-approvals');

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `${completedCount} of ${total} Cleared (${percent}%)`;
    if (badgeCount) badgeCount.textContent = `${completedCount}/${total}`;
    if (dashApprovalsCard) dashApprovalsCard.textContent = `${completedCount} of ${total} Cleared`;

    // Attach checkbox listeners
    container.querySelectorAll('input[type="checkbox"]').forEach(box => {
      box.addEventListener('change', function () {
        const id = this.getAttribute('data-approval-id');
        approvalsState[id] = this.checked;
        saveApprovals();
        renderApprovalsList();
      });
    });
  }

  /**
   * Event-Day Schedule Management
   */
  function initSchedule() {
    renderSchedule();

    const filterChips = document.querySelectorAll('[data-schedule-filter]');
    filterChips.forEach(chip => {
      chip.addEventListener('click', function () {
        filterChips.forEach(c => {
          c.classList.remove('bg-sky-600', 'text-white');
          c.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
        });
        this.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
        this.classList.add('bg-sky-600', 'text-white');

        scheduleFilter = this.getAttribute('data-schedule-filter');
        renderSchedule();
      });
    });
  }

  function renderSchedule() {
    const container = document.getElementById('schedule-timeline-container');
    if (!container || !window.EVENT_DATA || !window.EVENT_DATA.schedule) return;

    container.innerHTML = '';
    const items = window.EVENT_DATA.schedule;

    const filtered = items.filter(item => {
      if (scheduleFilter === 'all') return true;
      if (scheduleFilter === 'technical') return item.track.toLowerCase().includes('technical');
      if (scheduleFilter === 'non-technical') return item.track.toLowerCase().includes('non-technical') || item.track.toLowerCase().includes('creative');
      if (scheduleFilter === 'ceremony') return item.track.toLowerCase().includes('inauguration') || item.track.toLowerCase().includes('valedictory') || item.track.toLowerCase().includes('registration');
      if (scheduleFilter === 'breaks') return item.track.toLowerCase().includes('break');
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="p-8 text-center text-slate-500">No events found matching "${scheduleFilter}".</div>`;
      return;
    }

    filtered.forEach((item, index) => {
      let badgeColor = "bg-slate-100 text-slate-800";
      if (item.track === 'Inauguration' || item.track === 'Valedictory') badgeColor = "bg-purple-100 text-purple-800 border-purple-200";
      else if (item.track === 'Technical') badgeColor = "bg-sky-100 text-sky-800 border-sky-200";
      else if (item.track === 'Break') badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
      else if (item.track === 'Registration') badgeColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
      else if (item.track === 'Creative' || item.track === 'Non-Technical') badgeColor = "bg-rose-100 text-rose-800 border-rose-200";

      const card = document.createElement('div');
      card.className = "relative pl-8 pb-8 last:pb-2 border-l-2 border-slate-200";
      card.innerHTML = `
        <div class="absolute -left-2 top-1 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-xs"></div>
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-sky-300 transition-all">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <span class="inline-flex items-center font-mono font-semibold text-xs text-sky-900 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
              <svg class="w-3.5 h-3.5 mr-1 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ${escapeHtml(item.time)}
            </span>
            <span class="text-xs px-2.5 py-0.5 rounded-full font-medium border ${badgeColor} self-start sm:self-auto">${escapeHtml(item.track)}</span>
          </div>
          <h4 class="text-base font-bold text-slate-900">${escapeHtml(item.title)}</h4>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">${escapeHtml(item.description)}</p>
          <div class="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span class="flex items-center">
              <svg class="w-3.5 h-3.5 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <strong>Venue:</strong>&nbsp;${escapeHtml(item.venue)}
            </span>
            <span class="flex items-center">
              <svg class="w-3.5 h-3.5 mr-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <strong>Lead:</strong>&nbsp;${escapeHtml(item.lead)}
            </span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  /**
   * Team Responsibilities Matrix
   */
  function initTeam() {
    renderTeam();

    const searchInput = document.getElementById('team-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        renderTeam(query);
      });
    }
  }

  function renderTeam(query = '') {
    const container = document.getElementById('team-grid-container');
    if (!container || !window.EVENT_DATA || !window.EVENT_DATA.teamRoles) return;

    container.innerHTML = '';
    const roles = window.EVENT_DATA.teamRoles;

    const filtered = roles.filter(r => {
      if (!query) return true;
      return r.role.toLowerCase().includes(query) ||
             r.inCharge.toLowerCase().includes(query) ||
             r.responsibilities.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-span-full p-8 text-center text-slate-500">No team members match "${query}".</div>`;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between";
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <h4 class="font-bold text-slate-900 text-sm">${escapeHtml(item.role)}</h4>
            <span class="px-2 py-0.5 text-xs font-semibold rounded bg-slate-100 text-slate-700">Committee</span>
          </div>
          <div class="text-xs font-semibold text-sky-800 mb-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            ${escapeHtml(item.inCharge)}
          </div>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">${escapeHtml(item.responsibilities)}</p>
        </div>
        <div class="border-t border-slate-100 pt-3 space-y-1.5 text-xs">
          <div class="text-slate-700"><strong class="text-slate-900">Pre-Event Task:</strong> ${escapeHtml(item.preEventTasks)}</div>
          <div class="text-slate-700"><strong class="text-slate-900">Event-Day Role:</strong> ${escapeHtml(item.eventDayTasks)}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  /**
   * Post-Event Review Analytics & Metrics
   */
  function initPostEventReview() {
    const review = window.EVENT_DATA && window.EVENT_DATA.postEventReview;
    if (!review) return;

    // Render satisfaction bars
    const surveyContainer = document.getElementById('review-survey-breakdown');
    if (surveyContainer && review.surveyBreakdown) {
      surveyContainer.innerHTML = '';
      review.surveyBreakdown.forEach(s => {
        const item = document.createElement('div');
        item.className = "space-y-1";
        item.innerHTML = `
          <div class="flex justify-between text-xs font-medium text-slate-700">
            <span>${escapeHtml(s.category)}</span>
            <span class="font-mono text-sky-900 font-semibold">${s.score} / 5.0 (${s.percentage}%)</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div class="bg-sky-600 h-2 rounded-full" style="width: ${s.percentage}%"></div>
          </div>
        `;
        surveyContainer.appendChild(item);
      });
    }

    // Render lessons learned
    const lessonsContainer = document.getElementById('review-lessons-container');
    if (lessonsContainer && review.lessonsLearned) {
      lessonsContainer.innerHTML = '';
      review.lessonsLearned.forEach((lesson, idx) => {
        const div = document.createElement('div');
        div.className = "p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1.5";
        div.innerHTML = `
          <div class="font-bold text-slate-900 flex items-center gap-1.5">
            <span class="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-[10px]">${idx + 1}</span>
            ${escapeHtml(lesson.challenge)}
          </div>
          <p class="text-slate-600"><strong>Observed:</strong> ${escapeHtml(lesson.observation)}</p>
          <p class="text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-100">
            <strong>Action for Next Edition:</strong> ${escapeHtml(lesson.improvement)}
          </p>
        `;
        lessonsContainer.appendChild(div);
      });
    }
  }

  /**
   * Sync Printable Event Plan with live budget and approvals
   */
  function syncPrintableEventPlan() {
    const budgetSummaryPlaceholder = document.getElementById('print-budget-summary-table');
    if (budgetSummaryPlaceholder && window.BudgetManager) {
      const totals = window.BudgetManager.getTotals();
      const items = window.BudgetManager.getItems();

      let tableHTML = `
        <table class="w-full text-left text-xs border border-slate-300 mb-4 border-collapse">
          <thead>
            <tr class="bg-slate-100 text-slate-800 border-b border-slate-300">
              <th class="p-2 border-r border-slate-300">No.</th>
              <th class="p-2 border-r border-slate-300">Item Description</th>
              <th class="p-2 border-r border-slate-300">Category</th>
              <th class="p-2 border-r border-slate-300 text-center">Qty</th>
              <th class="p-2 border-r border-slate-300 text-right">Unit Price</th>
              <th class="p-2 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
      `;

      items.forEach((item, idx) => {
        const sub = (Number(item.quantity) || 0) * (Number(item.unitCost) || 0);
        tableHTML += `
          <tr class="border-b border-slate-200">
            <td class="p-2 border-r border-slate-300 font-mono">${idx + 1}</td>
            <td class="p-2 border-r border-slate-300 font-medium text-slate-900">${escapeHtml(item.item)}</td>
            <td class="p-2 border-r border-slate-300 text-slate-600">${escapeHtml(item.category)}</td>
            <td class="p-2 border-r border-slate-300 text-center font-mono">${item.quantity}</td>
            <td class="p-2 border-r border-slate-300 text-right font-mono">${window.BudgetManager.formatINR(item.unitCost)}</td>
            <td class="p-2 text-right font-mono font-semibold">${window.BudgetManager.formatINR(sub)}</td>
          </tr>
        `;
      });

      tableHTML += `
          <tr class="bg-slate-50 font-semibold border-t-2 border-slate-400">
            <td colspan="5" class="p-2 text-right border-r border-slate-300">Direct Budget Total:</td>
            <td class="p-2 text-right font-mono">${window.BudgetManager.formatINR(totals.directTotal)}</td>
          </tr>
          <tr class="bg-slate-50 font-semibold">
            <td colspan="5" class="p-2 text-right border-r border-slate-300">Contingency Reserve (${(totals.contingencyRate * 100).toFixed(0)}%):</td>
            <td class="p-2 text-right font-mono">${window.BudgetManager.formatINR(totals.contingencyAmount)}</td>
          </tr>
          <tr class="bg-slate-200 font-bold text-slate-900">
            <td colspan="5" class="p-2 text-right border-r border-slate-300">Net Estimated Event Budget:</td>
            <td class="p-2 text-right font-mono text-sm">${window.BudgetManager.formatINR(totals.grandTotal)}</td>
          </tr>
        </tbody>
      </table>
      `;

      budgetSummaryPlaceholder.innerHTML = tableHTML;
    }
  }

  /**
   * Print hooks
   */
  function initPrintHooks() {
    const printBtns = document.querySelectorAll('[data-action="print-event-plan"]');
    printBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        // Ensure printable data is synced
        syncPrintableEventPlan();

        // Switch to deliverables view if not active
        switchTab('deliverables');

        // Scroll to printable plan
        const printArea = document.getElementById('printable-event-plan-doc');
        if (printArea) {
          printArea.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
          window.print();
        }, 300);
      });
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Expose to window
  window.AppUI = {
    switchTab: switchTab,
    syncPrintable: syncPrintableEventPlan
  };
})();
