const BasketItem = () => {
  return (
    <li className="flex items-center gap-x-[6px] pb-4 border-silver border-b-2">
      <img
        className="w-16 object-contain rounded-lg"
        src="../../../public/img/burgers/burger-1.jpg"
        alt=""
      />
      <div>
        <span className="block font-normal text-xs ">Супер сырный</span>
        <span className="block font-normal text-xs text-[#B1B1B1] mb-[6px]">
          512г
        </span>
        <span className="blockfont-normal text-xs"> 550₽</span>
      </div>
      <div className="ml-auto px-3 py-2 bg-bg rounded-xl inline-flex items-center justify-center gap-4">
			<button>-</button>
			<span>1</span>
			<button>+</button>
	  </div>
    </li>
  )
}

export default BasketItem
