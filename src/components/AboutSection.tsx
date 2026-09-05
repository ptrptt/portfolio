"use client";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, SlideIn } from "@/components/ui/Animations";

export function AboutSection() {
  return (
    <Section id="about" className="bg-white/80 border-y border-white/70 relative">
      <FadeUp>
        <SectionHeader title="About Me" />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — Text */}
        <SlideIn direction="left" delay={0.1}>
          <div className="space-y-6 bg-slate-50/70 p-8 rounded-2xl border border-slate-200/70 shadow-xs">
            <div className="space-y-4 text-base leading-relaxed text-gray-600">
              <p className="indent-8">
                สวัสดีค่ะ ดิฉัน นางสาวภัทรพร ตั้งแต่ง นักศึกษาชั้นปีที่ 3 สาขาวิศวกรรมซอฟต์แวร์
                มีความสนใจอย่างมากในด้าน Software Testing  มีความรู้และประสบการณ์ในการออกแบบ Test Case การวิเคราะห์ความต้องการของระบบ (Requirement Analysis)
                และการทดสอบการทำงานของระบบ (Functional Testing)
              </p>
              <p className="indent-8">
                รวมถึงมีพื้นฐานด้าน Automated Testing โดยเคยฝึกเขียน Automated Test ด้วย Playwright และ Robot Framework
                เพื่อทดสอบการทำงานของ Web Application และตรวจสอบผลลัพธ์ของระบบ ผ่านโครงงานในมหาวิทยาลัย
              </p>
              <p className="indent-8">
                ดิฉันเป็นคนใส่ใจในรายละเอียด มีความรับผิดชอบ และพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ
                โดยมีความตั้งใจที่จะพัฒนาทักษะทั้งด้าน Manual Testing และ Automated Testing
                เพื่อเตรียมความพร้อมสำหรับการทำงานด้าน Software Tester ในสภาพแวดล้อมการทำงานจริง
              </p>
            </div>
          </div>
        </SlideIn>

        {/* RIGHT — Photo */}
        <SlideIn direction="right" delay={0.2}>
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-sm h-80 sm:h-96 lg:h-[420px] rounded-3xl bg-white p-2.5 border border-[#D0F0EC] shadow-xl shadow-[#40E0D0]/12 overflow-hidden"
              aria-label="About profile image"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/abot.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </Section>
  );
}
