const gallery = document.querySelector(".gallery");
const tabs = [...gallery.querySelectorAll('[role="tab"]')];
const panels = [...gallery.querySelectorAll(".gallery-screen")];
const dialog = document.querySelector(".image-dialog");
const zoomButton = gallery.querySelector(".zoom-button");
let activeIndex = 0;

function selectScreen(index, focus = false) {
  activeIndex = index;
  tabs.forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    panels[i].hidden = i !== index;
  });
  if (focus) tabs[index].focus();
}

panels.forEach((panel, i) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", tabs[i].id);
  panel.tabIndex = 0;
});
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectScreen(i));
  tab.addEventListener("keydown", (event) => {
    const next = {
      ArrowRight: (i + 1) % tabs.length,
      ArrowLeft: (i + tabs.length - 1) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[event.key];
    if (next !== undefined) {
      event.preventDefault();
      selectScreen(next, true);
    }
  });
});
selectScreen(0);
gallery.querySelector(".gallery-toolbar").hidden = false;

if (typeof dialog.showModal === "function") {
  zoomButton.addEventListener("click", () => {
    const source = panels[activeIndex].querySelector("img");
    const target = dialog.querySelector("img");
    target.src = source.src;
    target.alt = source.alt;
    dialog.querySelector("h2").textContent =
      `HydroTwin — ${tabs[activeIndex].textContent}`;
    dialog.showModal();
    dialog.querySelector(".dialog-image-area").scrollLeft = 0;
  });
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
} else {
  zoomButton.hidden = true;
}
