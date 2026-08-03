import React, { memo } from "react";
import { topics } from "../../data/topicsData";

const TopicCard = memo(({ title, href, Icon }) => (
  <a
    href={href}
    className="group flex flex-col items-center gap-3 p-5 card hover:-translate-y-1 transition-transform duration-200"
  >
    <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-accent2/10 group-hover:from-accent/20 group-hover:to-accent2/20 transition-colors duration-200">
      <Icon className="w-8 h-8 text-accent2" />
    </div>
    <span className="text-sm font-semibold text-center text-blue dark:text-platinum leading-tight">
      {title}
    </span>
  </a>
));

function PlatformCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          title={topic.title}
          href={topic.link}
          Icon={topic.icon}
        />
      ))}
    </div>
  );
}

export default PlatformCard;

