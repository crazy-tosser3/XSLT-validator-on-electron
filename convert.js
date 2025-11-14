let convert_button = document.getElementById("convertBtn");

convert_button.addEventListener('click', function() {
    let xml_text = document.getElementById("xmlInput").value;
    let xslt_text = document.getElementById("xsltInput").value; 

    let results_field = document.getElementById("result_field")


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
    }catch(err){
        alert(err);
    }
    
})
