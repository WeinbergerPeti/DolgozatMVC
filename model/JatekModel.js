class JatekModel
{
    #jatekokTomb=[];
    constructor()
    {
        
    }

    adatModosit(adat, myCallBack)
    {
        this.#jatekokTomb[adat-1].db--;
       myCallBack(this.#jatekokTomb);
    }

    adatBe(vegpont, myCallBack) 
    {
        fetch(vegpont, 
        {
            method: 'GET',
            headers: 
            {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => 
            {
                this.#jatekokTomb = data.jatek;
                myCallBack(this.#jatekokTomb);
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }

}
export default JatekModel;