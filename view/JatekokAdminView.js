import JatekAdminView from "./JatekAdminView.js";

class JatekokAdminView
{
    constructor(tomb, szuloElem)
    {
        szuloElem.html(`
        <div id="alapSor">
            <div class=elemekSorai>
            <p>ID</p>
            <p>Cím</p>
            <p>Platform</p>
            <p>Darab</p>
            <p>Szerkesztés</p>
            </div>
        </div>
        `)

        this.tablaElem = szuloElem.children("div:last-child");
        
        tomb.forEach(konyv => 
        {
            const jatekom = new JatekAdminView(konyv, this.tablaElem);
        });
    }
}
export default JatekokAdminView;