function Enviar1(){
 
    var nome1 = document.getElementById("email");
	var nome2 = document.getElementById("senha");
 
    if (nome1.value != "") {
		if (nome2.value != "") {
			alert('Login realizado com sucesso');
		}
    }
}

function Enviar2() {
 
    var nome1 = document.getElementById("nome");
	var nome2 = document.getElementById("idade");
	var nome3 = document.getElementById("estado");
	var nome4 = document.getElementById("telefone");
	var nome5 = document.getElementById("cidade");
	var nome6 = document.getElementById("RG");
	var nome7 = document.getElementById("CEP");
	var nome8 = document.getElementById("CPF");
	var nome9 = document.getElementById("email");
	var nome10 = document.getElementById("senha");
	var nome11 = document.getElementById("comentario");
	
 
    if (nome1.value != "") {
        if (nome2.value != "") {
			if (nome3.value != "") {
				if (nome4.value != "") {
					if (nome5.value != "") {
						if (nome6.value != "") {
							if (nome7.value != "") {
								if (nome8.value != "") {
									if (nome9.value != "") {
										if (nome10.value != "") {
											if (nome11.value != "") {
												alert('Obrigado sr(a) ' + nome1.value + ' os seus dados foram encaminhados com sucesso');
	   
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
    }
}