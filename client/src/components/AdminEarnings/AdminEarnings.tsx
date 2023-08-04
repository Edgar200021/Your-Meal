import miniChart from '../../assets/icons/admin/mini-chart.svg'

import React, { PureComponent } from 'react'
import {
  AreaChart,
  Area,

  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

class AdminEarnings extends PureComponent {
  render() {
    return (
      <div className="rounded-xl bg-white relative">
        <div className="absolute top-6 right-6 bg-[#F4F7FE] w-[30px] h-[30px] flex items-center justify-center rounded-lg">
          <img src={miniChart} alt="Мини диаграма" />
        </div>
        <div className="max-w-[180px] mx-auto px-5 pt-14 ">
          <span className="block text-sm font-medium text-[#A3AED0] text-center">
            This month earnings
          </span>
          <span className="block font-extrabold text-[34px] text-center">
            $682.5
          </span>
          <span className="mx-auto max-w-[58px] py-[5px] px-2 rounded-full bg-primary/60 text-[#FF7020] font-extrabold text-xs flex justify-center align-center">
            +2.45%
          </span>
        </div>
        <ResponsiveContainer width="100%" height="60%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default AdminEarnings
