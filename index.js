var typed = new Typed("#typed", {
  strings: ["Follow us on"],
  typeSpeed: 80,
  startDelay: 4300,
  loop: false,
});

const myTimeout = setTimeout(() => {
  UIkit.notification({
    message: " <span uk-icon='icon: warning'></span> We are under maintaince",
    status: "warning",
    pos: 'top-center',
    timeout: 2000,
  });
}, 7800);
