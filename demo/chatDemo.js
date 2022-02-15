function getTime(date) {

    if( date === null || date === undefined) {
        date = new Date();
    }

    let ampm = 'PM';
    const year = date.getFullYear();
    const month = addZero( date.getMonth());
    const day = addZero( date.getDate());
    const hours = addZero( date.getHours());
    const minutes = addZero( date.getMinutes());
    const now = hours + ':' + minutes;


    if( parseInt(hours) <= 12  ) {
        ampm = 'AM';
    }
    return now + ' ' + ampm + ',' + ' ' + day + '/' + month + '/' + year;

}



function addZero(number){
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}



const message = document.getElementById('message');
console.log(message);

