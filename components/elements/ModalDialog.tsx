
import { Fragment, ReactNode, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, CheckIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';
import { InformationCircleIcon } from '@heroicons/react/20/solid';


export type ModalDialogButtonProps = {
    label: string;
    focus?: boolean;
    style?: string
    handler: () => void;
}

export type ModalDialogProps = {
    title: string;
    children: ReactNode
    show: boolean;
    buttons?: ModalDialogButtonProps[];
    level: "success" | "error" | "warning" | "info"
    onClose: () => void;
}

export default function ModalDialog({ title, children, show, onClose, buttons, level }: ModalDialogProps) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className={classNames(
                                            "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
                                            { "bg-red-200": level === 'error' },
                                            { "bg-green-200": level === 'success' },
                                            { "bg-yellow-200": level === 'warning' },
                                            { "bg-cyan-200": level === 'info' })}>
                                            {level === 'success' ? <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" /> : null}
                                            {level === 'error' ? <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> : null}
                                            {level === 'warning' ? <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" /> : null}
                                            {level === 'info' ? <InformationCircleIcon className="h-6 w-6 text-cyan-600" aria-hidden="true" /> : null}
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                {title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                {children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                                    {
                                        buttons?.map((bp, i) => {
                                            return (
                                                <button key={`modal-button${i}`} type="button" className={bp.style} onClick={() => bp.handler()}>{bp.label}</button>
                                            )
                                        })
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
