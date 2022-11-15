import JatekAdminView from "./JatekAdminView.js";

class JatekokAdminView
{
    constructor(tomb, szuloElem)
    {
        szuloElem.html(`
        <div id="alapSor">
            <div class=elemekSorai>
            <h3>ID</h3>
            <h3>Cím</h3>
            <h3>Platform</h3>
            <h3>Darab</h3>
            <h3>Szerkesztés</h3>
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