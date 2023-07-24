import { useState } from "react";
import { FaMinus } from "react-icons/fa";

const Modal = () => {
    const [modal, setModal] = useState(false);
    const [alltext, SetAlltext] = useState(false)
    return (
        <div>
            <div className="text-center">
                <button onClick={() => { setModal(true) }} className="btn w-52 mx-auto mt-80">Open Modal</button>
            </div>
            {
                modal &&


                <div className="absolute top-32 left-1/4 right-1/4 w-2/4 text-center  text-white h-[70vh]  overflow-x-auto bg-black bg-opacity-75 rounded-md ">
                    <button
                        onClick={() => { setModal(false) }}
                        className="absolute top-4 right-6 bg-error p-3 rounded-full">
                        <FaMinus />
                    </button>
                    <div className="mt-16 px-8">
                        <p>
                            modal of
                        </p>
                    </div>

                </div>
            }
        </div>
    );
};

export default Modal;