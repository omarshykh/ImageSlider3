var index = 1;
var index2;
var index3;
var slidesVar = document.getElementsByClassName('slides');
slides(index);

function slides(ind) {
    
    if (ind > slidesVar.length) {
        index = 1;
    }
    if (ind < 1) {
        index = slidesVar.length;
    }
    index2= index +1;
    if (index2 > slidesVar.length) {
        index2 = 1;
    }
    if (index2 < 1) {
        index2 = slidesVar.length;
    }
    index3= index2 +1;
    if (index3 > slidesVar.length) {
        index3 = 1;
    }
    if (index3 < 1) {
        index3 = slidesVar.length;
    }
    for (var i = 0; i < slidesVar.length; i++) {
        slidesVar[i].style.display = 'none';
    }
    // console.log(index - 1)
    slidesVar[index - 1].style.display = 'block';
    slidesVar[index2 - 1].style.display = 'block';
    slidesVar[index3 - 1].style.display = 'block';
    slidesVar[index - 1].style.left = '0%';
    slidesVar[index2 - 1].style.left = '33.45%';
    slidesVar[index3 - 1].style.left = '66.75%';
    callOpacity(index,index3);

}
function incrementIndex() {
    nocallOpacity(index,index3);
    index++;
    slides(index)
}

function decrementIndex() {
    nocallOpacity(index,index3);
    index--;
    slides(index)
}
//setInterval(incrementIndex, 1000)

function callOpacity(ind1,ind2){
    slidesVar[ind1 - 1].style.opacity = '0.2';
    slidesVar[ind2 - 1].style.opacity = '0.2';
}
function nocallOpacity(ind1,ind2){
    slidesVar[ind1 - 1].style.opacity = '1';
    slidesVar[ind2 - 1].style.opacity = '1';
}