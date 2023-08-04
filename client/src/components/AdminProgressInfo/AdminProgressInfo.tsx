

interface AdminProgressInfoProps {
	img?: string 
	title?:string 
	description?:string
}

const AdminProgressInfo = ({img, title, description}:AdminProgressInfoProps) => {
  return (
	<div className="py-4 px-6 bg-black  max-w-[270px] rounded-lg flex items-center space-x-4  text-white">
		<div className="rounded-full flex justify-center items-center  w-14 h-14 bg-white ">
			<img className="w-[30px] h-[30px]" src={img} alt="Иконка" />
		</div>
		<div>
			<span className='block'>{title}</span>
			<span className='block'>{description}</span>
		</div>
	</div>
  )
}

export default AdminProgressInfo