function seleccionarTodo() {
            for (let i=0; i < document.f1.elements.length; i++) {
                if(document.f1.elements[i].type === "radio") {
                    document.f1.elements[i].checked = true;
                }
            }
        }
    
        function desmarcarTodo() {
            for (let i=0; i<document.f1.elements.length; i++) {
                if(document.f1.elements[i].type == "radio") {
                    document.f1.elements[i].checked = false
                }
            }
        }
    
        function checkAll() {
            document.querySelectorAll('#formElement input[type=radio]').forEach(function(checkElement) {
                checkElement.checked = true;
            });
        }
    
        function uncheckAll() {
            document.querySelectorAll('#formElement input[type=radio]').forEach(function(checkElement) {
                checkElement.checked = false;
            });
        }