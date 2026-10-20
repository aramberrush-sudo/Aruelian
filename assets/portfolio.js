document.querySelectorAll('[data-comparison]').forEach((comparison) => {
  const control = comparison.querySelector('.comparison-control');
  const slider = control.querySelector('input');
  const output = control.querySelector('output');
  const update = () => {
    comparison.style.setProperty('--reveal', `${slider.value}%`);
    slider.setAttribute('aria-valuetext', `${slider.value}% before reference visible`);
    output.value = `${slider.value}% before`;
  };
  comparison.classList.add('is-ready');
  control.hidden = false;
  slider.addEventListener('input', update);
  update();
});
