import Button from '../../components/Button/Button'

import credit from '../../assets/img/admin/credit.svg'

interface AdminCreditProps {
  className?: string
}

const AdminCredit = ({ className }: AdminCreditProps) => {
  return (
    <div
      className={`  p-11 flex items-center  bg-white rounded-xl gap-x-20 ${className}`}
    >
      <div className="max-w-[260px]">
        <h2 className="font-extrabold text-4xl -tracking-[0.68px] mb-4">
          Reach financial
          <br /> goals faster
        </h2>
        <p className="font-medium text-base text-[#A3AED0] mb-16">
          Use your Venus card around the world with no hidden fees. Hold,
          transfer and spend money.
        </p>
        <Button variants="standart">Learn more</Button>
      </div>
      <div className="grow">
        <img
          src={credit}
          alt="Кредитная карта"
          className="m-w-full block h-auto "
        />
      </div>
    </div>
  )
}

export default AdminCredit
