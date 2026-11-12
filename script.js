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
