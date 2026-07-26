(function () {
  const STORAGE_KEY = 'dhendeToolUsage';

  function readCounts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  }

  function saveCounts(counts) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
    } catch (error) {
      // Ignore storage errors silently.
    }
  }

  function formatCount(count) {
    return count === 1 ? 'Used 1 time' : `Used ${count} times`;
  }

  function renderCount(element, toolId) {
    if (!element) return;
    const counts = readCounts();
    const value = Number(counts[toolId] || 0);
    element.textContent = formatCount(value);
  }

  function bumpCount(toolId) {
    if (!toolId) return;
    const counts = readCounts();
    counts[toolId] = (counts[toolId] || 0) + 1;
    saveCounts(counts);
    document.querySelectorAll('[data-tool-count="' + toolId + '"]').forEach(function (node) {
      renderCount(node, toolId);
    });
  }

  function init() {
    document.querySelectorAll('[data-tool-count]').forEach(function (node) {
      const toolId = node.getAttribute('data-tool-count');
      renderCount(node, toolId);
    });

    document.querySelectorAll('[data-tool-id]').forEach(function (node) {
      node.addEventListener('click', function () {
        const toolId = this.getAttribute('data-tool-id');
        bumpCount(toolId);
      });
    });

    const pageToolId = document.body.getAttribute('data-tool-page-id');
    if (pageToolId) {
      bumpCount(pageToolId);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
