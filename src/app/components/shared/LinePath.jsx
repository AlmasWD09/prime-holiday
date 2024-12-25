

const LinePath = ({text}) => {
    return (
      <div className="flex flex-col items-center justify-center">
      <h4 className=" text-2xl md:text-4xl text-primary font-semibold mx-8">{text}</h4>
      <div className="h-[4px] w-28 bg-gray-300 mt-4"></div>
    </div>
    )
  }
  
  export default LinePath