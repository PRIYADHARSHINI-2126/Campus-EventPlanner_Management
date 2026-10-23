/**
 * @file budget.js
 * Budget Calculator Module for UDHAYAM 2027
 * Handles itemized expenses, reactive recalculations, contingency, and localStorage persistence.
 */

(function () {
  const STORAGE_KEY = 'kit_udhayam_budget_items_v1';
  const CONTINGENCY_KEY = 'kit_udhayam_contingency_rate';
  const FOOTFALL_KEY = 'kit_udhayam_expected_footfall';

  // State
  let budgetItems = [];
  let contingencyRate = 0.10; // 10% standard academic contingency
  let expectedFootfall = 1200;
  let collegeGrant = 120000; // Management seed funding
  let registrationFeePerPerson = 150;

  /**
   * Initialize budget data from localStorage or default event data
   */
  function initBudget() {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    const savedRate = localStorage.getItem(CONTINGENCY_KEY);
    const savedFootfall = localStorage.getItem(FOOTFALL_KEY);

    if (savedItems) {
      try {
        budgetItems = JSON.parse(savedItems);
      } catch (e) {
        console.error("Failed to parse saved budget, loading defaults", e);
        loadDefaultItems();
      }
    } else {
      loadDefaultItems();
    }

    if (savedRate) {
      const parsedRate = parseFloat(savedRate);
      if (!isNaN(parsedRate) && parsedRate >= 0 && parsedRate <= 0.5) {
        contingencyRate = parsedRate;
      }
    }

    if (savedFootfall) {
      const parsedFootfall = parseInt(savedFootfall, 10);
      if (!isNaN(parsedFootfall) && parsedFootfall > 0) {
        expectedFootfall = parsedFootfall;
      }
    }

    renderBudget();
  }

  function loadDefaultItems() {
    if (window.EVENT_DATA && window.EVENT_DATA.defaultBudgetItems) {
      budgetItems = JSON.parse(JSON.stringify(window.EVENT_DATA.defaultBudgetItems));
    } else {
      budgetItems = [];
    }
    saveBudgetToStorage();
  }

  function saveBudgetToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(budgetItems));
      localStorage.setItem(CONTINGENCY_KEY, contingencyRate.toString());
      localStorage.setItem(FOOTFALL_KEY, expectedFootfall.toString());
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  /**
   * Calculates all budget totals
   */
  function calculateTotals() {
    let directTotal = 0;
    const categoryTotals = {};

    budgetItems.forEach(item => {
      const qty = Number(item.quantity) || 0;
      const unit = Number(item.unitCost) || 0;
      const subtotal = qty * unit;
      directTotal += subtotal;

      const cat = item.category || "General";
      categoryTotals[cat] = (categoryTotals[cat] || 0) + subtotal;
    });

    const contingencyAmount = Math.round(directTotal * contingencyRate);
    const grandTotal = directTotal + contingencyAmount;
    const costPerDelegate = expectedFootfall > 0 ? Math.round(grandTotal / expectedFootfall) : 0;
    const estimatedRegistrationRevenue = expectedFootfall * registrationFeePerPerson;
    const totalProjectedIncome = estimatedRegistrationRevenue + collegeGrant;
    const netVariance = totalProjectedIncome - grandTotal;

    return {
      directTotal,
      contingencyAmount,
      grandTotal,
      costPerDelegate,
      contingencyRate,
      categoryTotals,
      estimatedRegistrationRevenue,
      collegeGrant,
      totalProjectedIncome,
      netVariance
    };
  }

  /**
   * Format Indian Rupee Currency
   */
  function formatINR(amount) {
    const num = Number(amount) || 0;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  }

  /**
   * Renders the budget table and summary cards
   */
  function renderBudget() {
    const tableBody = document.getElementById('budget-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    const totals = calculateTotals();

    budgetItems.forEach((item, index) => {
      const qty = Number(item.quantity) || 0;
      const unit = Number(item.unitCost) || 0;
      const subtotal = qty * unit;

      const tr = document.createElement('tr');
      tr.className = 'budget-row hover:bg-slate-50 transition-colors border-b border-slate-200';
      tr.innerHTML = `
        <td class="py-3 px-4 font-mono text-xs text-slate-500">${index + 1}</td>
        <td class="py-3 px-4">
          <span class="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-sky-100 text-sky-800 mb-1">${escapeHtml(item.category)}</span>
          <div class="font-medium text-slate-900 text-sm">${escapeHtml(item.item)}</div>
          ${item.notes ? `<div class="text-xs text-slate-500 mt-0.5">${escapeHtml(item.notes)}</div>` : ''}
        </td>
        <td class="py-3 px-4 text-center">
          <div class="inline-flex items-center border border-slate-300 rounded-md bg-white shadow-xs">
            <button type="button" class="px-2 py-1 text-slate-600 hover:bg-slate-100 rounded-l transition-colors" data-action="dec-qty" data-id="${item.id}" title="Decrease Quantity">-</button>
            <input type="number" min="1" max="5000" class="w-16 text-center text-sm py-1 font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500" value="${qty}" data-field="quantity" data-id="${item.id}">
            <button type="button" class="px-2 py-1 text-slate-600 hover:bg-slate-100 rounded-r transition-colors" data-action="inc-qty" data-id="${item.id}" title="Increase Quantity">+</button>
          </div>
        </td>
        <td class="py-3 px-4 text-right">
          <div class="inline-flex items-center justify-end">
            <span class="text-xs text-slate-400 mr-1">₹</span>
            <input type="number" min="0" step="50" class="w-24 text-right text-sm py-1 px-2 border border-slate-300 rounded-md font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500" value="${unit}" data-field="unitCost" data-id="${item.id}">
          </div>
        </td>
        <td class="py-3 px-4 text-right font-semibold text-slate-900 text-sm font-mono">
          ${formatINR(subtotal)}
        </td>
        <td class="py-3 px-4 text-center">
          <button type="button" class="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors" data-action="delete-item" data-id="${item.id}" title="Remove Item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    // Update Summary Elements in DOM
    updateSummaryUI(totals);

    // Also update any elements on the Home Dashboard that show the budget
    updateDashboardBudgetCards(totals);
  }

  function updateSummaryUI(totals) {
    const elDirect = document.getElementById('budget-direct-total');
    const elContingency = document.getElementById('budget-contingency-amount');
    const elGrand = document.getElementById('budget-grand-total');
    const elPerDelegate = document.getElementById('budget-per-delegate');
    const elContingencyPercent = document.getElementById('budget-contingency-rate-select');
    const elFootfallInput = document.getElementById('budget-footfall-input');
    const elRevenueTotal = document.getElementById('budget-projected-revenue');
    const elNetBalance = document.getElementById('budget-net-balance');

    if (elDirect) elDirect.textContent = formatINR(totals.directTotal);
    if (elContingency) elContingency.textContent = formatINR(totals.contingencyAmount);
    if (elGrand) elGrand.textContent = formatINR(totals.grandTotal);
    if (elPerDelegate) elPerDelegate.textContent = formatINR(totals.costPerDelegate);
    if (elContingencyPercent) elContingencyPercent.value = contingencyRate.toString();
    if (elFootfallInput) elFootfallInput.value = expectedFootfall.toString();

    if (elRevenueTotal) {
      elRevenueTotal.textContent = formatINR(totals.totalProjectedIncome);
    }

    if (elNetBalance) {
      if (totals.netVariance >= 0) {
        elNetBalance.className = "text-emerald-700 font-bold font-mono";
        elNetBalance.textContent = `+${formatINR(totals.netVariance)} (Self-Sustaining)`;
      } else {
        elNetBalance.className = "text-amber-700 font-bold font-mono";
        elNetBalance.textContent = `${formatINR(totals.netVariance)} (Deficit)`;
      }
    }

    // Update Category Breakdown List
    const categoryContainer = document.getElementById('budget-category-breakdown');
    if (categoryContainer) {
      categoryContainer.innerHTML = '';
      Object.keys(totals.categoryTotals).forEach(cat => {
        const catAmount = totals.categoryTotals[cat];
        const percent = totals.directTotal > 0 ? ((catAmount / totals.directTotal) * 100).toFixed(1) : 0;
        
        const catRow = document.createElement('div');
        catRow.className = 'flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-0';
        catRow.innerHTML = `
          <span class="text-slate-600 font-medium truncate max-w-[200px]" title="${escapeHtml(cat)}">${escapeHtml(cat)}</span>
          <div class="text-right">
            <span class="font-semibold text-slate-800 font-mono">${formatINR(catAmount)}</span>
            <span class="text-slate-400 ml-1">(${percent}%)</span>
          </div>
        `;
        categoryContainer.appendChild(catRow);
      });
    }
  }

  function updateDashboardBudgetCards(totals) {
    const dashBudget = document.getElementById('dash-card-budget');
    if (dashBudget) {
      dashBudget.textContent = formatINR(totals.grandTotal);
    }
    const dashPerCapita = document.getElementById('dash-card-per-delegate');
    if (dashPerCapita) {
      dashPerCapita.textContent = `${formatINR(totals.costPerDelegate)} / delegate`;
    }
  }

  /**
   * Event Delegation for table input changes
   */
  function setupEventListeners() {
    const tableBody = document.getElementById('budget-table-body');
    if (tableBody) {
      tableBody.addEventListener('input', function (e) {
        const target = e.target;
        const id = target.getAttribute('data-id');
        const field = target.getAttribute('data-field');

        if (id && field) {
          const item = budgetItems.find(i => i.id === id);
          if (item) {
            let val = parseFloat(target.value);
            if (isNaN(val) || val < 0) val = 0;
            item[field] = val;
            saveBudgetToStorage();
            
            // Recompute row total directly
            const row = target.closest('tr');
            if (row) {
              const qty = Number(item.quantity) || 0;
              const unit = Number(item.unitCost) || 0;
              const subtotalCell = row.querySelector('td:nth-child(5)');
              if (subtotalCell) {
                subtotalCell.textContent = formatINR(qty * unit);
              }
            }
            // Update summary cards
            const totals = calculateTotals();
            updateSummaryUI(totals);
            updateDashboardBudgetCards(totals);
          }
        }
      });

      tableBody.addEventListener('click', function (e) {
        const btn = e.target.closest('button');
        if (!btn) return;

        const action = btn.getAttribute('data-action');
        const id = btn.getAttribute('data-id');
        if (!id) return;

        const item = budgetItems.find(i => i.id === id);
        if (!item) return;

        if (action === 'inc-qty') {
          item.quantity = (Number(item.quantity) || 0) + 1;
          saveBudgetToStorage();
          renderBudget();
        } else if (action === 'dec-qty') {
          if (Number(item.quantity) > 1) {
            item.quantity = Number(item.quantity) - 1;
            saveBudgetToStorage();
            renderBudget();
          }
        } else if (action === 'delete-item') {
          if (confirm(`Remove "${item.item}" from event budget?`)) {
            budgetItems = budgetItems.filter(i => i.id !== id);
            saveBudgetToStorage();
            renderBudget();
          }
        }
      });
    }

    // Add New Expense Form
    const addExpenseForm = document.getElementById('add-expense-form');
    if (addExpenseForm) {
      addExpenseForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const categoryInput = document.getElementById('new-item-category');
        const nameInput = document.getElementById('new-item-name');
        const qtyInput = document.getElementById('new-item-qty');
        const costInput = document.getElementById('new-item-cost');
        const notesInput = document.getElementById('new-item-notes');

        const category = categoryInput ? categoryInput.value.trim() : "General";
        const item = nameInput ? nameInput.value.trim() : "";
        const quantity = qtyInput ? parseInt(qtyInput.value, 10) : 1;
        const unitCost = costInput ? parseFloat(costInput.value) : 0;
        const notes = notesInput ? notesInput.value.trim() : "";

        if (!item) {
          alert("Please enter an item name.");
          return;
        }

        const newItem = {
          id: 'custom_' + Date.now(),
          category,
          item,
          quantity: isNaN(quantity) || quantity <= 0 ? 1 : quantity,
          unitCost: isNaN(unitCost) || unitCost < 0 ? 0 : unitCost,
          notes
        };

        budgetItems.push(newItem);
        saveBudgetToStorage();
        renderBudget();

        // Reset form
        addExpenseForm.reset();
        
        // Notify
        const notif = document.getElementById('budget-add-notification');
        if (notif) {
          notif.classList.remove('hidden');
          setTimeout(() => notif.classList.add('hidden'), 3000);
        }
      });
    }

    // Reset Button
    const resetBtn = document.getElementById('btn-reset-budget');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (confirm("Reset budget to proposed institutional default estimates for UDHAYAM 2027? Any custom items will be restored to default.")) {
          loadDefaultItems();
          contingencyRate = 0.10;
          expectedFootfall = 1200;
          saveBudgetToStorage();
          renderBudget();
        }
      });
    }

    // Contingency Selector
    const contingencySelect = document.getElementById('budget-contingency-rate-select');
    if (contingencySelect) {
      contingencySelect.addEventListener('change', function () {
        contingencyRate = parseFloat(this.value) || 0.10;
        saveBudgetToStorage();
        renderBudget();
      });
    }

    // Expected Footfall Input
    const footfallInput = document.getElementById('budget-footfall-input');
    if (footfallInput) {
      footfallInput.addEventListener('change', function () {
        const val = parseInt(this.value, 10);
        if (!isNaN(val) && val > 0) {
          expectedFootfall = val;
          saveBudgetToStorage();
          renderBudget();
        }
      });
    }
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

  // Public API
  window.BudgetManager = {
    init: function () {
      initBudget();
      setupEventListeners();
    },
    getTotals: calculateTotals,
    getItems: function () {
      return budgetItems;
    },
    formatINR: formatINR
  };
})();
