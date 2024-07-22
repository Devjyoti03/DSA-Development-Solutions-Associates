import img from "../../../assets/maintain.gif";
import IntroBanner from "../../landing/IntroBanner";

import TabServiceWrapper from "./TabServiceWrapper"
import {MaintenanceSupportServices} from './ourServiceNavData'

const MaintainanceSupport = () => {
  return (
    <section className="about-us  lg:max-w-7xl mx-auto">
      <IntroBanner
        title="Maintainance & Support"
        img={img}
        style={"bg-gradient-to-r from-gray-900 via-gray-700 to-black rounded-md mt-3 md:mt-0 md:rounded-lg   "}
        opacity="absolute w-full h-full bg-black opacity-50"
      />
   
    {/* <h1 className="text-5xl text-center font-bold ">Maintainance & Support</h1> */}
    <TabServiceWrapper data={MaintenanceSupportServices} />
    </section>
  )
}

export default MaintainanceSupport