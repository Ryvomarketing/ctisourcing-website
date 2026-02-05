import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on sustainable sourcing, the science of bee products, organic certification, and the communities behind CTI Sourcing's supply chain in Tanzania.",
  openGraph: {
    title: "Blog | CTI Sourcing",
    description:
      "Insights on sustainable sourcing, the science of bee products, and the communities behind our supply chain.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
