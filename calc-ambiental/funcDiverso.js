function Valor(tipo,vEvento) {
    var isNN = (navigator.appName.indexOf("Netscape")!=-1);
    var tecla = (isNN) ? vEvento.which : vEvento.keyCode;
    if (tipo == "D") {
        if (((tecla >= 48) && (tecla <= 57)) || (tecla == 46) || (tecla == 45) || (tecla == 8) || (tecla == 0)) {
            return tecla;
        }
        else {
            return false;
        }
    }
    else {
        if (((tecla >= 48) && (tecla <= 57)) || (tecla == 46) || (tecla == 45) || (tecla == 8) || (tecla == 0)) {
            return tecla;
        }
        else {
            return false;
        }
    }
}

function autoTab(input, e)  {
    var ind = 0;
    var isNN = (navigator.appName.indexOf("Netscape")!=-1);
    var keyCode = (isNN) ? e.which : e.keyCode;

    if(keyCode == 13){
        if (!isNN) {
            window.event.keyCode = 0;
        } 
        ind = getIndex(input);
        ind++;
        input.form[ind].focus();
        if (input.form[ind].type == 'text') {
            input.form[ind].select();
        }
    }

    function getIndex(input) {
        var index = -1, i = 0, found = false;
        while (i < input.form.length && index == -1)
            if (input.form[i] == input) {
                index = i;
                if (i < (input.form.length -1)) {
                    if (input.form[i+1].type == 'hidden') {
                        index++;
                    }
                    if (input.form[i+1].type == 'button' && input.form[i+1].id == 'tabstopfalse') {
                        index++;
                    }
                }
            }
            else
                i++;
        return index;
    }
}

function SairCampo(campo) {
    campo.value = campo.value.toUpperCase();
    campo.style.background = '#DCDCDC'
    if (campo.value != "") {
        if ((ProcString(campo.value,"'") != true) || (ProcString(campo.value,'"') != true)) {
            alert("Este campo nao aceita [''] e nem ['].")
            campo.focus()
        }
    }
}

function SairCampoEsp(campo) {
    campo.style.background = '#DCDCDC'
    if (campo.value != "") {
        if ((ProcString(campo.value,"'") != true) || (ProcString(campo.value,'"') != true)) {
            alert("Este campo nao aceita [''] e nem ['].")
            campo.focus()
        }
    }
}

function EntrarCampo(campo) {
    campo.style.background = '#FFFF99'
}

function ValidarDt(campo) {
    if (campo.value != "") {
        if (!ValidarData(campo.value)) {
           alert("Data invalida...") 
           campo.focus()
        }
    }
}

function ValidarData(data) {
    var resp=false,dia=parseFloat(data.substring(0,2)),mes=parseFloat(data.substring(3,5)),ano=parseFloat(data.substring(6))
    if (data.length == 10) {
        if ((parseFloat(data.substring(6)) >= 1000)) {
            if ((parseFloat(dia) >= 1) && (parseFloat(dia) <= 31)) {
                if ((parseFloat(data.substring(3,5)) >= 1) && (parseFloat(data.substring(3,5)) <= 12)) {
                    if ((mes == 2) && (dia > 28)) {
                        if (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)) {
                            if (dia == 29) {
                                resp = true
                            }
                        }
                    }
                    else {
                        resp = true
                    }
                }
            }
        }
    }
    return resp
}

function ValidarHora(hora) {
    var resp=false
    if (hora.length == 5) {
        if ((parseFloat(hora.substring(0,2)) >= 0) && (parseFloat(hora.substring(0,2)) <= 23)) {
            if ((parseFloat(hora.substring(3,5)) >= 0) && (parseFloat(hora.substring(3,5)) <= 59)) {
                resp = true
            }
        }
    }
    return resp
}

function ProcString(texto,carac) {
    var resp = false
    if (texto != "") {
        if (texto.indexOf(carac) < 0) {
            resp = true
        }
    }
    return resp
}

function Numerico(codigo,tipo) {
    var resp = false
    if (codigo != "") {
        for (i=0;i < codigo.length;i++) {
            if ((tipo == "I") || (tipo == "N")) {
                if ((codigo.substring(i,i+1) >= "0") && (codigo.substring(i,i+1) <= "9")) {
                    resp = true
                }
                else {
                    resp = false;
                    break;
                }
            }
            if (tipo == "D") {
                if (((codigo.substring(i,i+1) >= "0") && (codigo.substring(i,i+1) <= "9")) || (codigo.substring(i,i+1) == ".")) {
                    resp = true
                }
                else {
                    resp = false;
                    break;
                }
            }
        }
        if (resp == false) {
            if (tipo == "I") {
                alert("Campo invailido ! - Somente namero neste campo")
            }
        }
    }
    return resp
}

function FormatDec(expr, decplaces) {
    if (expr != "") {
        var str = "" + Math.round (eval(expr) * Math.pow(10,decplaces))
        while (str.length <= decplaces) {
            str = "0" + str
        }
       
        var decpoint = str.length - decplaces;
        
        if (decplaces > 0) {
            if (parseInt(str) >= 0) {
                return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length)
            }
            else {
                if (str.length == 3) {
                    return str.substring(0,decpoint) + "0." + str.substring(decpoint,str.length)
                }
                else {
                    return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length)
                }
            }
        }
        else {
            return str.substring(0,decpoint) + str.substring(decpoint,str.length)
        }
    }
    else {
        return ""
    }
}

function Mascara(src, mascara) {
	var campo = src.value.length;
	var saida = mascara.substring(0,1);
	var texto = mascara.substring(campo);
	if(texto.substring(0,1) != saida) {
	   src.value += texto.substring(0,1);
    }
}

function retDias(dataIni,dataFin) {
    var dias = 0;
    var dt1 = Date.parse(dataIni.substring(3,7)+dataIni.substring(0,3)+dataIni.substring(6));
    var dt2 = Date.parse(dataFin.substring(3,7)+dataFin.substring(0,3)+dataFin.substring(6));
    if (dt2 > dt1) {
        dias = (dt2-dt1)/86400000;
    }
    return dias;
}

function retColunas(texto,carac) {
    var colunas = new Array();
    col = 0;
    for (i=0;i<texto.length;i++) {
        if (texto.substring(i,texto.length).indexOf(carac) > 0) {
            colunas[col] = texto.substring(i,i+texto.substring(i,texto.length).indexOf(carac));
            col++;
            i = i + texto.substring(i,texto.length).indexOf(carac);
        }
    }
    return colunas;
}

function ReplStr(s,vLen) {
    resp="";
    while (resp.length < vLen) {
        resp = resp + s;
    }
    return resp;
}

function ZeroEsquerda(numero,qdeNum) {
    resultDados="";
    for (i=0;i<parseFloat(qdeNum)-numero.length;i++) {
        resultDados = resultDados + "0";
    }
    return resultDados+numero;
}

function Matriz(n) {
    this.length=n;
    for (var contador=1 ; contador <=n ; contador++) {
        this[contador]="";
    }
}

function openModal(pUrl, pTop, pLeft, pWidth, pHeight, tipo, pBarra) {
    if (window.showModalDialog) {
        if (tipo == 0) {
            return window.open(pUrl, "", "top=" + pTop +",left=" + pLeft + ",width=" + pWidth + ",height=" + pHeight + ",scrollbars=" + pBarra + ",status=yes");
        }
        else if (tipo == 1) {
            return window.showModalDialog(pUrl, window, "dialogTop:" + pTop + ";dialogLeft:" + pLeft + ";dialogWidth:" + pWidth + "px;dialogHeight:" + pHeight + "px;help:no;status:no;scroll:" + pBarra );
        }
    } else {
        try {
            opera.security.PrivilegeManager.enablePrivilege(
                "UniversalBrowserWrite");
            window.open(pUrl, "wndModal", "width=" + pWidth
                + ",height=" + pHeight + ",resizable=no,modal=yes");
            return true;
        }
        catch (e) {
            alert("Nao a possavel abrir janela modal nesse navegador.\nUtilize outro navegador.");
            return false;
        }
    }
}

function CalcEnergia(valor, qde) {
    indice = 0.096
    return (parseFloat(valor) * indice) / parseFloat(qde)
}

function CalcAgua(valor, qde) {
    indice = 0.058
    return (parseFloat(valor) * indice) / parseFloat(qde)
}

function CalcGas(valor, tipo, qde) {
    vl = 0
    if (tipo == "1") 
        vl = parseFloat(valor) * 2.2
    if (tipo == "2") 
        vl = parseFloat(valor) * 38.1225
    if (tipo == "3") {
        vl = 38.1225 / parseFloat(valor)
	}	
    return vl / parseFloat(qde)
}

function CalcPapel(valor, qde) {
    indice = 3.2043
    return (parseFloat(valor) * indice) / qde
}

function CalcResiduos(valor) {
    indice = 2.64
    return (parseFloat(valor) * indice)
}

function PegadaCarbono() {
    pegada = (
        ((parseFloat(document.calcAmbiental.energia.value.replace(",", "."))+
        parseFloat(document.calcAmbiental.agua.value.replace(",", "."))+
        parseFloat(document.calcAmbiental.gas.value.replace(",", ".")))*12)+
        parseFloat(document.calcAmbiental.papel.value.replace(",", "."))+
        ((parseFloat(document.calcAmbiental.residuos.value.replace(",", "."))+
        parseFloat(document.calcAmbiental.carros.value.replace(",", "."))+
        parseFloat(document.calcAmbiental.motos.value.replace(",", "."))+
        parseFloat(document.calcAmbiental.onibus.value.replace(",", "."))+
        parseFloat(document.calcAmbiental.metro.value.replace(",", ".")))*12)+
        parseFloat(document.calcAmbiental.aviao.value.replace(",", "."))
    ) / 1000
    arvores = pegada * 7.14
    document.calcAmbiental.pegada.value = FormatDec(pegada,1).replace(".", ",")
    document.calcAmbiental.arvores.value = FormatDec(arvores,0) 
}

String.Format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}

function utf8_encode(argString) {
    if (argString === null || typeof argString === 'undefined') {
        return '';
    }

    var string = (argString + ''); 
    var utftext = '',
            start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                    (c1 >> 6) | 192, (c1 & 63) | 128
                    );
        } else if ((c1 & 0xF800) != 0xD800) {
            enc = String.fromCharCode(
                    (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                    );
        } else { 
            if ((c1 & 0xFC00) != 0xD800) {
                throw new RangeError('Unmatched trail surrogate at ' + n);
            }
            var c2 = string.charCodeAt(++n);
            if ((c2 & 0xFC00) != 0xDC00) {
                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode(
                    (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                    );
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.slice(start, stringl);
    }

    return utftext;
}

function utf8_decode(str_data) {
    var tmp_arr = [],
            i = 0,
            ac = 0,
            c1 = 0,
            c2 = 0,
            c3 = 0,
            c4 = 0;

    str_data += '';

    while (i < str_data.length) {
        c1 = str_data.charCodeAt(i);
        if (c1 <= 191) {
            tmp_arr[ac++] = String.fromCharCode(c1);
            i++;
        } else if (c1 <= 223) {
            c2 = str_data.charCodeAt(i + 1);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
            i += 2;
        } else if (c1 <= 239) {
            c2 = str_data.charCodeAt(i + 1);
            c3 = str_data.charCodeAt(i + 2);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        } else {
            c2 = str_data.charCodeAt(i + 1);
            c3 = str_data.charCodeAt(i + 2);
            c4 = str_data.charCodeAt(i + 3);
            c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
            c1 -= 0x10000;
            tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
            tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
            i += 4;
        }
    }

    return tmp_arr.join('');
}