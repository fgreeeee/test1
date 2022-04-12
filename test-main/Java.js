answer = 3
queshon = 1
res = 0

document.querySelectorAll(selectors ='.image img').forEach(callback = (el = Element, index = number) => {
    el.addEventListener(type = 'click', listener = () => {
        if (index === answer){
            el.parentNode.classList.add('image__success')
            res = res + 1
        }
        else{
            el.parentNode.classList.add('image__failure')
            document.querySelectorAll(selectors = '.image')[answer].classList.add('image__success')
        }
        document.querySelectorAll(selectors = '.image').forEach((e = Element) =>{
            e.style.pointerEvents = 'none'
        })
        document.querySelector(selectors = '.button').classList.add('button__active')
        queshon = queshon + 1
    })
})

document.querySelector(selectors = '.button').addEventListener(type = 'click', listener = () => {
    if (queshon == 2){
        document.querySelector(selectors = '.text div').textContent = 'Найдите крипа'
        answer = 3
    }
    else if (queshon == 3){
        document.querySelector(selectors = '.text div').textContent = '1000-7?'
        answer = 2
    }
    else if (queshon == 4){
        document.querySelector(selectors = '.text div').textContent = 'Кто из этих людей по праву считается самым красивым человеком планеты?'
        answer = 1
    }
    else if (queshon == 5){
        document.querySelector(selectors = '.text div').textContent = 'Ваш счет: ' + res + ' / ' + (queshon-1)
    }

    document.querySelector('.button').classList.remove('button__active')
    document.querySelectorAll('.image').forEach(callbackfn = (el = Element, index = number) => {
        el.style.pointerEvents = ''
        el.classList.remove('image__success')
        el.classList.remove('image__failure')
        el.querySelector('img').src = 'imgs/var_'+queshon+'_'+(index)+'.jpg'
    })


    document.getElementById('answer'+queshon).classList.add('link__active')
    document.getElementById('answer'+(queshon-1)).classList.remove('link__active')
})