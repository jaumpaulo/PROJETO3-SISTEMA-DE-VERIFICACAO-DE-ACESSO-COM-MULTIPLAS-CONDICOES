let nome = prompt("Digite seu nome completo: ").toLowerCase ()
let idade = parseInt(prompt("Digite sua idade: "))

//da acesso ao admin
if (nome === "admin") {
    alert("Bem-vindo, Admin! Acesso total liberado.")
} //da acesso ao moderador
else if (nome === "moderador" && idade >= 16) {
    alert("Olá, Moderador! Acesso liberado para a área de moderação.")
} //da acesso pra maior de idade
else if (idade >= 18) {
    alert(`Olá, ${nome}! Você tem acesso completo. Boas-vindas à plataforma!`)
} //convite jovem arendiz
else if (idade >= 13 && idade <=17) {
    alert("Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!")
} //recusa acesso para menores de 13 e moderadores menores de 16
else {alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")}