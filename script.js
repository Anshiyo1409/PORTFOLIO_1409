document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});



  // ===== Modal JS starts here =====
  const projects = [
    {
      title: "AI-driven Object Finder App",
      description: "Uses AI and BLE to locate misplaced items. Detailed project info goes here...",
      tools: "AI, BLE, React, Firebase"
    },
    {
      title: "Smart Storage System",
      description: "Organizes items with AI-powered scanning. Detailed project info goes here...",
      tools: "AI, Sensors, React, Node.js"
    },
    {
      title: "Self-Organizing Storage Tray",
      description: "Robotic tray that arranges items automatically. Detailed project info goes here...",
      tools: "Robotics, Arduino, ESP32, React"
    }
  ];

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTools = document.getElementById("modalTools");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll("#projects .card a").forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      modalTitle.textContent = projects[index].title;
      modalDescription.textContent = projects[index].description;
      modalTools.textContent = projects[index].tools;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  // ===== Modal JS ends here =====

