// ===== DOM References =====
const panda = document.getElementById('panda');
const pupilLeft = document.getElementById('pupilLeft');
const pupilRight = document.getElementById('pupilRight');
const pawLeft = document.getElementById('pawLeft');
const pawRight = document.getElementById('pawRight');
const pandaMouth = document.getElementById('pandaMouth');

const tabSignIn = document.getElementById('tabSignIn');
const tabSignUp = document.getElementById('tabSignUp');
const tabIndicator = document.getElementById('tabIndicator');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const authCard = document.getElementById('authCard');

const successModal = document.getElementById('successModal');
const successTitle = document.getElementById('successTitle');
const successMessage = document.getElementById('successMessage');
const successBtn = document.getElementById('successBtn');

const floatingLeaves = document.getElementById('floatingLeaves');

// ===== State =====
let isPasswordFocused = false;
let currentTab = 'signin';

// ===== Floating Bamboo Leaves =====
function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');

  const size = Math.random() * 20 + 14;
  const leftPos = Math.random() * 100;
  const duration = Math.random() * 12 + 10;
  const delay = Math.random() * 8;
  const rotateDir = Math.random() > 0.5 ? 1 : -1;

  // Create bamboo leaf SVG
  const hue = Math.random() * 40 + 100; // Greens
  const opacity = Math.random() * 0.3 + 0.15;

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

  // Slight horizontal sway
  leaf.style.setProperty('--sway', `${rotateDir * (Math.random() * 80 + 20)}px`);

  floatingLeaves.appendChild(leaf);

  // Remove and recreate after animation cycle
  setTimeout(() => {
    leaf.remove();
    createLeaf();
  }, (duration + delay) * 1000);
}

// Create initial batch of leaves
for (let i = 0; i < 12; i++) {
  createLeaf();
}

// ===== Tab Switching =====
function switchTab(tab) {
  currentTab = tab;

  if (tab === 'signin') {
    tabSignIn.classList.add('active');
    tabSignUp.classList.remove('active');
    tabIndicator.classList.remove('right');
    signinForm.classList.add('active');
    signupForm.classList.remove('active');
    signinForm.style.animation = 'none';
    signinForm.offsetHeight; // Reflow
    signinForm.style.animation = 'formFadeIn 0.4s ease-out';
  } else {
    tabSignUp.classList.add('active');
    tabSignIn.classList.remove('active');
    tabIndicator.classList.add('right');
    signupForm.classList.add('active');
    signinForm.classList.remove('active');
    signupForm.style.animation = 'none';
    signupForm.offsetHeight; // Reflow
    signupForm.style.animation = 'formFadeIn 0.4s ease-out';
  }

  // Panda reaction
  pandaSurprise();
  setTimeout(() => pandaReset(), 600);
}

tabSignIn.addEventListener('click', () => switchTab('signin'));
tabSignUp.addEventListener('click', () => switchTab('signup'));

// ===== Panda Eye Tracking =====
function trackEyes(e) {
  if (isPasswordFocused) return;

  const pandaRect = panda.getBoundingClientRect();
  const pandaCenterX = pandaRect.left + pandaRect.width / 2;
  const pandaCenterY = pandaRect.top + pandaRect.height / 2;

  const angleX = (e.clientX - pandaCenterX) / window.innerWidth;
  const angleY = (e.clientY - pandaCenterY) / window.innerHeight;

  const maxMove = 4;
  const moveX = angleX * maxMove * 2;
  const moveY = angleY * maxMove;

  pupilLeft.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  pupilRight.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
}

document.addEventListener('mousemove', trackEyes);

// Track eyes to input being typed in
function trackEyesToInput(input) {
  if (isPasswordFocused) return;

  const inputRect = input.getBoundingClientRect();
  const pandaRect = panda.getBoundingClientRect();
  const pandaCenterX = pandaRect.left + pandaRect.width / 2;

  // Calculate text width to follow cursor within input
  const textLen = input.value.length;
  const charWidth = 8;
  const inputPadding = 44;
  const textEndX = inputRect.left + inputPadding + (textLen * charWidth);
  const clampedX = Math.min(textEndX, inputRect.right - 14);

  const angleX = (clampedX - pandaCenterX) / (window.innerWidth * 0.5);
  const maxMove = 5;
  const moveX = Math.max(-maxMove, Math.min(maxMove, angleX * maxMove * 3));
  const moveY = 3; // Look down at the form

  pupilLeft.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  pupilRight.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
}

// ===== Panda Expressions =====
function pandaCoverEyes() {
  isPasswordFocused = true;
  panda.classList.add('covering', 'shy');
  panda.classList.remove('happy', 'surprised');
  // Center eyes when covering
  pupilLeft.style.transform = 'translate(-50%, -50%)';
  pupilRight.style.transform = 'translate(-50%, -50%)';
}

function pandaUncoverEyes() {
  isPasswordFocused = false;
  panda.classList.remove('covering', 'shy');
}

function pandaHappy() {
  panda.classList.add('happy');
  panda.classList.remove('surprised', 'shy', 'covering');
}

function pandaSurprise() {
  panda.classList.add('surprised');
  panda.classList.remove('happy', 'shy');
}

function pandaWave() {
  panda.classList.add('wave', 'happy');
  panda.classList.remove('surprised', 'shy', 'covering');
  setTimeout(() => panda.classList.remove('wave'), 2000);
}

function pandaReset() {
  panda.classList.remove('happy', 'surprised', 'shy', 'wave');
  if (!isPasswordFocused) {
    panda.classList.remove('covering');
  }
}

// ===== Input Event Listeners =====
const allInputs = document.querySelectorAll('.form-input');
const passwordInputs = document.querySelectorAll('.password-input');

allInputs.forEach(input => {
  input.addEventListener('focus', () => {
    if (input.classList.contains('password-input')) {
      pandaCoverEyes();
    } else {
      pandaUncoverEyes();
      trackEyesToInput(input);
    }
    // Remove error state
    input.classList.remove('error');
  });

  input.addEventListener('blur', () => {
    if (input.classList.contains('password-input')) {
      pandaUncoverEyes();
    }
  });

  input.addEventListener('input', () => {
    if (!input.classList.contains('password-input')) {
      trackEyesToInput(input);
    }
    input.classList.remove('error');
  });
});

// ===== Toggle Password Visibility =====
document.querySelectorAll('.toggle-password').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = btn.getAttribute('data-target');
    const targetInput = document.getElementById(targetId);
    const eyeOpen = btn.querySelector('.eye-open');
    const eyeClosed = btn.querySelector('.eye-closed');

    if (targetInput.type === 'password') {
      targetInput.type = 'text';
      eyeOpen.style.display = 'none';
      eyeClosed.style.display = 'block';
      // Panda peeks
      pandaUncoverEyes();
      setTimeout(() => {
        if (targetInput.type === 'text' && document.activeElement === targetInput) {
          // Keep uncovered while text is visible
        }
      }, 100);
    } else {
      targetInput.type = 'password';
      eyeOpen.style.display = 'block';
      eyeClosed.style.display = 'none';
      // Panda covers eyes again
      if (document.activeElement === targetInput) {
        pandaCoverEyes();
      }
    }
  });
});

// ===== Particle Burst Effect =====
function createParticleBurst(x, y) {
  const colors = ['#4ade80', '#22d3ee', '#a855f7', '#f59e0b', '#f87171', '#38bdf8'];
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (360 / particleCount) * i;
    const distance = Math.random() * 120 + 60;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance;
    const size = Math.random() * 6 + 4;

    particle.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      --tx: ${tx}px;
      --ty: ${ty}px;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// ===== Ripple Effect on Button =====
function createRipple(e, button) {
  const ripple = button.querySelector('.btn-ripple');
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
  `;
}

// ===== Form Validation =====
function validateSignIn() {
  const username = document.getElementById('signinUsername');
  const password = document.getElementById('signinPassword');
  let valid = true;

  if (!username.value.trim()) {
    username.classList.add('error');
    valid = false;
  }

  if (!password.value.trim()) {
    password.classList.add('error');
    valid = false;
  }

  return valid;
}

function validateSignUp() {
  const name = document.getElementById('signupName');
  const email = document.getElementById('signupEmail');
  const username = document.getElementById('signupUsername');
  const password = document.getElementById('signupPassword');
  const confirmPassword = document.getElementById('signupConfirmPassword');
  let valid = true;

  [name, email, username, password, confirmPassword].forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      valid = false;
    }
  });

  if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
    confirmPassword.classList.add('error');
    valid = false;
  }

  return valid;
}

// ===== Form Submission =====
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateSignIn()) {
    pandaSurprise();
    setTimeout(pandaReset, 1000);
    return;
  }

  const btn = document.getElementById('signinBtn');
  const usernameVal = document.getElementById('signinUsername').value.trim();
  createRipple(e, btn);
  btn.classList.add('loading');

  // Save username and redirect to tracker
  setTimeout(() => {
    btn.classList.remove('loading');
    pandaHappy();
    pandaWave();

    // Particle burst from button
    const btnRect = btn.getBoundingClientRect();
    createParticleBurst(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2);

    // Save user info and redirect to expenditure tracker
    localStorage.setItem('pandaUser', usernameVal);
    setTimeout(() => {
      window.location.href = 'tracker.html';
    }, 600);
  }, 1500);
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateSignUp()) {
    pandaSurprise();
    setTimeout(pandaReset, 1000);
    return;
  }

  const btn = document.getElementById('signupBtn');
  createRipple(e, btn);
  btn.classList.add('loading');

  setTimeout(() => {
    btn.classList.remove('loading');
    pandaHappy();
    pandaWave();

    const btnRect = btn.getBoundingClientRect();
    createParticleBurst(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2);

    setTimeout(() => {
      successTitle.textContent = 'Account Created! 🎉';
      successMessage.textContent = 'Welcome to the Panda family!';
      showSuccessModal();
    }, 500);
  }, 1500);
});

// ===== Success Modal =====
function showSuccessModal() {
  successModal.style.display = 'flex';
  requestAnimationFrame(() => {
    successModal.classList.add('show');
  });
}

function hideSuccessModal() {
  successModal.classList.remove('show');
  setTimeout(() => {
    successModal.style.display = 'none';
    // Reset forms
    signinForm.reset();
    signupForm.reset();
    pandaReset();
  }, 400);
}

successBtn.addEventListener('click', hideSuccessModal);

successModal.addEventListener('click', (e) => {
  if (e.target === successModal) {
    hideSuccessModal();
  }
});

// ===== Keyboard Accessibility =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && successModal.classList.contains('show')) {
    hideSuccessModal();
  }
});

// ===== Smooth Focus Transitions =====
let focusTimeout;
allInputs.forEach(input => {
  input.addEventListener('focus', () => {
    clearTimeout(focusTimeout);
  });

  input.addEventListener('blur', () => {
    focusTimeout = setTimeout(() => {
      // Delayed check - if no other input is focused, reset panda
      if (!document.activeElement || !document.activeElement.classList.contains('form-input')) {
        pandaReset();
      }
    }, 150);
  });
});

// ===== Touch Support for Eye Tracking =====
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    trackEyes({ clientX: touch.clientX, clientY: touch.clientY });
  }
}, { passive: true });

// ===== Initial Animation =====
window.addEventListener('load', () => {
  // Small delay then panda waves hello
  setTimeout(() => {
    pandaWave();
    setTimeout(pandaReset, 2500);
  }, 800);
});

// ===== Social Button Hover Effects =====
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    pandaSurprise();
  });
  btn.addEventListener('mouseleave', () => {
    pandaReset();
  });
});
