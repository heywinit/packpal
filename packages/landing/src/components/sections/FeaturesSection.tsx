import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users2,
  ListChecks,
  Bell,
  Shield,
  ClipboardCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Role-Based Access",
    description:
      "Assign Owner, Admin, Member, and Viewer roles to manage permissions and responsibilities effectively.",
    icon: Shield,
  },
  {
    title: "Smart Checklists",
    description:
      "Create and manage categorized packing lists with item assignments and status tracking.",
    icon: ListChecks,
  },
  {
    title: "Real-Time Progress",
    description:
      "Monitor packing progress with live updates as items move from 'To Pack' to 'Packed' to 'Delivered'.",
    icon: Clock,
  },
  {
    title: "Team Collaboration",
    description:
      "Work together seamlessly with shared lists and clear responsibility assignments.",
    icon: Users2,
  },
  {
    title: "Conflict Detection",
    description:
      "Receive instant alerts for duplicate items and potential conflicts in your packing lists.",
    icon: Bell,
  },
  {
    title: "Status Tracking",
    description:
      "Keep track of every item's status and get a complete overview of your group's packing progress.",
    icon: ClipboardCheck,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto py-12 md:py-24 px-4">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Powerful Features for Group Organization
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to streamline group packing and keep everyone on
          the same page.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-colors h-full"
            >
              <CardHeader className="pb-2 md:pb-4">
                <div className="size-10 md:size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="size-5 md:size-6 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
