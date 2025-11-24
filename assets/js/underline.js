// Lightweight randomness logic - no GSAP needed!
async function loadSymbolLibrary() {
  const symbolContainer = document.querySelector('.symbol-library');
  if (!symbolContainer) return;

  // Check if symbols are already loaded
  if (symbolContainer.querySelector('symbol')) {
    return;
  }

  try {
    const response = await fetch('assets/img/svg/underlines.svg');
    const svgText = await response.text();
    symbolContainer.innerHTML = svgText;
  } catch (error) {
    console.error('Failed to load SVG symbols:', error);
  }
}

async function initRandomUnderlines() {
  // Ensure symbols are loaded first
  await loadSymbolLibrary();
  
  const totalVariants = document.querySelectorAll(
    '.symbol-library symbol[id^="underline-"]'
  ).length;

  let nextIndex = Math.floor(Math.random() * totalVariants); // Random start

  // Helper function to draw the underline
  function drawUnderline(container, shouldAnimate = true) {
    const box = container.querySelector("[data-draw-line-box]");
    if (!box) return;

    // Get the symbol and clone its path
    const symbol = document.querySelector(`#underline-${nextIndex + 1}`);
    if (!symbol) return;
    
    const originalPath = symbol.querySelector("path");

    if (originalPath) {
      // Clone the path and remove hardcoded stroke color so CSS can control it
      const clonedPath = originalPath.cloneNode(true);
      clonedPath.removeAttribute('stroke');
      clonedPath.removeAttribute('fill');
      
      // Create a new SVG with the cloned path
      const svgHTML = `
        <svg viewBox="0 0 310 40" preserveAspectRatio="none">
          ${clonedPath.outerHTML}
        </svg>
      `;

      box.innerHTML = svgHTML;

      // Now we can properly access and measure the path
      const path = box.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        // Set precise dasharray and initial offset
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.setProperty("--path-length", length);
        
        // If animation is disabled, show immediately
        if (!shouldAnimate) {
          path.style.strokeDashoffset = 0;
          box.style.opacity = '1';
        } else {
          // Ensure opacity is visible
          box.style.opacity = '1';
          // Add a class to trigger CSS animation
          container.classList.add('underline-loading');
          // Use requestAnimationFrame to ensure DOM is ready before CSS applies
          requestAnimationFrame(() => {
            // Force a reflow to ensure CSS animation triggers
            void path.offsetWidth;
            // Ensure animation is applied
            if (!path.style.animation) {
              const root = getComputedStyle(document.documentElement);
              const speed = root.getPropertyValue('--speed').trim() || '0.24s';
              const speedValue = parseFloat(speed) * 2;
              path.style.animation = `drawIn ${speedValue}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
            }
          });
        }
      }
    }

    // Advance to next variant for next trigger (across all items)
    nextIndex = (nextIndex + 1) % totalVariants;
  }

  // Helper function to clear underline
  function clearUnderline(container, delay = 700) {
    const box = container.querySelector("[data-draw-line-box]");
    if (!box) return;
    
    // Check if this element uses scroll trigger - don't clear those automatically
    const triggers = (container.getAttribute("data-triggers") || "hover")
      .split(",")
      .map(t => t.trim().toLowerCase());
    
    // Only clear if it's not a scroll-only trigger
    if (triggers.includes("scroll") && triggers.length === 1) {
      return; // Don't auto-clear scroll-only triggers
    }
    
    setTimeout(() => {
      if (!container.matches(":hover") && document.activeElement !== container) {
        box.innerHTML = "";
      }
    }, delay);
  }

  // Process each element with data-draw-line
  document.querySelectorAll("[data-draw-line]").forEach((container) => {
    const box = container.querySelector("[data-draw-line-box]");
    if (!box) return;

    // Get trigger configuration from data attributes
    // Default: hover only. Options: hover, scroll, click, focus
    const triggers = (container.getAttribute("data-triggers") || "hover")
      .split(",")
      .map(t => t.trim().toLowerCase());

    // Hover trigger
    if (triggers.includes("hover")) {
      container.addEventListener("mouseenter", () => {
        drawUnderline(container, true);
      });

      // Don't clear on mouseleave - keep underlines visible
      // container.addEventListener("mouseleave", () => {
      //   clearUnderline(container);
      // });
    }

    // Click trigger
    if (triggers.includes("click")) {
      container.addEventListener("click", (e) => {
        e.preventDefault();
        drawUnderline(container, true);
        // Clear after animation completes
        setTimeout(() => {
          clearUnderline(container, 0);
        }, 2000);
      });
    }

    // Focus trigger (for accessibility)
    if (triggers.includes("focus")) {
      // Make element focusable if it isn't already
      if (!container.hasAttribute("tabindex")) {
        container.setAttribute("tabindex", "0");
      }

      container.addEventListener("focus", () => {
        drawUnderline(container, true);
      });

      container.addEventListener("blur", () => {
        clearUnderline(container);
      });
    }

    // Scroll into viewport trigger (Intersection Observer)
    if (triggers.includes("scroll")) {
      const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.3 // Trigger when 30% visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if should animate or show immediately
            const animateOnScroll = container.getAttribute("data-scroll-animate") !== "false";
            drawUnderline(container, animateOnScroll);
            
            // Optionally clear when out of view
            const clearOnLeave = container.getAttribute("data-scroll-clear") === "true";
            if (clearOnLeave) {
              observer.unobserve(entry.target);
            }
          } else if (container.getAttribute("data-scroll-clear") === "true") {
            // Clear when leaving viewport
            clearUnderline(container, 0);
          }
        });
      }, observerOptions);

      observer.observe(container);
    }

    // Collect elements that need load trigger
    if (triggers.includes("load")) {
      const delay = parseInt(container.getAttribute("data-load-delay") || "0", 10);
      // Store reference for later execution
      container.setAttribute('data-load-delay-value', delay);
    }
  });

  // Execute load triggers after a short delay to ensure everything is ready
  function executeLoadTriggers() {
    const loadElements = document.querySelectorAll("[data-draw-line][data-load-delay-value]");
    loadElements.forEach((container) => {
      const triggers = (container.getAttribute("data-triggers") || "hover")
        .split(",")
        .map(t => t.trim().toLowerCase());
      
      if (triggers.includes("load")) {
        const delay = parseInt(container.getAttribute("data-load-delay-value") || "0", 10);
        setTimeout(() => {
          drawUnderline(container, true);
        }, delay + 200);
      }
    });
  }

  // Execute load triggers after a short delay
  setTimeout(executeLoadTriggers, 100);
}

// Initialize immediately since script is at bottom of body
initRandomUnderlines();
  