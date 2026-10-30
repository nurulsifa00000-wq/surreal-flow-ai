
// ======================================
// SURREAL FLOW AI
// Main Dashboard Navigation
// Version 1.0
// ======================================

document.addEventListener("DOMContentLoaded", () => {

  const navButtons = document.querySelectorAll("[data-page]");
  const pages = document.querySelectorAll(".page");
  const pageTitle = document.getElementById("page-title");

  const pageNames = {
    dashboard: "Creative Dashboard",
    generator: "Story Generator",
    studio: "Scene Studio",
    continuity: "Continuity Control",
    projects: "My Projects",
    settings: "Settings"
  };

  function navigateToPage(pageId) {

    // Hide all pages
    pages.forEach(page => {
      page.classList.remove("active");
    });

    // Remove active navigation style
    navButtons.forEach(button => {
      button.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (!selectedPage) {
      console.warn("Page not found:", pageId);
      return;
    }

    selectedPage.classList.add("active");

    // Update page title
    if (pageTitle) {
      pageTitle.textContent = pageNames[pageId] || "Surreal Flow AI";
    }

    // Highlight selected navigation
    document.querySelectorAll(
      `.nav-item[data-page="${pageId}"]`
    ).forEach(button => {
      button.classList.add("active");
    });

    // Update browser page hash
    window.location.hash = pageId;
  }

  // Activate all navigation buttons
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetPage = button.dataset.page;
      navigateToPage(targetPage);
    });
  });

  // Restore page from URL hash
  const initialPage = window.location.hash.replace("#", "");

  if (pageNames[initialPage]) {
    navigateToPage(initialPage);
  } else {
    navigateToPage("dashboard");
  }

  // Handle browser back and forward
  window.addEventListener("hashchange", () => {
    const currentPage = window.location.hash.replace("#", "");

    if (pageNames[currentPage]) {
      navigateToPage(currentPage);
    }
  });

  console.log("Surreal Flow AI Dashboard Ready.");

});
