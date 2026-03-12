import Container from "@/components/ui/Container";
import Image from "next/image";
import { images } from "@/config/images";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We visit your property to understand your vision, assess the space, and discuss budget and timeline. We listen first.",
    imageKey: "gallery-4",
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "Our designers create a detailed blueprint and 3D renderings so you can visualize the transformation before we break ground.",
    imageKey: "service-1",
  },
  {
    number: "03",
    title: "Build & Grow",
    description:
      "Our expert crew executes the plan with care. From hardscaping to planting, we treat your property as if it were our own.",
    imageKey: "gallery-1",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-accent">
            How We Work
          </h2>
          <p className="text-muted text-lg">
            A seamless process from concept to completion. We handle the
            details so you can enjoy the results.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={images[step.imageKey as keyof typeof images].src}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="text-accent font-bold text-5xl mb-4 font-heading opacity-50">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {["Transparent pricing", "Licensed & Insured", "Weekly updates"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Process;