import Dropdown from "../../components/elements/Dropdown";
import ModalDialog from "../../components/elements/ModalDialog";
import Dialog from "../../components/elements/ModalDialog";

export default function BasicElements() {
    return (
        <section>
            <h1>Basic elements</h1>
            <div >
                <Dropdown />
            </div>
            <div >
                <ModalDialog title="Attention this is a test">
                    <p>This is dialog body where user can read something about process and take a decision</p>
                </ModalDialog>
            </div>
        </section>
    )
}