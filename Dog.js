
class Dog {
    constructor(data) {
        Object.assign(this, data);
     
    }

    renderReactionHTML(status){
        return status 
        ?   `<img id="like" src="images/badge-like.png" alt="">`
        :   `<img id="nope" src="images/badge-nope.png" alt="">`
    }

    renderEnding(stat){
            return `
            <div class="endMessage">
                 <h2>Yo, You loved ${stat}</h2>
                 <picture class="">
                     <img src="images/logo.png" alt="">
                 </picture>
             </div>
         `        
    }

    renderDogs(){
        const { name, avatar, age, bio } = this;

        return `
            <picture class="dog-img">
                <img src="${avatar}" alt="">
            </picture>
            <div class="description">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
            `;
    };
}


export default Dog;