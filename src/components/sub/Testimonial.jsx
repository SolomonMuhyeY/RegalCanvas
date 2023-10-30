import { Testimonials } from "../../data/testimonial";

export default function Testimonial() {
  return (
    <div className='text-center bg-white py-6 lg:pt-4 pb-24'>
      <h1 className='text-4xl text-black font-sans pt-16 pb-28 '>
        Testimonials
      </h1>
      <div className='text-left grid grid-cols-1 lg:gap-8 lg:grid-cols-4 sm:px-12 box-border justify-center'>
        {Testimonials.map((test) => (
          <div key={test.id} className='bg-antiquewhite py-8 px-4'>
            <div className='flex justify-between items-center space-x-4 m-3'>
              <div className='w-1/2'>
                <p className='font-extrabold text-xl leading-6 font-sans text-brightRed'>
                  {test.name}
                </p>
                <small>{test.catagory}</small>
              </div>
              <div className='w-14 h-14  rounded-full overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src={test.img}
                  alt={`person ${test.id}`}
                />
              </div>
            </div>
            <p>{test.testimony}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
