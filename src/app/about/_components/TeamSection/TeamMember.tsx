import { motion } from "framer-motion";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";

interface SocialLink {
  platform: "linkedin" | "twitter" | "github";
  url: string;
}

interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: SocialLink[];
}

export function TeamMember({ id, name, role, image, bio, socialLinks }: TeamMemberProps) {
  const socialIcons = {
    linkedin: LinkedinIcon,
    twitter: TwitterIcon,
    github: GithubIcon,
  };

  return (
    <motion.div key={`team-member-${id}`} className="group w-[280px]">
      <div className="relative h-64 w-full overflow-hidden rounded-xl mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            {socialLinks.map((link, index) => {
              const Icon = socialIcons[link.platform];
              return (
                <a
                  key={`social-${id}-${link.platform}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary text-sm font-medium mb-3">{role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
}