'use client'

import { useState } from "react";
import Dropdown from "../../components/elements/Dropdown";
import ModalDialog, { ModalDialogButtonProps } from "../../components/elements/ModalDialog";




export default function BasicElements() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const buttonsProps: ModalDialogButtonProps[] = [
        { label: "Ok", handler: () => setModalIsOpen(false), style: "primary" },
        { label: "Cancel", handler: () => setModalIsOpen(false) },
    ];

    return (
        <>
            <section>
                <h1>Basic elements</h1>
                <div className="mb-4">
                    <Dropdown />
                </div>
                <div className="mb-4">
                    <button onClick={() => setModalIsOpen(true)}>Open modal dialog </button>
                    <p>button in <strong>default</strong> style</p>
                </div>

                <div className="mb-4">
                    <button className="primary" onClick={() => setModalIsOpen(true)}>Open modal dialog</button>
                    <p>button in <strong>primary</strong> style</p>
                </div>

            </section>

            <ModalDialog title="Information" show={modalIsOpen} onClose={() => setModalIsOpen(false)} buttons={buttonsProps} level="info">
                <p>This is dialog body where user can read something to</p>
            </ModalDialog>
        </>

    )
}