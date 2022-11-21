console.log('Sample JavaScript #7 HW #19');

function replaceCSSComments(s){
let reg = /[\s]*(\/\*[\s]*[\S]*[\s]*\*\/)/g
  return s.replaceAll(reg,"")
}

function replaceHTMLComments(s){
    reg = /(^<!--[ а-яА-ЯїіІЇєЄ\d]*?-->[\s]*)|(<!--[ а-яіёє\d]*?-->(?:[\s]*))/gi 
    return s.replaceAll(reg,"").trim();
}

function validateFileType(fileName){   
    return /.*(\.jp[e]?g$|\.png$)/i.test(fileName)
}

function checkYear(y){
    return /^[12]([09](?:[0-9][0-9])|1(?:[0]{2}))$/.test(+y)
} 

function checkEmail(eml){
    let reg = /^([\w\.-]+)@([-\w]+\.)+\w+$/i
    return reg.test(eml)
}

function checkDomainUrl(url){
    let reg = /^http[s]?\:\/\/([-\w]+\.)+\w+$/i
    return reg.test(url)
}

function createLinksFromDomains(text){
    let reg = /(http[s]?:\/\/)([-\w\.]+)/ig    
    if (text.match(reg)===null){return 'Incoming parameter "text" does not contain sites addresses'}
    return text.replace(reg, "<a href=\"$1$2\" target=\"_blank\">$2</a>")
}
