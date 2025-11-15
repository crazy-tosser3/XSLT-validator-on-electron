function tab_handler(textareaId){
    const textarea = document.getElementById(textareaId);

    if(!textarea) return;

    textarea.addEventListener('keydown', function(e){
        if(e.key === 'Tab'){
            e.preventDefault();

            const start = this.selectionStart;
            const end = this.selectionEnd;
            
            const value = this.value;
            this.value = value.substring(0, start) + '\t' + value.substring(end);
            
            this.selectionStart = this.selectionEnd = start + 1;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
  tab_handler('xmlInput');
  tab_handler('xsltInput');
});
