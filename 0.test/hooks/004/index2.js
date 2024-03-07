let val = 0;
span.textContent = 0;
btn.onclick = (e) => {
  e.preventDefault();
  val++;
  span.textContent = val;
};
