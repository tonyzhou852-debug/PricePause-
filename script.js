// Pricing toggle (monthly / yearly)
const planPrice = document.getElementById("planPrice");
const planPer = document.getElementById("planPer");

document.querySelectorAll(".toggle-opt").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".toggle-opt").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    if (btn.dataset.plan === "yearly") {
      planPrice.textContent = "$39.99";
      planPer.textContent = "/year";
    } else {
      planPrice.textContent = "$4.99";
      planPer.textContent = "/month";
    }
  });
});

// Demo waitlist form: validates the email and shows a thank-you message.
// Nothing is stored or sent anywhere. To collect real emails, see README.md.
const form = document.getElementById("waitlistForm");
const emailInput = document.getElementById("email");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!valid) {
    emailInput.classList.add("invalid");
    msg.textContent = "Please enter a valid email address.";
    return;
  }

  emailInput.classList.remove("invalid");
  msg.textContent = "You're on the list! (Demo only, no email was saved.)";
  form.reset();
});

// Pre-order dialog (demo): validates and shows a confirmation. Nothing is stored or charged.
const dialog = document.getElementById("preorderDialog");
const poForm = document.getElementById("preorderForm");
const poMsg = document.getElementById("preorderMsg");

document.querySelectorAll("[data-open-preorder]").forEach((btn) => {
  btn.addEventListener("click", () => {
    poMsg.textContent = "";
    // Pre-select the plan currently shown in the pricing toggle
    const active = document.querySelector(".toggle-opt.active");
    if (active) poForm.querySelector(`input[value="${active.dataset.plan}"]`).checked = true;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  });
});

document.getElementById("preorderCancel").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

poForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("poName");
  const mail = document.getElementById("poEmail");
  const okName = name.value.trim().length > 1;
  const okMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim());
  name.classList.toggle("invalid", !okName);
  mail.classList.toggle("invalid", !okMail);
  if (!okName || !okMail) {
    poMsg.textContent = "Please enter your name and a valid email.";
    return;
  }
  const plan = poForm.querySelector("input[name=plan]:checked").value;
  poMsg.textContent = `Thanks ${name.value.trim()}! Your ${plan} Premium pre-order is reserved. (Demo only: nothing saved, no payment taken.)`;
  poForm.reset();
});
