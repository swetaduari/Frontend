// ===== DOM References =====
const transactionForm = document.getElementById('transactionForm');
const txnDescription = document.getElementById('txnDescription');
const txnAmount = document.getElementById('txnAmount');
const txnType = document.getElementById('txnType');
const txnCategory = document.getElementById('txnCategory');
const txnDate = document.getElementById('txnDate');
const transactionList = document.getElementById('transactionList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const totalBalance = document.getElementById('totalBalance');
const logoutBtn = document.getElementById('logoutBtn');
const userName = document.getElementById('userName');
const deleteModal = document.getElementById('deleteModal');
const cancelDelete = document.getElementById('cancelDelete');
const confirmDelete = document.getElementById('confirmDelete');
const categoryChart = document.getElementById('categoryChart');
const floatingLeaves = document.getElementById('floatingLeaves');

// ===== State =====
let transactions = JSON.parse(localStorage.getItem('pandaTransactions')) || [];
let deleteTargetId = null;
let currentFilter = 'all';

// ===== Category Config =====
const categoryConfig = {
    food: { emoji: '🍔', name: 'Food & Dining', color: '#f59e0b' },
    transport: { emoji: '🚌', name: 'Transport', color: '#3b82f6' },
    shopping: { emoji: '🛍️', name: 'Shopping', color: '#ec4899' },
    entertainment: { emoji: '🎬', name: 'Entertainment', color: '#8b5cf6' },
    bills: { emoji: '📄', name: 'Bills & Utilities', color: '#ef4444' },
    health: { emoji: '💊', name: 'Health', color: '#10b981' },
    education: { emoji: '📚', name: 'Education', color: '#06b6d4' },
    salary: { emoji: '💰', name: 'Salary', color: '#4ade80' },
    freelance: { emoji: '💻', name: 'Freelance', color: '#22d3ee' },
    other: { emoji: '📦', name: 'Other', color: '#94a3b8' },
};

// ===== Init =====
function init() {
    // Set today's date as default
    txnDate.value = new Date().toISOString().split('T')[0];

    // Load user name
    const storedUser = localStorage.getItem('pandaUser');
    if (storedUser) {
        userName.textContent = storedUser;
    }

    renderTransactions();
    updateSummary();
    renderCategoryChart();
    createFloatingLeaves();
}

// ===== Floating Leaves =====
function createFloatingLeaves() {
    for (let i = 0; i < 8; i++) {
        createLeaf();
    }
}

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    const size = Math.random() * 18 + 12;
    const leftPos = Math.random() * 100;
    const duration = Math.random() * 14 + 10;
    const delay = Math.random() * 10;
    const hue = Math.random() * 40 + 100;
    const opacity = Math.random() * 0.25 + 0.1;

    leaf.innerHTML = `
    <svg width="${size}" height="${size * 2.4}" viewBox="0 0 20 48" fill="none">
      <path d="M10 0C10 0 0 12 0 24C0 36 10 48 10 48C10 48 20 36 20 24C20 12 10 0 10 0Z"
            fill="hsla(${hue}, 70%, 45%, ${opacity})" />
      <path d="M10 4L10 44" stroke="hsla(${hue}, 60%, 35%, ${opacity * 0.7})" stroke-width="0.8"/>
    </svg>
  `;

    leaf.style.cssText = `
    left: ${leftPos}%;
    width: ${size}px;
    height: ${size * 2.4}px;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;

    floatingLeaves.appendChild(leaf);
    setTimeout(() => {
        leaf.remove();
        createLeaf();
    }, (duration + delay) * 1000);
}

// ===== Save to LocalStorage =====
function saveTransactions() {
    localStorage.setItem('pandaTransactions', JSON.stringify(transactions));
}

// ===== Add Transaction =====
transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTxn = {
        id: Date.now(),
        description: txnDescription.value.trim(),
        amount: parseFloat(txnAmount.value),
        type: txnType.value,
        category: txnCategory.value,
        date: txnDate.value,
    };

    transactions.unshift(newTxn);
    saveTransactions();
    renderTransactions();
    updateSummary();
    renderCategoryChart();
    showToast('✅ Transaction added successfully!', 'success');

    // Reset form
    txnDescription.value = '';
    txnAmount.value = '';
    txnDate.value = new Date().toISOString().split('T')[0];
    txnDescription.focus();
});

// ===== Render Transactions =====
function renderTransactions() {
    const filtered = currentFilter === 'all'
        ? transactions
        : transactions.filter(t => t.type === currentFilter);

    if (filtered.length === 0) {
        transactionList.innerHTML = `
      <div class="empty-state">
        <span class="empty-panda">🐼</span>
        <p>${currentFilter === 'all' ? 'No transactions yet.<br>Start tracking your expenses!' : `No ${currentFilter} transactions found.`}</p>
      </div>
    `;
        return;
    }

    transactionList.innerHTML = filtered.map((txn, idx) => {
        const cat = categoryConfig[txn.category] || categoryConfig.other;
        const formattedDate = new Date(txn.date).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric'
        });
        const sign = txn.type === 'income' ? '+' : '-';

        return `
      <div class="transaction-item" style="animation-delay: ${idx * 0.05}s">
        <div class="txn-icon ${txn.type}">${cat.emoji}</div>
        <div class="txn-details">
          <div class="txn-description">${txn.description}</div>
          <div class="txn-meta">
            <span class="txn-category">${cat.name}</span>
            <span class="txn-dot"></span>
            <span class="txn-date">${formattedDate}</span>
          </div>
        </div>
        <span class="txn-amount ${txn.type}">${sign}₹${txn.amount.toFixed(2)}</span>
        <button class="txn-delete" onclick="promptDelete(${txn.id})" title="Delete">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `;
    }).join('');
}

// ===== Update Summary =====
function updateSummary() {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expense;

    animateNumber(totalIncome, income);
    animateNumber(totalExpense, expense);
    animateNumber(totalBalance, balance);
}

function animateNumber(element, target) {
    element.classList.add('amount-animate');
    element.textContent = `₹${target.toFixed(2)}`;
    setTimeout(() => element.classList.remove('amount-animate'), 400);
}

// ===== Category Chart =====
function renderCategoryChart() {
    const expenses = transactions.filter(t => t.type === 'expense');

    if (expenses.length === 0) {
        categoryChart.innerHTML = `
      <div class="empty-state">
        <span class="empty-panda">🐼</span>
        <p>No expenses yet.<br>Add a transaction to see your breakdown!</p>
      </div>
    `;
        return;
    }

    // Group by category
    const grouped = {};
    expenses.forEach(txn => {
        if (!grouped[txn.category]) grouped[txn.category] = 0;
        grouped[txn.category] += txn.amount;
    });

    const totalExpenses = Object.values(grouped).reduce((a, b) => a + b, 0);

    // Sort by amount
    const sorted = Object.entries(grouped).sort((a, b) => b[1] - a[1]);

    categoryChart.innerHTML = sorted.map(([cat, amount], idx) => {
        const config = categoryConfig[cat] || categoryConfig.other;
        const percent = (amount / totalExpenses) * 100;

        return `
      <div class="category-bar-item" style="--i: ${idx}">
        <span class="cat-emoji">${config.emoji}</span>
        <div class="cat-info">
          <div class="cat-header">
            <span class="cat-name">${config.name}</span>
            <span class="cat-amount">₹${amount.toFixed(2)} (${percent.toFixed(1)}%)</span>
          </div>
          <div class="cat-bar">
            <div class="cat-bar-fill" style="width: ${percent}%; background: ${config.color};"></div>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

// ===== Filter =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderTransactions();
    });
});

// ===== Delete Transaction =====
function promptDelete(id) {
    deleteTargetId = id;
    deleteModal.classList.add('show');
}

cancelDelete.addEventListener('click', () => {
    deleteModal.classList.remove('show');
    deleteTargetId = null;
});

confirmDelete.addEventListener('click', () => {
    if (deleteTargetId !== null) {
        transactions = transactions.filter(t => t.id !== deleteTargetId);
        saveTransactions();
        renderTransactions();
        updateSummary();
        renderCategoryChart();
        showToast('🗑️ Transaction deleted.', 'error');
    }
    deleteModal.classList.remove('show');
    deleteTargetId = null;
});

deleteModal.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
        deleteModal.classList.remove('show');
        deleteTargetId = null;
    }
});

// ===== Toast =====
function showToast(message, type = 'success') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== Logout =====
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('pandaUser');
    window.location.href = 'index.html';
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && deleteModal.classList.contains('show')) {
        deleteModal.classList.remove('show');
        deleteTargetId = null;
    }
});

// ===== Init on Load =====
window.addEventListener('DOMContentLoaded', init);
