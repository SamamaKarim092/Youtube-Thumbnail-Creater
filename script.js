function createCard(title,channelName,views,monthsOld,duration,imageSource) {
    let viewstr = '';
    if(viewstr<100000) {
        viewstr = views/100000 + 'K';
    } 
    else if (viewstr<1000000) {
        viewstr = views/1000000 + 'million';
    }
    else {
        viewstr = views/1000 + 'K';
    }

    
    let html = `<div class="card">
            <div class="image">
                <img src="${imageSource}">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channelName}  . ${viewstr} views . ${monthsOld} months ago</p>
            </div>
        </div>
`
document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + html
}

createCard('Dragon ball Sparking Zero Gameplay' , "Samama Karim" , "400000" , '3' , '07:21' , ' https://i.ytimg.com/vi/16_t8RjGEpU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDszgnRAduwGmJmQYLqYFRR1PJFbw')

createCard('The Future of AI with GOOGLE CEO (Sundar Pichai)' , "Tech News" , "1000000" , '5' , '17:25' , ' https://i.ytimg.com/vi/h3M4bm2EveM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsyUTPkRoy4SceYC2-aUkDdBchFw ')

createCard('I Tried Food From Every Country I’ve Played' , "Cristiano Ronaldo" , "10000000" , '1' , '08:02' , ' https://i.ytimg.com/vi/wL5wdyA5guU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAo5NYo8bVg8lazxKoNzkC_Mrvizg ')


