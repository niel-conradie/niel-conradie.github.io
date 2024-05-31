import { Form, Globe } from "@/components/section/contact";
import { Heading } from "@/components/utils";

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <Heading title="Contact" />

      <div className="flex flex-col xl:flex-row">
        <div className="flex items-center justify-center xl:w-1/2">
          <Form />
        </div>

        <div className="flex items-center justify-start xl:w-1/2">
          <Globe />
        </div>
      </div>
    </div>
  );
}
