function LineNumerates(textarea, lineDIV) {
    const lines = textarea.value.split('\n');
    lineDIV.innerHTML = Array.from({length: lines.length}, (_, i) => `<div>${i+1}</div>`).join('');
};

let xml_text = document.getElementById("xmlInput");
let xml_lines = document.getElementById('lineNumXML');

let xslt_text = document.getElementById("xsltInput"); 
let xslt_lines = document.getElementById('lineNumXSLT');

xml_text.addEventListener('input',  () => LineNumerates(xml_text, xml_lines));
xml_text.addEventListener('scroll', () => {
  xml_lines.scrollTop = xml_text.scrollTop;
});

xslt_text.addEventListener('input', () => LineNumerates(xslt_text, xslt_lines));
xslt_text.addEventListener('scroll', () => {
  xslt_lines.scrollTop = xslt_text.scrollTop;
});

LineNumerates(xml_text, xml_lines);
LineNumerates(xslt_text, xslt_lines);
