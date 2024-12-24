"use client"

const Ground = () => {
    const grounds = [
        {
        image : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title1 : "Immersion in Cultural Oman",
        title2 : "9 Days From"
        },
        {
        image : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title1 : "Immersion in Cultural Oman",
        title2 : "9 Days From"
        },
        {
        image : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title1 : "Immersion in Cultural Oman",
        title2 : "9 Days From"
        },
    ]
  return (
    <>
    <section className="container mx-auto px-4">
    <h2 className="text-primary text-center font-Montserrat text-[38px] font-semibold">All-Inclusive ground packages</h2>

    {/* ************** */}
        <div className="grid grid-cols-1 gap-2 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            grounds.map((ground,idx)=>{
                return (
                    <div key={idx}>
                    <div className="relative max-w-md">
                        <img
                            className="object-cover object-center w-full h-64  lg:h-96"
                            src={ground.image}
                            alt=""
                        />
                        <div className="absolute w-full flex  items-center justify-between bottom-0 p-3 bg-[#135029] text-white">
                           <div>
                            <h5>{ground.title1}</h5>
                            <h5>{ground.title2} <span className="font-bold">$2525</span></h5>
                           </div>
                            <div className="">
                                <button className="bg-primary text-white px-4 py-2">View</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
          }
        </div>
    </section>
    </>
  )
}

export default Ground
