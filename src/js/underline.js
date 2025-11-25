/**
 * Modus Underline - Animated SVG Underline Library
 * Lightweight randomness logic - no GSAP needed!
 */

// Embedded SVG symbols - automatically injected into DOM
const SVG_SYMBOLS = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="underline-1" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="M5 20.9999C26.7762 16.2245 49.5532 11.5572 71.7979 14.6666C84.9553 16.5057 97.0392 21.8432 109.987 24.3888C116.413 25.6523 123.012 25.5143 129.042 22.6388C135.981 19.3303 142.586 15.1422 150.092 13.3333C156.799 11.7168 161.702 14.6225 167.887 16.8333C181.562 21.7212 194.975 22.6234 209.252 21.3888C224.678 20.0548 239.912 17.991 255.42 18.3055C272.027 18.6422 288.409 18.867 305 17.9999" />
    </symbol>
    <symbol id="underline-2" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="M5 24.2592C26.233 20.2879 47.7083 16.9968 69.135 13.8421C98.0469 9.5853 128.407 4.02322 158.059 5.14674C172.583 5.69708 187.686 8.66104 201.598 11.9696C207.232 13.3093 215.437 14.9471 220.137 18.3619C224.401 21.4596 220.737 25.6575 217.184 27.6168C208.309 32.5097 197.199 34.281 186.698 34.8486C183.159 35.0399 147.197 36.2657 155.105 26.5837C158.11 22.9053 162.993 20.6229 167.764 18.7924C178.386 14.7164 190.115 12.1115 201.624 10.3984C218.367 7.90626 235.528 7.06127 252.521 7.49276C258.455 7.64343 264.389 7.92791 270.295 8.41825C280.321 9.25056 296 10.8932 305 13.0242" />
    </symbol>
    <symbol id="underline-3" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014" />
    </symbol>
    <symbol id="underline-4" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892" />
    </symbol>
    <symbol id="underline-5" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998" />
    </symbol>
    <symbol id="underline-6" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025" />
    </symbol>
    <symbol id="underline-7" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="m21 40 64-10c29-4 59-10 89-9 21 2 6 20 14 11 3-4 107-9 133-3" />
    </symbol>
    <symbol id="underline-8" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="m21 40 64-10c29-4 59-10 89-9 21 2-56 26-48 17 3-4 80-10 92-12 34-5 69-4 103 3" />
    </symbol>
    <symbol id="underline-9" viewBox="0 0 310 40" preserveAspectRatio="none">
        <path fill="none" stroke="#e55050" stroke-width="10" d="m21 40 35-8c29-4 56-12 86-11 21 2-56 26-48 17 3-4 112-10 124-12 3-1 7 12 11 11 4 0 9-14 13-14 26-2 53 0 79 6" />
    </symbol>
</svg>`;

/**
 * Load SVG symbol library - automatically creates container if it doesn't exist
 * @param {string} svgPath - Path to SVG symbols file (optional, uses embedded if not provided)
 * @param {string} containerSelector - Selector for symbol container
 */
async function loadSymbolLibrary(svgPath = null, containerSelector = '.symbol-library') {
  let symbolContainer = document.querySelector(containerSelector);
  
  // Automatically create container if it doesn't exist
  if (!symbolContainer) {
    symbolContainer = document.createElement('div');
    symbolContainer.className = containerSelector.replace('.', '');
    symbolContainer.style.display = 'none';
    document.body.appendChild(symbolContainer);
  }

  // Check if symbols are already loaded
  if (symbolContainer.querySelector('symbol')) {
    return;
  }

  // Use embedded SVG if no custom path provided, otherwise fetch from URL
  if (svgPath) {
    try {
      const response = await fetch(svgPath);
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.statusText}`);
      }
      const svgText = await response.text();
      symbolContainer.innerHTML = svgText;
    } catch (error) {
      console.error('Failed to load SVG symbols from URL, using embedded symbols:', error);
      symbolContainer.innerHTML = SVG_SYMBOLS;
    }
  } else {
    // Use embedded SVG symbols
    symbolContainer.innerHTML = SVG_SYMBOLS;
  }
}

// Store initialized elements and their context for manual triggering
const initializedElements = new Map();

/**
 * Initialize random underlines
 * @param {Object} options - Configuration options
 * @param {string} options.svgPath - Path to SVG symbols file
 * @param {string} options.containerSelector - Selector for symbol container
 */
async function initRandomUnderlines(options = {}) {
  const {
    svgPath = null, // null = use embedded SVG, string = fetch from URL
    containerSelector = '.symbol-library'
  } = options;

  // Ensure symbols are loaded first (automatically creates container if needed)
  await loadSymbolLibrary(svgPath, containerSelector);
  
  const totalVariants = document.querySelectorAll(
    `${containerSelector} symbol[id^="underline-"]`
  ).length;

  if (totalVariants === 0) {
    console.warn('No underline symbols found. Make sure SVG symbols are loaded.');
    return;
  }

  let nextIndex = Math.floor(Math.random() * totalVariants); // Random start
  const containerSelectorRef = containerSelector; // Store for manual triggers

  // Helper function to draw the underline
  function drawUnderline(container, shouldAnimate = true) {
    // Ensure box exists (should always exist after initialization, but check anyway)
    const box = container.querySelector("[data-draw-line-box]");
    if (!box) return;

    // Get the symbol and clone its path
    const symbol = document.querySelector(`${containerSelectorRef} #underline-${nextIndex + 1}`);
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
              const speed = root.getPropertyValue('--underline-speed').trim() || '0.24s';
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
    // Store element reference and wrapper function for manual triggering
    initializedElements.set(container, { 
      drawUnderline: (shouldAnimate = true) => drawUnderline(container, shouldAnimate),
      clearUnderline: () => {
        const box = container.querySelector("[data-draw-line-box]");
        if (box) box.innerHTML = "";
      }
    });
    // Auto-generate the inner span if it doesn't exist
    let box = container.querySelector("[data-draw-line-box]");
    if (!box) {
      box = document.createElement('span');
      box.setAttribute('data-draw-line-box', '');
      box.className = 'underline-svg';
      
      // Insert before the text content
      const textNode = container.firstChild;
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        container.insertBefore(box, textNode);
      } else {
        container.insertBefore(box, container.firstChild);
      }
    }

    // Get trigger configuration from data attributes
    // Default: hover only. Options: hover, scroll, click, focus, load
    const triggers = (container.getAttribute("data-triggers") || "hover")
      .split(",")
      .map(t => t.trim().toLowerCase());

    // Hover trigger
    if (triggers.includes("hover")) {
      container.addEventListener("mouseenter", () => {
        drawUnderline(container, true);
      });
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
            // Get scroll delay if specified
            const scrollDelay = parseInt(container.getAttribute("data-scroll-delay") || "0", 10);
            
            // Check if should animate or show immediately
            const animateOnScroll = container.getAttribute("data-scroll-animate") !== "false";
            
            // Apply delay if specified
            setTimeout(() => {
              drawUnderline(container, animateOnScroll);
            }, scrollDelay);
            
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

/**
 * Manually trigger underline animation on an element
 * @param {string|HTMLElement} selector - CSS selector or DOM element with data-draw-line attribute
 * @param {Object} options - Options for triggering
 * @param {boolean} options.animate - Whether to animate (default: true)
 * @returns {boolean} - Returns true if trigger was successful, false otherwise
 */
function triggerUnderline(selector, options = {}) {
  const { animate = true } = options;
  
  // Get element if selector is a string, otherwise use directly
  const element = typeof selector === 'string' 
    ? document.querySelector(selector) 
    : selector;
  
  if (!element) {
    console.warn(`Element not found: ${selector}`);
    return false;
  }
  
  if (!element.hasAttribute('data-draw-line')) {
    console.warn('Element must have data-draw-line attribute');
    return false;
  }
  
  // Check if element was initialized
  const elementData = initializedElements.get(element);
  if (!elementData) {
    console.warn('Element not initialized. Make sure initRandomUnderlines() has been called.');
    return false;
  }
  
  // Trigger the underline
  elementData.drawUnderline(animate);
  return true;
}

/**
 * Manually clear underline from an element
 * @param {string|HTMLElement} selector - CSS selector or DOM element with data-draw-line attribute
 * @returns {boolean} - Returns true if clear was successful, false otherwise
 */
function clearUnderlineManual(selector) {
  // Get element if selector is a string, otherwise use directly
  const element = typeof selector === 'string' 
    ? document.querySelector(selector) 
    : selector;
  
  if (!element) {
    console.warn(`Element not found: ${selector}`);
    return false;
  }
  
  if (!element.hasAttribute('data-draw-line')) {
    console.warn('Element must have data-draw-line attribute');
    return false;
  }
  
  // Check if element was initialized
  const elementData = initializedElements.get(element);
  if (!elementData) {
    console.warn('Element not initialized. Make sure initRandomUnderlines() has been called.');
    return false;
  }
  
  // Clear the underline
  const box = element.querySelector("[data-draw-line-box]");
  if (box) {
    box.innerHTML = "";
  }
  return true;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    initRandomUnderlines, 
    loadSymbolLibrary,
    triggerUnderline,
    clearUnderlineManual
  };
}

// Make functions available globally for script tag usage
if (typeof window !== 'undefined') {
  window.ModusUnderline = {
    initRandomUnderlines,
    loadSymbolLibrary,
    triggerUnderline,
    clearUnderline: clearUnderlineManual
  };
}

// Auto-initialize if script is loaded directly (not as module)
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", () => initRandomUnderlines());
  } else {
    initRandomUnderlines();
  }
}

