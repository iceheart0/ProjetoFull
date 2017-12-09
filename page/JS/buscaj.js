Keyword = new Object();
Descrip = new Object();
Address = new Object();
Keyword[0] = 30
Keyword[1] = "mulher" , "mulheres"
Descrip[1] = "Taxa de mortalidade específica de mulheres de 10 a 19 anos (Adolescente)"
Address[1] = "conteudoMort10a19.html"
Keyword[2] = "mulher" , "mulheres"
Descrip[2] = "Taxa de mortalidade específica de mulheres de 20 a 59 anos"
Address[2] = "conteudoMort20a59.html"
Keyword[3] = "mulher" , "mulheres"
Descrip[3] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[3] = "conteudoCancUtero.html"
Keyword[4] = "mulher" , "mulheres"
Descrip[4] = "Prevenção e Tratamento de Câncer de Mama"
Address[4] = "conteudoCancMama.html"
Keyword[5] = "mulher" , "mulheres"
Descrip[5] = "Melhorar a saúde das gestantes"
Address[5] = "conteudoGest.html"
Keyword[6] = "mortalidade"
Descrip[6] = "Taxa de mortalidade específica de mulheres de 10 a 19 anos (Adolescente)"
Address[6] = "conteudoMort10a19.html"
Keyword[7] = "mortalidade"
Descrip[7] = "Taxa de mortalidade específica de mulheres de 20 a 59 anos"
Address[7] = "conteudoMort20a59.html"
Keyword[8] = "saude"
Descrip[8] = "Melhorar a saúde das gestantes"
Address[8] = "conteudoGest.html"
Keyword[9] = "saúde"
Descrip[9] = "Melhorar a saúde das gestantes"
Address[9] = "conteudoGest.html"
Keyword[10] = "gestante"
Descrip[10] = "Melhorar a saúde das gestantes"
Address[10] = "conteudoGest.html"
Keyword[11] = "gestantes"
Descrip[11] = "Melhorar a saúde das gestantes"
Address[11] = "conteudoGest.html"
Keyword[12] = "cancer"
Descrip[12] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[12] = "conteudoCancUtero.html"
Keyword[13] = "cancer"
Descrip[13] = "Prevenção e Tratamento de Câncer de Mama"
Address[13] = "conteudoCancMama.html"
Keyword[14] = "câncer"
Descrip[14] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[14] = "conteudoCancUtero.html"
Keyword[15] = "câncer"
Descrip[15] = "Prevenção e Tratamento de Câncer de Mama"
Address[15] = "conteudoCancMama.html"
Keyword[16] = "tratamento"
Descrip[16] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[16] = "conteudoCancUtero.html"
Keyword[17] = "tratamento"
Descrip[17] = "Prevenção e Tratamento de Câncer de Mama"
Address[17] = "conteudoCancMama.html"
Keyword[18] = "prevenção"
Descrip[18] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[18] = "conteudoCancUtero.html"
Keyword[19] = "prevenção"
Descrip[19] = "Prevenção e Tratamento de Câncer de Mama"
Address[19] = "conteudoCancMama.html"
Keyword[20] = "colo"
Descrip[20] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[20] = "conteudoCancUtero.html"
Keyword[21] = "utero"
Descrip[21] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[21] = "conteudoCancUtero.html"
Keyword[22] = "útero"
Descrip[22] = "Prevenção e Tratamento de Câncer de Colo do Útero"
Address[22] = "conteudoCancUtero.html"
Keyword[23] = "mama"
Descrip[23] = "Prevenção e Tratamento de Câncer de Mama"
Address[23] = "conteudoCancMama.html"
Keyword[24] = "taxa"
Descrip[24] = "Taxa de mortalidade específica de mulheres de 10 a 19 anos (Adolescente)"
Address[24] = "conteudoMort10a19.html"
Keyword[25] = "taxa"
Descrip[25] = "Taxa de mortalidade específica de mulheres de 20 a 59 anos"
Address[25] = "conteudoMort20a59.html"
Keyword[26] = "morte"
Descrip[26] = "Taxa de mortalidade específica de mulheres de 10 a 19 anos (Adolescente)"
Address[26] = "conteudoMort10a19.html"
Keyword[27] = "morte"
Descrip[27] = "Taxa de mortalidade específica de mulheres de 20 a 59 anos"
Address[27] = "conteudoMort20a59.html"

function checkDatabase() {
var Found = false
var Item = document.forms[0].pesquisa.value.toLowerCase();
stats='toolbar=no,location=no,directories=no,status=no,menubar=no,height=300,width=300,'
stats += 'scrollbars=yes,resizable=no'
MsgBox = window.open ("","msgWindow",stats)
MsgBox.opener = window;
MsgBox.opener.name = "opener";
MsgBox.document.write("<head><title>Resultado da Busca</title><style>body A:link {COLOR: #003366; TEXT-DECORATION: none} A:visited {COLOR: #003366; TEXT-DECORATION: none} A:active {COLOR: #003366; TEXT-DECORATION: none} A:hover {COLOR: #003366; TEXT-DECORATION: underline}</style></head>");
MsgBox.document.write ("<body bgcolor=white text=black link=blue vlink=darkblue alink=blue><CENTER><font face=Verdana, Arial, Helvetica, sans-serif size=2>Resultado da Busca</CENTER>")
MsgBox.document.write ("<font size=1><center>Busca por :  "+Item+"</center><hr width=80% size=1 color=#000000></font>");
for (var i=1; i <= Keyword[0]; i++) {
if(Item == Keyword[i]) {
Found = true;
MsgBox.document.write ("<li><font face=Verdana, Arial, Helvetica, sans-serif><font size=1>"+Descrip[i]+"<BR><A HREF="+Address[i]+" target='opener'>Click Aqui para Acessar</A></font></font>")
}
}
if(!Found)
MsgBox.document.write ("Nenhuma Ocorrência")
MsgBox.document.write ("<FORM><CENTER>")
MsgBox.document.write ("<font size=2><INPUT type='button' value='Fechar' onClick = 'self.close()' style='font-family:arial; font-size:9pt; color:black; background-color:#CCCCCC; border:black; border-style:groove; border-top-width:1px; border-bottom-width:1px; border-right-width:1px; border-left-width:1px'}></font></font>")
MsgBox.document.write ("</CENTER></FORM>")
MsgBox.document.write ("<font color=white><font face=Verdana, Arial, Helvetica, sans-serif><font size=1><font color=black><br></font>")
}