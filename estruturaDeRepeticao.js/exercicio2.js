// criar function que diz se a imagem é paisagem ou não
const ePaisagem = (larg, alt) => larg>alt ? `é PAISAGEM` : `NÃO é PAISAGEM`

console.log(ePaisagem(14,9))