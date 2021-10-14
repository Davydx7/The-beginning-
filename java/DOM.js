
// alert( ol.class )
// for(let i = 0; i< document.body.children.length; i++) {
//     alert(document.body.children[i])
// }

// let table = document.querySelector('#table')
// for(let i=0; i < table.rows.length; i++){
//     table.rows[i].cells[i].style.backgroundColor = 'red'
// }

// console.dir(document.body)

// console.log(document.body.firstChild.tagName); //undefined
// console.log(document.body.firstChild.nodeName); // #text

// alert(document.body.innerHTML);
// document.body.innerHTML = '<b> The new BODY!'
// alert(document.body.innerHTML)
// setInterval(()=> table.hidden = !table.hidden, 1000);
// table.setAttribute('abb', 'gag')
// alert( table.getAttribute('abb'))

let user = {
    name: 'David',
    age: 22,
};

for(let div of document.querySelectorAll('div[show-info]')) {
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]
}

let ol = document.querySelector('#oli')
let liFirst = document.createElement('li')
liFirst.innerHTML = 'lower <strong>than</strong> good'
ol.prepend(liFirst);

ol.setAttribute('class', 'alert');

diva.before('<p>Hello</p>', document.createElement('hr'));
diva.insertAdjacentHTML('beforebegin', '<p>Hello</p>')

// setTimeout(() => {
//     diva.remove()
// }, 2000);

let diva2 = diva.cloneNode(true);
diva2.querySelector('p').innerHTML = 'Copied and change, haha';
diva.prepend(diva2)

// function getListContent() {
//     let fragment = new DocumentFragment();

//     for(let i=1; i<=3; i++) {
//         let li = document.createElement('li');
//         li.append(i);
//         fragment.append(li);
//     }

//     return fragment;
// };

// ol.append(getListContent());
console.log(diva)
function clear(elem) {
    // while(elem.firstChild) {
    //     elem.firstChild.remove();
    // };
    elem.innerHTML = ''
};

clear(diva.diva);

// let userInput = prompt('what?', '')

// while(userInput) {
//     let li = document.createElement('li')
//     li.textContent = userInput;
//     list.append(li)
//     userInput = prompt('what next?', '');
// }

let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
}

container = document.createElement('div')
list.before(container);

// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
// }

// function createTreeText(obj){
//     //standAlone recurive function
//     let li = '';
//     let ul;
//     for (let key in obj) {
//         li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }

//     if (li) {
//         ul = '<ul>' + li + '</ul>'
//     }

//     return ul || ''
// }

//OR

function createTree (container, obj) {
    container.append(createTreeDom(obj))
}

function createTreeDom(obj) {
    //if there's no children, then the call returns undefined
    // and the <ul> won't be created

    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul')

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        ul.append(li)

        let childrenUl = createTreeDom(obj[key]);

        if (childrenUl) {
            li.append(childrenUl);
        }
    }
    return ul;
}

createTree(container, data)

function numberIt(container, ) {
    let theList = document.querySelector()
}

//  x