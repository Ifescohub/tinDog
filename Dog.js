
class Dog {
    constructor(data) {
        Object.assign(this, data);
        
    }

    getEnd(stat){
        
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