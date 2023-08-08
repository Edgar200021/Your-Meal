import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const navigate = useNavigate()
  return (
    <div className="fixed left-0 top-0 w-full h-[100dvh] bg-modal flex justify-center items-center">
      <div className="relative max-w-[750px] w-full mx-auto rounded-3xl bg-white min-h-[500px] max-h-[500px] h-full">
        <button
          className="absolute right-5 top-5 text-xl font-extrabold text-[#B1B1B1]"
          onClick={() => navigate(-1)}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
