function clear(){
    const div_list = document.querySelector('#first').getElementsByTagName('div');

    for(i=0;i<div_list.length;i++){
        div_list[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

function build(){
    const div1 = document.createElement('div');

    div1.setAttribute('id','first');
    div1.style.visibility = 'visible';

    const b = document.createElement('button');

    b.setAttribute('id','clear_button');
    b.setAttribute('type','button');
    b.innerHTML = 'Clear!';

    document.body.appendChild(div1);
    document.body.appendChild(b);
}

function construct_sketch(n){
    const div1 = document.querySelector('#first');

    for(i=1;i<=(n*n);i++){
        const div2 = document.createElement('div');
        div2.setAttribute('style','height: auto; width: auto; background-color: #fff; border: 1px solid #888;');
        
        div2.addEventListener('mouseover',function(event){
            let r = Math.random() * 255;
            let g = Math.random() * 255;
            let b = Math.random() * 255;
            
            let color = 'rgb(' + r + ',' + g + ',' + b + ')';
            
            let source = event.target || event.srcElement;
            
            if(source.style.backgroundColor == 'rgb(255, 255, 255)') source.style.backgroundColor = color;
        });

        div1.appendChild(div2);
    }

    let nb = 'auto';
    for(i=2;i<=n;i++) nb = nb.concat(' auto');

    let row = 'grid-template-rows: ';
    row = row.concat(nb);
    row = row.concat(';');

    let col = 'grid-template-columns: ';
    col = col.concat(nb);
    col = col.concat(';');

    let total = 'display: grid; margin: auto; height: 500px; width: 500px; border: 3px #444; ';
    total = total.concat(col);
    total = total.concat(' ');
    total = total.concat(row);

    div1.setAttribute('style',total);

    const b = document.querySelector('#clear_button');
    b.setAttribute('style','position: absolute; top:80%; left: 25%; margin: auto; height: 50px; width: 75px;');

    b.addEventListener('click',clear);
}



let n = prompt('Enter the size of the sketch:');

build();

construct_sketch(n);