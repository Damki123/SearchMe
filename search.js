let tagArr = [];
arr.forEach( e => {
    //  get the name of product and convert to uppercase...
    const h = e.name.toUpperCase();
    // get category of product
    const c = e.category.toUpperCase();
    // get norm of product
    const n = e.norm.toUpperCase();
    // create tag string from name, category and norm 
    let name = h.split(" ");
    let category =  c.split(" ");
    name.forEach(e => {
        tagArr.indexOf(e) === -1 ? tagArr.push(e).toUpperCase : false
    })
    category.forEach(e => {
        tagArr.indexOf(e) === -1 ? tagArr.push(e).toUpperCase : false
    })
    tagArr.indexOf(n) === -1 ? tagArr.push(n).toUpperCase : false
    // flatten tag array
    tagArr = tagArr.reduce(function(a, b){
        return a.concat(b);
    }, []);
})

document.querySelector('#formularz').addEventListener('submit', function(event) {
    event.preventDefault();
    //clear local storage
    localStorage.clear();
    input = document.querySelector('#searchInput').value.toUpperCase();
    //create empty input array
    let inputArr = [];
    // insert input value into inputArray after splitting
    inputArr.push(input.split(" "));
    // flatten input array
    inputArr = inputArr.reduce(function(a, b){
        return a.concat(b);
    }, []);
    // check each word for minimum of three characters, otherwise disregard it
    inputArr.forEach( e => {
        console.log(e)
        tagArr.forEach(el=>{            
            el.indexOf(e) > -1 ? localStorage.setItem(e, e) : console.log(e + ' nie wystepuje nigdzie')
        })       
    })
    // reload results page
    location.reload();
})


//  get all products from array, create list items and place them inside unordered list on page
window.onload = () => {    
    if(localStorage.length !== 0) {
        arr.forEach( el => {
            //helper function to create items on page
            const addItem = () => {
                const wrap = document.createElement('li');
                const itemName = document.createElement('h1');
                const itemNorm = document.createElement('p');
                itemName.innerText = el.name;
                itemNorm.innerText = el.norm;
                wrap.appendChild(itemName);
                wrap.appendChild(itemNorm);
                wrap.classList.add('listed')
                document.querySelector('#results').appendChild(wrap)
            } 
            // check if localStorage is empty
                Object.keys(localStorage).forEach(e=>{
                    const keyVal = e.toString().toUpperCase();
                    const nameVal = (el.name).toUpperCase();
                    const normVal = el.norm.toUpperCase();
                    const catVal = el.category.toUpperCase();        
                    (nameVal.indexOf(keyVal) > -1 || catVal.indexOf(keyVal) > -1 || normVal.indexOf(keyVal) > -1)
                    ? 
                        addItem()
                    : false;
                    })
        })
    }
    else{
        const wrap = document.createElement('li');
        const itemName = document.createElement('h1');
        itemName.innerText = "Niestety nie znalazłem wyników dla podanej frazy.";
        wrap.appendChild(itemName);
        document.querySelector('#results').appendChild(wrap)
    }
 }

/*  get name of the desired product after click
    and store it in local storage as activeItem */

setTimeout(() => {
    document.querySelectorAll('.listed').forEach( item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('h1').innerText;
            localStorage.setItem('activeItem', name);
            console.log(localStorage)
        })
    })
}, 300);