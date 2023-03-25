const button$$ = document.querySelector('button');


const div1$$ = document.querySelector('.div1');
const div2$$ = document.querySelector('.div2');
const div3$$ = document.querySelector('.div3');
const div4$$ = document.querySelector('.div4');
const div5$$ = document.querySelector('.div5');
const div6$$ = document.querySelector('.div6');
const div7$$ = document.querySelector('.div7');
const div8$$ = document.querySelector('.div8');
const div9$$ = document.querySelector('.div9');
const div10$$ = document.querySelector('.div10');
const div11$$ = document.querySelector('.div11');
const div12$$ = document.querySelector('.div12');
const div13$$ = document.querySelector('.div13');
const div14$$ = document.querySelector('.div14');
const div15$$ = document.querySelector('.div15');
const div16$$ = document.querySelector('.div16');
const div17$$ = document.querySelector('.div17');
const div18$$ = document.querySelector('.div18');
const div19$$ = document.querySelector('.div19');
const div20$$ = document.querySelector('.div20');


const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
  
    const rbg = `rgb(${r},${g},${b})`;
    return rbg;
  };


const changeBackground = () => {
    const color1 = randomColor();
    const color2 = randomColor();
    const color3 = randomColor();
    const color4 = randomColor();
    const color5 = randomColor();
    const color6 = randomColor();
    const color7 = randomColor();
    const color8 = randomColor();
    const color9 = randomColor();
    const color10 = randomColor();
    const color11 = randomColor();
    const color12 = randomColor();
    const color13 = randomColor();
    const color14 = randomColor();
    const color15 = randomColor();
    const color16 = randomColor();
    const color17 = randomColor();
    const color18 = randomColor();
    const color19 = randomColor();
    const color20 = randomColor();


    div1$$.style.backgroundColor = color1;
    div2$$.style.backgroundColor = color2;
    div3$$.style.backgroundColor = color3;
    div4$$.style.backgroundColor = color4;
    div5$$.style.backgroundColor = color5;
    div6$$.style.backgroundColor = color6;
    div7$$.style.backgroundColor = color7;
    div8$$.style.backgroundColor = color8;
    div9$$.style.backgroundColor = color9;
    div10$$.style.backgroundColor = color10;
    div11$$.style.backgroundColor = color11;
    div12$$.style.backgroundColor = color12;
    div13$$.style.backgroundColor = color13;
    div14$$.style.backgroundColor = color14;
    div15$$.style.backgroundColor = color15;
    div16$$.style.backgroundColor = color16;
    div17$$.style.backgroundColor = color17;
    div18$$.style.backgroundColor = color18;
    div19$$.style.backgroundColor = color19;
    div20$$.style.backgroundColor = color20;


    
}

button$$.addEventListener('click', changeBackground)
  