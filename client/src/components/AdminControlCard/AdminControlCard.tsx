import hand from '../../assets/icons/admin/hand.svg'
import Button from '../Button/Button'

const AdminControlCard = () => {
  return (
    <div className="py-7 px-5 bg-white rounded-xl w-full">
      <div>
        <img src={hand} alt="Отпечаток пальца" />
      </div>
      <span className="block font-extrabold text-2xl mb-2 max-w-[270px]">Control card security in-app with a tap</span>
      <span className='block mb-20 text-[#A3AED0] max-w-[240px]'>Discover our cards benefits, with one tap.</span>
	  <Button variants='full'>Cards</Button>
    </div>
  )
}

export default AdminControlCard
