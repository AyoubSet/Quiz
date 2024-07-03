import Option from "../Option/Option";
import './Main.css'
function Main(){
    return (
        <div className="cont">
            <div className="v" id="v">
                <Option/>
            </div>
            <div className="v" id="y">
                <Option/>
            </div>
            <div className="v" id="o">
                <Option/>
            </div>
            <div className="v" id="r">
                <Option/>
            </div>
        </div>
    );
}
export default Main;