import { Qualifications, Technology } from "@/components/section/about";

import { Heading } from "@/components/utils";

export default function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden pb-16">
      <Heading title="About" />

      <div className="">
        <div className="container mt-20">
          <h3 className="text-center">Technology</h3>
          <Technology />
        </div>

        <div className="">
          <div className="container mt-20">
            <h3 className="text-center">Qualifications</h3>
            <Qualifications />
          </div>
        </div>
      </div>
    </div>
  );
}
