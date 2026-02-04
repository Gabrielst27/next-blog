'use client';

import { toast, ToastContainer } from 'react-toastify';

export function ToastifyContainer() {
  const notify = () => toast('Teste');
  return (
    <div>
      <button onClick={notify}>Toast</button>
      <ToastContainer draggable theme="dark" pauseOnHover />
    </div>
  );
}
