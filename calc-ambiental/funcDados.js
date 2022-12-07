function PesqEnergia(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/energia1.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Qual o seu consumo médio de energia por mês (em kWh) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/energia1.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "</div>", "Calculo da Energia Elétrica"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcEnergia(dados.val(), document.calcAmbiental.qde.value)
                        document.calcAmbiental.energia.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqAgua(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/image-agua.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Qual o seu consumo médio de água por mês (em m3) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/image-agua.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "</div>", "Calculo do Consumo de Água"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcAgua(dados.val(), document.calcAmbiental.qde.value)
                        document.calcAmbiental.agua.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqGas(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/gas3.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <select id='fTipo' name = 'fTipo'  onfocus='EntrarCampo(this)' onkeypress='autoTab(this, event)'> "
                + "            <option label='Eu utilizo gás encanado (gás natural) - m3 ' value='1'>Eu utilizo gás encanado (gás natural) - m3</option>"
                + "            <option label='Eu utilizo 01 (um) ou mais botijões de gás por mês - Nº de botijões' value='2'>Eu utilizo mais de 01 (um) ou mais botijões de gás por mês - Nº de Botijões</option>"
                + "            <option label='Eu utilizo 01 (um) botijão de gás por mais de 01 (um) mês - Nº de meses' value='3'>Eu utilizo 01 (um) botijão de gás por mais de 01 (um) mês - Nº de meses</option>"
                + "         </select>" + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/gas3.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "</div>", "Calculo do Consumo de Gás"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    tipo = $("#fTipo"),
                    allFields = $([]).add(dados).add(tipo);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 640,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcGas(dados.val(),tipo.val(), document.calcAmbiental.qde.value)
                        document.calcAmbiental.gas.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqPapel(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/image-papel.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Quantas resmas de papel (500 folhas) você utiliza por ano ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/image-papel.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "</div>", "Calculo do Consumo de Papel"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcPapel(dados.val(), document.calcAmbiental.qde.value)
                        document.calcAmbiental.papel.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqResiduos(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/resíduos-sólidos.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Qual a quantidade média de lixo gerado por mês (em kg) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/resíduos-sólidos.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "<center><b>OBS:</b> Caso não saiba, considere a média mensal de um brasileiro (30kg por mês)"
                + "</div>", "Calculo do Consumo de Residuos"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcResiduos(dados.val())
                        document.calcAmbiental.residuos.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqEletronicos(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/eletronicos.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Quantos eletrônicos você compra por ano (em kg) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/eletronicos.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "<center><b>OBS:</b> Caso não saiba, considere a média mensal de um brasileiro (30kg por mês)"
                + "</div>", "Calculo do Consumo de Eletrônicos"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcEletronicos(dados.val())
                        document.calcAmbiental.eletronicos.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqPlastico(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/plastic.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Qual a quantidade média de plástico gerado por mês (em kg) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/plastic.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "<center><b>OBS:</b> Caso não saiba, considere a média mensal de um brasileiro (30kg por mês)"
                + "</div>", "Calculo do Consumo de Plásticos"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcPlastico(dados.val())
                        document.calcAmbiental.plastico.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqVidro(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/vidro.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Qual a quantidade média de vidro gerado por mês (em kg) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/vidro.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "<center><b>OBS:</b> Caso não saiba, considere a média mensal de um brasileiro (30kg por mês)"
                + "</div>", "Calculo do Consumo de Vidro"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcVidro(dados.val())
                        document.calcAmbiental.vidro.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}

function PesqAluminio(obj) {
    var resp = false;
    if (!resp) {
        $("form").append(String.Format("<div id='dialog-confirm' title='{0}'>"
                + "<table border='0' cellpadding='2' cellspaceing='0'>"
                + "   <tr>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/aluminio.png' width='80' height='50'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         Qual a quantidade média de aluminio gerado por mês (em kg) ? " + "<br><br>"
                + "         <Input type='text' id='fDados' name='fDados' onFocus='EntrarCampo(this)' onBlur='SairCampo(this)' class='caixa_form' value = '0' maxlength='10' size='10'>"
                + "      </td>"
                + "      <td align='center' valign='middle'>"
                + "         <img src='img/aluminio.png' width='80' height='50'>"
                + "      </td>"
                + "</table>"
                + "<center><b>OBS:</b> Caso não saiba, considere a média mensal de um brasileiro (30kg por mês)"
                + "</div>", "Calculo do Consumo de Aluminio"));
        setTimeout(function () {
            var dados = $("#fDados"),
                    allFields = $([]).add(dados);
            $("#dialog-confirm").dialog({
                resizable: false,
                modal: true,
                draggable: false,
                width: 360,
                buttons: {
                    OK: function () {
                        $(this).dialog("close");
                        document.calcAmbiental.tDados.value = CalcAluminio(dados.val())
                        document.calcAmbiental.aluminio.value = FormatDec(document.calcAmbiental.tDados.value, 1).replace(".", ",")
                        MundoCarbono()
                        resp = true;
                    },
                }
            });
        }, 40)
    }
    return resp
}