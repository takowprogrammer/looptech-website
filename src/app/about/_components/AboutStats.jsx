import React from 'react'

const AboutStats = () => {
  return (
    <section className="py-20 bg-primary-800 text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      
      {/* Stat 1 */}
      <div className="space-y-2 flex flex-col items-center">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold text-primary-500 tracking-tighter">20</span>
          <span className="text-xl font-bold opacity-80">+</span>
        </div>
        <p className=" opacity-85">Projects Completed</p>
      </div>

      {/* Stat 2 */}
      <div className="space-y-2 flex flex-col items-center">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold text-primary-500 tracking-tighter">50</span>
          <span className="text-xl font-bold opacity-80">+</span>
        </div>
        <p className=" opacity-85">Satisfied Clients</p>
      </div>

      {/* Stat 3 */}
      <div className="space-y-2 flex flex-col items-center">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold text-primary-500 tracking-tighter">100</span>
          <span className="text-xl font-bold opacity-80">+</span>
        </div>
        <p className=" opacity-85">Engineers Trained</p>
      </div>

      {/* Stat 4 */}
      <div className="space-y-2 flex flex-col items-center">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold text-primary-500 tracking-tighter">98</span>
          <span className="text-xl font-bold opacity-80">%</span>
        </div>
        <p className=" opacity-85">Delivery rate</p>
      </div>

    </div>
  </div>
</section>
  )
}

export default AboutStats
