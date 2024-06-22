function scrollMI(direction){
const Main1 = document.querySelection('.photo-Main1');
const scrollStep = 200;

if(direction === 'left'){
    Main1.scrollLeft -= scrollStep;
    } else if(
        direction === 'right'
    ){
        Main1.scrollLeft += scrollStep;
    }
}