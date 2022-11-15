import JatekModel from "../model/JatekModel.js";
import JatekAdminView from "../view/JatekAdminView.js";
import JatekokAdminView from "../view/JatekokAdminView.js";

class JatekController
{
    constructor()
    {
        const jatekModel = new JatekModel();
        jatekModel.adatBe("./adat.json", this.jatekAdatok);

        $(window).on("modosit", (event)=>
        {
            console.log("controllerben módosít", event.detail);
            jatekModel.adatModosit(event.detail);
        });


        // $(window).on("csokkentes", (event)=>
        // {
        //     console.log("platform módosít", event.detail);
        //     kosarModel.kosarba(event.detail);
        // });

    }

    jatekAdatok(tomb)
    {
        const szuloElem=$("main")
        new JatekokAdminView(tomb, szuloElem);
    }
    
}
export default JatekController;