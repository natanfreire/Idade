function verificar() {

   var data = new Date()
   var ano  = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = '' 
       var img = document.createElement('img') 
       img.setAttribute('id', 'foto')





       if (fsex[0].checked) {
          genero = 'Homem'

          if (idade >= 0 && idade < 10) {
               // Criança
               img.setAttribute('src', 'menino.jpeg')

         
         
            } else if (idade >= 10 < 21) {
               // Jovem
               img.setAttribute('src', 'Jovem M.jpeg')

          } else if (idade < 50 ) {
               // Adulto
               img.setAttribute('src', 'homem adulto.jpeg')

          } else {
              // Idoso
              img.setAttribute('src', 'idoso.jpeg')

          }




       } else if (fsex[1].checked) {
          genero = 'Mulher'

          genero = 'Homem'

          if (idade >= 0 && idade < 10) {
               // Criança
               img.setAttribute('src', 'menina.jpeg')

         
         
            } else if (idade >= 10 < 21) {
               // Jovem
               img.setAttribute('src', 'Jovem F.jpeg')

          } else if (idade < 50 ) {
               // Adulto
               img.setAttribute('src', 'mulher adulta.jpeg')

          } else {
              // Idoso
              img.setAttribute('src', 'idosa.jpeg')

          }


       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
  
    } 

}