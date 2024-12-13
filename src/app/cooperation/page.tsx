import Image from "next/image";
import Banner from "@/components/Banner";
import ContactInfo from "@/components/ContactInfo";
import Sponsorship from "@/components/Sponsorship";
import Slider_Competition from "@/components/Slider_Competition";
import Slider_Live from "@/components/Slider_Live";
import Cooperation_use_picture_game from "@/components/Cooperation_use_picture_game";
import Cong_dong from "@/components/Cong_dong";
import News_cooperation from "@/components/News_cooperation";
import Achievement from "@/components/Achievement";
import Button_Xemthem from "@/components/Button_Xemthem";
export default function Home() {
  return (
    <div className="bg-purple-950">
      <Banner />
      <div>
          <ContactInfo />
      </div>
      <div>
          <Sponsorship />
      </div>
      <div><Slider_Competition /></div>
      <div><Slider_Live /></div>
      <div><Cooperation_use_picture_game /></div>
      <div><Cong_dong /></div>
      <div><Achievement /></div>
      <div><News_cooperation /></div>
      <div><Button_Xemthem href="/news/all"/></div>
    </div>
  );
}
