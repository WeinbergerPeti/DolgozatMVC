class JatekAdminView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        szuloElem.append(`
        <div class="elemekSorai">
            <p>${elem.id}</p>
            <p>${elem.cim}</p>
            <p>${elem.platform}</p>
            <p>${elem.db}</p>
            <button id="modosit${elem.id}">Módosít</button>
        <div>
        `)
        this.sorElem=szuloElem.children("div:last-child");
        this.modositElem=$(`#modosit${elem.id}`);

        this.modositElem.on("click", ()=>
        {
            this.kattintasTrigger("modosit");
        });

    }

    kattintasTrigger(esemenyNeve)
    {
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.id});
        window.dispatchEvent(esemeny);
    }
}
export default JatekAdminView;