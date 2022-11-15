class JatekModel
{
    #jatekokTomb=[];
    constructor()
    {

    }

    adatModosit(adat)
    {
        console.log("Modelben módosít",adat);
        console.log(this.#jatekokTomb[adat-1]);
        console.log(this.#jatekokTomb[adat-1].db--);
        // let csokkentes = this.#jatekokTomb[adat-1].db--;

        // console.log(csokkentes-1);
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
                this.adatModosit(jatek);
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }

}
export default JatekModel;