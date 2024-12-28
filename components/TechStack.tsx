import AvatarCircles from "./ui/avatar-circles";

export function TechStack({
  techStack,
}: {
  techStack: { imageUrl: string; name: string }[];
}) {
  return <AvatarCircles avatarUrls={techStack} />;
}
