const SkeletonCard = () => {
  return (
    <>
      <div className="card bg-light_Mode_Text/10 dark:bg-dark_Mode_Text/10 h-[25.9375rem] w-[20.5rem] lg:h-[21.25rem] lg:w-[16.5625rem] rounded-lg mx-auto lg:mx-0 overflow-hidden shadow-xl shadow-light_Mode_Text/5 cursor-pointer animate-skeleton">
        {/* image */}
        <div className="h-[12.5rem] w-[20.5rem] lg:w-[16.5625rem] lg:h-40 bg-light_Mode_Background/50 dark:bg-dark_Mode_Background/50"></div>
        {/* text */}
        <div className="w-full h-[13.5rem] lg:h-44 p-7 lg:p-6">
          <p className=" mb-6 lg:mb-5 h-8 bg-light_Mode_Text/10 dark:bg-dark_Mode_Text/10"></p>
          <div className="space-y-1.5">
            <p className="h-6 bg-light_Mode_Text/10 dark:bg-dark_Mode_Text/10"></p>
            <p className="h-6 bg-light_Mode_Text/10 dark:bg-dark_Mode_Text/10"></p>
            <p className="h-6 bg-light_Mode_Text/10 dark:bg-dark_Mode_Text/10"></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkeletonCard
