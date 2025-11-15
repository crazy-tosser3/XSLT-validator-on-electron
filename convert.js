let convert_button = document.getElementById("convertBtn");
let clear_button = document.getElementById("clearBtn");

convert_button.addEventListener('click', () => {
    let xml_text = document.getElementById("xmlInput").value;
    let xslt_text = document.getElementById("xsltInput").value; 

    let results_field = document.getElementById("result_field");


    try{
        const parser = new DOMParser();
        const xml_doc = parser.parseFromString(xml_text, "application/xml");
        const xslt_doc = parser.parseFromString(xslt_text, "application/xml");


        if(xml_doc.getElementsByTagName("parsererror").length < 0){
            results_field.textContent = "Ошибка прообразования xml полу пустое!!!";
            return;
        }

        if(xslt_doc.getElementsByTagName("parsererror").length < 0){
            results_field.textContent = "Ошибка прообразования xslt полу пустое!!!";
            return;
        }

        const xsltProcessor = new XSLTProcessor();

        xsltProcessor.importStylesheet(xslt_doc);

        const resultDoc = xsltProcessor.transformToDocument(xml_doc);
        const serrialize = new XMLSerializer();
        const resSTR = serrialize.serializeToString(resultDoc);

        results_field.textContent = resSTR;
        hljs.highlightElement(results_field);
    }catch(err){
        alert(err);
    }
    
})

clear_button.addEventListener('click', () => {
    let results_field = document.getElementById("result_field");
    let xml_text = document.getElementById("xmlInput");
    let xslt_text = document.getElementById("xsltInput");
    let xml_text_code = document.getElementById("codeBoxXML");
    let xslt_text_code = document.getElementById("codeBoxXSLT");

    let code_block_xml = xml_text_code.querySelector("code")
    let code_block_xslt = xslt_text_code.querySelector("code")


    code_block_xml.textContent = "";
    code_block_xslt.textContent = "";
    xml_text.value = "";
    xslt_text.value = "";
    results_field.textContent = "Результат здесь...";
});
