import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "../OurClasses/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Sculpt your body and build strength with our dynamic Weight Training Classes. Whether you're a beginner or a seasoned lifter, our expert instructors will guide you through effective workouts designed to target every muscle group. From traditional strength exercises to innovative techniques, our classes offer a comprehensive approach to achieving your fitness goals. Join us and experience the transformative power of weight training.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
    description:
    "Find your inner balance and tranquility with our rejuvenating Yoga Classes. Led by experienced instructors, our classes cater to all levels, from beginners to advanced practitioners. Immerse yourself in a holistic practice that combines breath work, mindfulness, and physical postures to promote flexibility, strength, and mental clarity. Whether you're looking to relieve stress, increase flexibility, or enhance your overall well-being, our yoga classes offer a sanctuary for self-discovery and personal growth.",

  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and sculpt your abs with our dynamic Ab Core Classes. Designed to target the abdominal muscles from all angles, our classes incorporate a variety of exercises to help you achieve a toned and defined midsection. From crunches and planks to twists and leg raises, our expert trainers will guide you through a series of challenging yet effective workouts to improve core stability, enhance posture, and reduce the risk of back pain.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "From rock climbing and obstacle courses to hiking and kayaking, our experienced instructors will lead you through adrenaline-pumping adventures that promise excitement and discovery at every turn. Whether you're seeking an escape from the ordinary or craving an adrenaline rush, our Adventure Classes provide the perfect blend of fitness and fun.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:"Elevate your fitness journey with our dynamic Fitness Classes, meticulously crafted to sculpt your body, boost your endurance, and ignite your passion for movement. Led by expert instructors, our diverse range of fitness classes caters to all levels, from beginners to advanced athletes, ensuring everyone finds their perfect fit.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Embark on a transformative journey towards your fitness goals with our comprehensive Training Classes, designed to empower you with the knowledge, skills, and motivation needed to reach new heights of strength, agility, and performance. Led by seasoned trainers, our Training Classes offer personalized guidance and tailored workout plans to help you maximize your potential and achieve lasting results.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Welcome to Our Classes! Discover a diverse range of fitness experiences tailored to suit your goals, preferences, and lifestyle. Whether you're seeking to build strength, increase flexibility, or simply unwind, our classes offer something for everyone. From high-intensity workouts to mindful practices, each class is designed to inspire and empower you on your wellness journey. Explore our class offerings below and find the perfect fit for your fitness journey. Let's embark on this transformative adventure together and unleash your full potential!
</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
