let curPos = 0;
// 현제 보여주는 이미지의 인덱스 번호

let positionValue = 0;
// 이미지 테그의 위치 값 지정할 변수

const IMAGE_WIDTH = 640;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');

function next() {
    if(curPos < 5) {
        prevBtn.removeAttribute('disabled')
        positionValue -= IMAGE_WIDTH;
        // positionValue의 원래값 - IMAGE_WIDTH => 의 값을 다시 positionValue에 대입
        images.style.transform = `translateX(${positionValue}px)`;
        curPos += 1;
    } // 이동하게 만들어줘
    if(curPos === 5) {
        nextBtn.setAttribute('disabled', 'ture');
    }
}

function prev() {
    if(curPos > 0) {
        prevBtn.removeAttribute('disabled')
        positionValue += IMAGE_WIDTH;
        // positionValue의 원래값 - IMAGE_WIDTH => 의 값을 다시 positionValue에 대입
        images.style.transform = `translateX(${positionValue}px)`;
        curPos -= 1;
    } // 이동하게 만들어줘
    if(curPos === 0) {
        prevBtn.setAttribute('disabled', 'ture');
    }
}

function init() {
    prevBtn.setAttribute('disabled', 'true');
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
}
init();