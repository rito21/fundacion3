document.addEventListener("DOMContentLoaded", () => {
  const freqButtons = document.querySelectorAll(".frequency-option");
  const freqInput = document.querySelector("input[name='frequency']");

  freqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      freqButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      if (freqInput) freqInput.value = btn.dataset.frequency || "";
    });
  });

  const amountButtons = document.querySelectorAll(".amount-btn");
  const customAmount = document.getElementById("custom-amount");

  amountButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      amountButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      if (customAmount) customAmount.value = btn.dataset.amount || "";
    });
  });

  if (customAmount) {
    customAmount.addEventListener("input", () => {
      amountButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
    });
  }
});
