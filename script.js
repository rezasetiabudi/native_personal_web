const data_exp = [{
        title: 'Support Engineer Part Time',
        company: 'PT. JULO Teknologi Finansial',
        duration: 'Oct 2019 – Dec 2019',
        desc: 'Monitoring resouce and service using datadog and grafana, check for crash with sentry and firebase crashlytics, fixing customer data error for temporary using python.'
    },
    {
        title: 'Frontend Engineer Internship',
        company: 'PT. Global Tiket Network',
        duration: 'Jun 2019 – Jul 2019',
        desc: 'Develop ReactJS component for internal apps ( dashboard / admin panel ) with ReactJS, which fetch data using GraphQL from endpoint.'
    }
]

const data_img = [{
    src: 'assets/skripsi.jpg',
    alt: 'laptop dan monitor',
    desc: 'skripsi di lab riset'
}, {
    src: 'assets/senja.jpg',
    alt: 'senja dan langit',
    desc: 'masa-masa penyusunan proposal'
}, {
    src: 'assets/takoyaki.jpg',
    alt: 'gerobak snack',
    desc: 'takoyaki'
}, {
    src: 'assets/bintaro.jpg',
    alt: 'gedung dan lampu merah',
    desc: 'bintaro'
}, {
    src: 'assets/krl.jpg',
    alt: 'didalam krl',
    desc: 'waktu setelah magang'
}, {
    src: 'assets/bw.jpg',
    alt: 'black and white',
    desc: 'black and white'
}, {
    src: 'assets/bintaro2.jpg',
    alt: 'gedung',
    desc: 'dikala lari pagi'
}]


// refetchProfile(){
console.log(data_exp[0].company)
let current = 0;

function render() {
    document.querySelector('.exp h2').innerHTML = data_exp[current].title;
    document.querySelectorAll('.exp span')[0].innerHTML = data_exp[current].company;
    document.querySelectorAll('.exp span')[1].innerHTML = data_exp[current].duration;
    document.querySelector('.exp p').innerHTML = data_exp[current].desc;
}

//content
let i = 0;
for (let data of data_img){
    // console.log(data);

    let parent = document.querySelector('#content');    
    let article = document.createElement("article");
    let img = document.createElement("img");
    let p = document.createElement("p");

    article.classList.add("card")
    img.setAttribute('src', data.src);
    p.innerHTML = data.desc;

    parent.appendChild(article);
    article.appendChild(img)
    article.appendChild(p)
    i+=1;
}
//close content

render();

button = document.querySelector('.exp .btn_next');
button.addEventListener("click", () => {
    current = current + 1 > data_exp.length-1 ? 0 : current + 1;
    render();
});