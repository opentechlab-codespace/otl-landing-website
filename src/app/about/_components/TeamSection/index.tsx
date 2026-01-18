import { TeamMember } from "./TeamMember";
import { Slider } from "@/components/ui/slider";
import { teamMembers } from "@/data/team";
import { motion } from "framer-motion";

export function TeamSection() {
  const teamMemberCards = teamMembers.map((member) => (
    <TeamMember key={member.id} {...member} />
  ));

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <Slider 
            items={teamMemberCards}
            autoRotate={true}
            rotateInterval={5000}
            showCount={4}
          />
        </motion.div>
      </div>
    </section>
  );
}