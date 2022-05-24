

/**
  *
  *	rolar()
  *	parar()
  *	popups_procurar()
  *	popups_clicar()
  *	popups_procurar_lixeira()
  *	popups_clicar_lixeira()
  *	popups_procurar_ocultar()
  *	popups_clicar_ocultar()
  *
  *
  */  










// FUNÇÃO PARA ROLAR PARA BAIXO
function rolar() {
	interval = setInterval(()=>{ window.scroll(0,(document.body.scrollHeight-1000)) },200);
}
// PARAR DE ROLAR PARA BAIXO
function parar() {
	clearInterval(interval);
}

// PROCURANDO TODOS OS BOTÕES COM POPUP-MENU
list=document.getElementsByTagName("div")
var list2 = [];
function popups_procurar() {
	for (el of list) { if (el.hasAttribute("aria-expanded")) {
		list2.push(el);
	} }
}
// EXPANDINDO TODOS OS POPUPS-MENUS
// intervalado
var len
let expand;
function popups_clicar() {
	len = list2.length-1;
	expand = setInterval(() => {
		if (len > 0) {
			list2[len].click();
			len--;
			console.log("click()");
		} else {
			clearInterval(expand);
			console.log("Todos expandidos!");
		}
	}, 200);
}
// instantaneo
function popups_clicar_insta() {
	for (el of list2) {
		el.click();
	}
}
// LOCALIZANDO TODOS OS BOTÕES 'Mover para Itens Arquivados' A PARTIR DO TEXTO.
var l4=[];
function popups_procurar_lixeira() {
	l4=[];
	l3 = document.getElementsByTagName("span")

	for (el of l3) {
		if (el.innerHTML.indexOf("Mover para Itens Arquivados") >= 0) {
			l4.push(el.parentElement.parentElement.parentElement.parentElement);
		}	
	}
}

// intervalado
//var len
function popups_clicar_lixeira() {
	len = l4.length-1;
	expand = setInterval(() => {
		if (len > 0) {
			l4[len].click();
			len--;
			console.log("click()");
		} else {
			clearInterval(expand);
			console.log("Todos ocultos!");
		}
	}, 200);
}
// instantaneo
function popups_clicar_lixeira_insta() {
	for (el of l4) {
		el.click()
	}	
}


// LOCALIZANDO TODOS OS BOTÕES 'Ocultar no perfil' A PARTIR DO TEXTO.
var l5=[];
function popups_procurar_ocultar() {
	l5=[];
	l3 = document.getElementsByTagName("span")
	for (el of l3) {
		if (el.innerHTML.indexOf("Ocultar no perfil") >= 0) {
			l5.push(el.parentElement.parentElement.parentElement.parentElement);
		}	
	}
}
// intervalado
var len = l5.length-1;
function popups_clicar_ocultar() {
	expand = setInterval(() => {
		if (len > 0) {
			l5[len].click();
			len--;
			console.log("click()");
		} else {
			clearInterval(expand);
			console.log("Todos ocultos!");
		}
	}, 200);
}
