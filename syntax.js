function escapeHtml(str) {
  return str.replace(/&/g, "&")
            .replace(/</g, "<")
            .replace(/>/g, ">");
}

function setupSyntaxHighlighting(textareaId, codeBoxId, lineNumId) {
  const textarea = document.getElementById(textareaId);
  const codeBox = document.getElementById(codeBoxId);
  const lineNum = document.getElementById(lineNumId);

  if (!textarea || !codeBox) return;

  function updateHighlight() {
    const code = escapeHtml(textarea.value);
    const codeElement = codeBox.querySelector('code');
    
    if (codeElement) {
      codeElement.textContent = code;  
      hljs.highlightElement(codeElement);
    }

  }

  function syncScroll() {
    codeBox.scrollTop = textarea.scrollTop;
    codeBox.scrollLeft = textarea.scrollLeft;
  }

  textarea.addEventListener('input', updateHighlight);
  textarea.addEventListener('scroll', syncScroll);
  
  updateHighlight();
}

document.addEventListener('DOMContentLoaded', function() {
  setupSyntaxHighlighting('xmlInput', 'codeBoxXML', 'lineNumXML');
  setupSyntaxHighlighting('xsltInput', 'codeBoxXSLT', 'lineNumXSLT');
});
