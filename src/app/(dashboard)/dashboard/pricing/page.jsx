import { pricingPlans } from "@/constants";
import { FaCheck } from "react-icons/fa";


export default function Pricing() {
   
  return (
    <div className="w-10/12 mx-auto h-full table">
      <div className="table-cell align-middle text-center">
         <span className="text-lg border rounded-md px-4 py-1">Our Pricing <span className="font-playfair italic">Plans</span></span>
         <h1 className="text-4xl font-bold mt-5">Accessible <span className="font-playfair italic text-primary">therapy</span> for every mind</h1>

         {/* pricing cards */}
         <div className="flex gap-5 mt-10 justify-center">
            {
               pricingPlans.map(plan => (
                  <div key={plan.id} className={`bg-[#001742] p-8 pt-10 rounded-md ${plan.recommended && 'border border-white/60'} relative min-w-sm`}>
                     {
                        plan.recommended ? <span className="absolute top-0 right-0 bg-primary px-2 py-1 rounded-tr-md rounded-bl-md">Recommended</span> : null
                     }
                     <h2 className="text-primary text-2xl font-semibold">{plan.name}</h2>
                     <p className="text-lg">{plan.description}</p>

                     <ul className="mt-10 flex flex-col gap-3">
                        {
                           plan.features.map(feature => (
                              <li key={feature.id} className="flex items-center gap-3">
                                 <FaCheck className={`${feature.included ? 'text-primary' : 'text-white/30'}`} />
                                 {feature.name}
                              </li>
                           ))
                        }
                     </ul>

                     <h1 className="my-10 text-3xl font-bold">${plan.price} </h1>

                     <button className="bg-primary w-full py-3 rounded-md">Choice this plan</button>
                  </div>
               ))
            }
         </div>
      </div>
    </div>
  )
}
