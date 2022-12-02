'use client'

import { useState } from "react";
import Dropdown from "../../components/elements/Dropdown";
import ModalDialog from "../../components/elements/ModalDialog";

export default function BasicElements() {

    // const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <section>
            <h1>Basic elements</h1>
            <h2>Basic elements h2</h2>
            <div >
                <Dropdown />
            </div>
            <div >
                <ModalDialog title="Attention this is a test" show={true}>
                    <p>This is dialog body where user can read something about process and take a decision</p>
                </ModalDialog>
            </div>
        </section>
    )
}