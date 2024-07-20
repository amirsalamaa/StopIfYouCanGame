import { forwardRef, useEffect } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime, open, onClose }, ref) {
    useEffect(() => {
        if (open) {
            ref.current.showModal();
        } else {
            ref.current.close();
        }
    }, [open, ref]);

    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <form method="dialog">
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
