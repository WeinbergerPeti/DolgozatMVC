import JatekModel from "../model/JatekModel.js";
import JatekokAdminView from "../view/JatekokAdminView.js";

class JatekController
{
    constructor()
    {
        const jatekModel = new JatekModel();
        jatekModel.adatBe("./adat.json", this.jatekAdatok);

        $(window).on("modosit", (event)=>
        {
            jatekModel.adatModosit(event.detail, this.jatekAdatok);
        });
    }

    jatekAdatok(tomb)
    {
        const szuloElem=$("main")
        new JatekokAdminView(tomb, szuloElem);
    }
    
}
export default JatekController;